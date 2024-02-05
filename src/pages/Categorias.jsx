import styled from "styled-components";
import { CategoriasTemplate } from '../components/templates/CategoriasTemplate';
import { useUsuariosStore } from '../store/UsuariosStore';
import { useCategoriasStore } from '../store/CategoriasStore';
import { useQuery } from '@tanstack/react-query';


export const Categorias = () => {

  const { dataUsuarios } = useUsuariosStore();

  const { dataCategorias, mostrarCategorias } = useCategoriasStore();

  const { isLoading, error } = useQuery( {
    queryKey: [ "mostrarCategorias", dataUsuarios.id ],
    queryFn: () => mostrarCategorias( { idusuario: dataUsuarios.id, tipo: "i" } )
  } );

  if ( isLoading ) {
    return <h1>Cargando...</h1>;
  }

  if ( error ) {
    return <h1>Error...</h1>;
  }


  return (
    <Container>
      <CategoriasTemplate data={dataCategorias} />
    </Container>
  );
};

const Container = styled.div`
height: 100vh;
`;