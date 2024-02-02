import styled from "styled-components";
import { Device } from '../../styles/breakpoints';
import { BtnCerrar } from '../atomos/BtnCerrar';

export const ListaGenerica = ( { data, setState, funcion } ) => {

  const seleccionar = ( parametro ) => {
    funcion( parametro );
    setState();
  };



  return (
    <Container>
      <section className='contentClose'>
        <span>Selecciona el Tema</span>
        <BtnCerrar funcion={ setState } />
      </section>

      <section className='contentItems'>
        {
          data.map( ( item, index ) => {
            return (
              <ItemContainer key={ index } onClick={ () => seleccionar( item ) }>
                <span>{ item.icono }</span>
                <span>{ item.descripcion }</span>
              </ItemContainer>
            );
          } )
        }
      </section>
    </Container>
  );
};

const Container = styled.div`
z-index: 3;
display: flex;
flex-direction: column;
background: ${ ( props ) => props.theme.bgtotal };
color: ${ ( props ) => props.theme.text };
position: absolute;
margin-bottom: 15px;
bottom: 88%;
width: 100%;
padding: 10px;
border-radius: 10px;
border: 3px solid;
gap: 10px;
@media ${ () => Device.tablet } {
  width: 400px;
}
.contentClose{
  display: flex;
  justify-content: space-between;
}
`;

const ItemContainer = styled.div`
gap: 10px;
display: flex;
padding: 10px;
border-radius: 10px;
cursor: pointer;
transition: 0.3s;
&:hover{
  background-color: #989494;
}
`;