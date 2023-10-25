'use client';

import { useCallback, useContext, useEffect, useState } from 'react';

import { Typography } from '@mui/material';

import { CarContext } from '@/context/CarContext';
import { getDetails } from '@/services/results';
import { GetDetailsResponseProps } from '@/types/services/results';

import styles from './page.module.css';

export default function Results() {
  const { details } = useContext(CarContext);

  const [detailsData, setDetailsData] = useState<GetDetailsResponseProps>();

  const handleDetails = useCallback(async () => {
    await getDetails({
      idBrand: details.brand,
      idModel: details.model,
      idYear: details.year
    }).then((response) => setDetailsData(response));
  }, [details.brand, details.model, details.year]);

  useEffect(() => {
    handleDetails();
  }, [handleDetails]);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Tabela Fipe: Preço {detailsData?.Modelo}
        </Typography>
        <div className={styles.tag}>{detailsData?.Valor}</div>
        <Typography
          variant="subtitle1"
          fontWeight={500}
          sx={{ mt: 2, color: '#666' }}
        >
          Este é o preço de compra do veículo.
        </Typography>
      </div>
    </main>
  );
}
