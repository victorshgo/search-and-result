import {
  GetDetailsProps,
  GetDetailsResponseProps
} from '@/types/services/results';

import api from './api';

export async function getDetails({
  idBrand,
  idModel,
  idYear
}: GetDetailsProps) {
  const { data } = await api.get<GetDetailsResponseProps>(
    `/marcas/${idBrand}/modelos/${idModel}/anos/${idYear}`
  );
  return data;
}
