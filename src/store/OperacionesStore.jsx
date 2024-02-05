import { create } from 'zustand';
import { v } from "../styles/Variables";

export const useOperaciones = create( ( set, get ) => ( {
  tituloBtnDesp: "Categorias ingresos",
  colorCategoria: () => v.colorIngresos,
  bgCategoria: () => v.colorbgingresos,
  setTipo: ( parametro ) => {
    set( {
      tituloBtnDesp: parametro.text,
    } );
    set( {
      colorCategoria: parametro.color,
    } );
    set( {
      bgCategoria: parametro.bgcolor,
    } );
  }
} ) );