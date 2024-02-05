import { create } from 'zustand';
import { EditarCategorias, EliminarCategorias, InsertarCategorias, MostrarCategorias } from '../supebase/crudCategorias';


export const useCategoriasStore = create( ( set, get ) => ( {
  dataCategorias: [],
  mostrarCategorias: async ( parametros ) => {
    const response = await MostrarCategorias( parametros );
    set( { dataCategorias: response } );
    return response;
  },
  insertarCategorias: async ( parametros ) => {
    await InsertarCategorias( parametros );
    const { mostrarCategorias } = get();
    set( mostrarCategorias( parametros ) );
  },
  eliminarCategoria: async ( parametros ) => {
    await EliminarCategorias( parametros );
    const { mostrarCategorias } = get();
    set( mostrarCategorias( parametros ) );
  },
  editarCategoria: async ( parametros ) => {
    await EditarCategorias( parametros );
    const { mostrarCategorias } = get();
    set( mostrarCategorias( parametros ) );
  }
} ) );