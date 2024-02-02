import { create } from 'zustand';
import { EditarTemaMonedaUsuarios, MostrarUsuarios } from '../supebase/crudUsuarios';


export const useUsuariosStore = create( ( set, get ) => ( {
  dataUsuarios: [],
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set( { dataUsuarios: response } );
    if ( response ) {
      return response;
    } else {
      return [];
    }
  },
  editarTemaMonedaUsr: async ( parametros ) => {
    await EditarTemaMonedaUsuarios( parametros );
    const { mostrarUsuarios } = get();
    set( mostrarUsuarios );
  }
} ) );