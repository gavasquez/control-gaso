import { supabase } from './supabase.config';
import Swal from "sweetalert2";

export const InsertarCategorias = async ( parametros ) => {
  try {
    const { data, error } = await supabase.from( "categorias" ).insert( parametros ).select();
    if ( error ) {
      Swal.fire( {
        icon: "error",
        title: "Oops...",
        text: "Ya existe un registro con " + parametros.descripcion,
        footer: '<a href="">agregue una nueva descripcion</a>'
      } );
    }
    if ( data ) {
      Swal.fire( {
        icon: "success",
        position: "center",
        title: "Categoria",
        text: "Se creo correctamente la categoria",
        showCancelButton: false,
        timer: 1500
      } );
    }
  } catch ( error ) {
    alert( "InsertCategorias", error.message() );
  }
};

export const MostrarCategorias = async ( parametros ) => {
  try {
    const { data } = await supabase.from( "categorias" )
      .select()
      .eq( "idusuario", parametros.idusuario )
      .eq( "tipo", parametros.tipo )
      .order( "id", { ascending: false } );
    return data;
  } catch ( error ) {
  }
};

export const EliminarCategorias = async ( parametros ) => {
  try {
    const { error } = await supabase.from( "categorias" ).delete().eq( "idusuario", parametros.idusuario ).eq( "id", parametros.id );
    if ( error ) {
      alert( "Error al eliminar", error );
    }
  } catch ( error ) {
    alert( "EliminarCategorias", error.message() );
  }
};

export const EditarCategorias = async ( parametros ) => {
  try {
    const { error } = await supabase.from( "categorias" ).update( parametros ).eq( "idusuario", parametros.idusuario ).eq( "id", parametros.id );
    if ( error ) {
      alert( "Error al editar categoria", error );
    }
  } catch ( error ) {
    alert( "EditarCategorias", error.message() );
  }
};