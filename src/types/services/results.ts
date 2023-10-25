export interface GetDetailsProps {
  idBrand: string;
  idModel: string;
  idYear: string;
}

export interface GetDetailsResponseProps {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}
