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
    
    if ( error ) {
      alert( "MostrarUsuarios", error );
    }
    if ( data ) {
      return data[ 0 ];
    }
  } catch ( error ) {
    alert( "MostrarUsuarios", error.message );
  }
};