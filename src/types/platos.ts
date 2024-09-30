export type API = {
  list: Plato[];
  pageInfo: PageInfo;
  stats: Stats;
};

export type PageInfo = {
  totalRows: number;
  page: number;
  pageSize: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export type Stats = {
  dbQueryTime: string;
};

export type Plato = {
  Id: number;
  Nombre: string;
  Precio: string;
  Photo: string;
  Categoria: CategoriaPlato;
  Vegetariana: boolean;
  Menu: boolean;
};

export type Reserva = {
  Nombre: string;
  Telefono: string;
  Email: string;
  Fecha: string;
  Comentario: string;
  Hora: string;
};

export enum CategoriaPlato {
  ENTRANTE = "Entrante",
  PRINCIPAL = "Principal",
  POSTRE = "Postre",
}

export const PLATOS_POR_PAGINA = 6;
