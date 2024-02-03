import { create } from 'zustand';
import { v } from "../styles/Variables";

export const useOperaciones = create( ( set, get ) => ( {
  tipo: "i",
  tituloBtnDesp: "Categorias ingresos",
  colorCategoria: () => v.colorIngresos,
  bgCategoria: () => v.colorbgingresos,
  setTipo: ( parametro ) => {
    set( {
      tipo: parametro,
    } );
    const { tipo } = get();
    set( {
      tituloBtnDesp: tipo == "i" ? "Categorias ingresos" : "Categorias gastos",
    } );
    set( {
      colorCategoria: tipo == "i" ? v.colorIngresos : v.colorGastos,
    } );
    set( {
      bgCategoria: tipo == "i" ? v.colorbgingresos : v.colorbgGastos,
    } );
  }
} ) );