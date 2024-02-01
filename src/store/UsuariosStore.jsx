import { create } from 'zustand';
import { MostrarUsuarios } from '../supebase/crudUsuarios';


export const useUsuariosStore = create( ( set ) => ( {
  dataUsuarios: [],
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set( { dataUsuarios: response } );
    if(response){
      return response;
    }else {
      return []
    }
  }
} ) );