export interface DefaultProps {
  codigo: string;
  nome: string;
}

export interface GetBrandResponseProps extends DefaultProps {}

export interface GetModelProps {
  idBrand: string;
}

export interface GetModelResponseProps {
  anos: DefaultProps[];
  modelos: DefaultProps[];
}

export interface GetYearProps {
  idBrand: string;
  idModel: string;
}

export interface GetYearResponseProps extends DefaultProps {}
