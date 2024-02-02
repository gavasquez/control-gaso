import Swal from 'sweetalert2';
import { ObtenerIdAuthSupabase } from './gobalSupabse';
import { supabase } from "./supabase.config";

export const InsertarUsuarios = async ( parametros ) => {
  try {
    const { data } = await supabase.from( 'usuarios' ).insert( parametros ).select();
    return data;
  } catch ( error ) {

  }
};

export const MostrarUsuarios = async () => {
  try {
    const idAuthSupaBase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase.from( 'usuarios' ).select().eq( "idauth_supabase", idAuthSupaBase );
/* 
    if ( error ) {
      alert( "MostrarUsuarios", error );
    } */
    if ( data ) {
      return data[ 0 ];
    }
  } catch ( error ) {
    /* alert( "MostrarUsuarios", error.message ); */
  }
};

export const EditarTemaMonedaUsuarios = async ( parametros ) => {
  try {
    const { error } = await supabase.from( 'usuarios' ).update( parametros ).eq( "id", parametros.id );
    if ( error ) {
      alert( "Error al editar usuario", error );
    }
    Swal.fire( {
      position: "center",
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500
    } );
  } catch ( error ) {
    alert( "EditarTemaMonedaUsuarios", error.message );
  }
};