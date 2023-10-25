'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';

import { Typography, Card, Button, Box } from '@mui/material';

import { Select } from '@/components/Select';
import { CarContext } from '@/context/CarContext';
import { getBrands, getModels, getYears } from '@/services/search';
import {
  GetBrandResponseProps,
  GetModelResponseProps,
  GetYearResponseProps
} from '@/types/services/search';

import styles from './page.module.css';

export default function Search() {
  const { setDetails } = useContext(CarContext);

  const router = useRouter();
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [brandsData, setBrandsData] = useState<GetBrandResponseProps[]>([]);
  const [modelsData, setModelsData] = useState<GetModelResponseProps>();
  const [yearsData, setYearsData] = useState<GetYearResponseProps[]>([]);

  const handleBrands = useCallback(async () => {
    await getBrands().then((response) => setBrandsData(response));
  }, []);

  const handleModels = useCallback(async () => {
    await getModels({ idBrand: brand }).then((response) =>
      setModelsData(response)
    );
  }, [brand]);

  const handleYears = useCallback(async () => {
    await getYears({ idBrand: brand, idModel: model }).then((response) =>
      setYearsData(response)
    );
  }, [brand, model]);

  const handleConsultValues = () => {
    setDetails({
      brand,
      model,
      year
    });

    router.push('/results');
  };

  useEffect(() => {
    handleBrands();
  }, [handleBrands]);

  useEffect(() => {
    if (brand) {
      handleModels();
    }
  }, [brand, handleModels]);

  useEffect(() => {
    if (brand && model) {
      handleYears();
    }
  }, [brand, handleYears, model]);

  return (
    <main className={styles.main}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Tabela Fipe
      </Typography>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Consulte o valor de um veículo de forma gratuita
      </Typography>

      <Card
        className={styles.card}
        sx={{
          width: 525,
          mt: 2,
          paddingY: 5,
          paddingX: 7
        }}
      >
        <Select
          label="Marca"
          options={brandsData}
          value={brand}
          setValue={setBrand}
        />

        <Box sx={{ mt: 2 }}>
          <Select
            label="Modelo"
            options={modelsData?.modelos ?? []}
            value={model}
            setValue={setModel}
          />
        </Box>

        {model && (
          <Box sx={{ mt: 2 }}>
            <Select
              label="Ano"
              options={yearsData}
              value={year}
              setValue={setYear}
            />
          </Box>
        )}

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            disabled={!brand || !model || !year}
            size="large"
            onClick={handleConsultValues}
            sx={{ mt: 4, textDecoration: 'none' }}
          >
            Consultar preço
          </Button>
        </Box>
      </Card>
    </main>
  );
}
