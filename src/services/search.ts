import {
  GetModelProps,
  GetYearProps,
  GetBrandResponseProps,
  GetModelResponseProps,
  GetYearResponseProps
} from '@/types/services/search';

import api from './api';

export async function getBrands() {
  const { data } = await api.get<GetBrandResponseProps[]>('/marcas');
  return data;
}

export async function getModels({ idBrand }: GetModelProps) {
  const { data } = await api.get<GetModelResponseProps>(
    `/marcas/${idBrand}/modelos`
  );
  return data;
}

export async function getYears({ idBrand, idModel }: GetYearProps) {
  const { data } = await api.get<GetYearResponseProps[]>(
    `/marcas/${idBrand}/modelos/${idModel}/anos`
  );
  return data;
}
