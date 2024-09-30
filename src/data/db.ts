import { Plato, CategoriaPlato } from "../types/platos";

export const platos: Plato[] = [
  {
    Id: 1,
    Nombre: "Sopa Miso",
    Precio: "$5.00",
    Photo: "/images/sopa-miso.jpg",
    Categoria: CategoriaPlato.ENTRANTE,
    Vegetariana: true,
    Menu: false,
  },
  {
    Id: 2,
    Nombre: "Sushi Roll",
    Precio: "$12.00",
    Photo: "/images/sushi-roll.jpg",
    Categoria: CategoriaPlato.PRINCIPAL,
    Vegetariana: false,
    Menu: true,
  },
  {
    Id: 3,
    Nombre: "Mochi",
    Precio: "$6.00",
    Photo: "/images/mochi.jpg",
    Categoria: CategoriaPlato.POSTRE,
    Vegetariana: true,
    Menu: false,
  },
];
