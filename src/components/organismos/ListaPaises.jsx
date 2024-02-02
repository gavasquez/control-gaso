import styled from "styled-components";
import { v } from '../../styles/Variables';
import { InputBuscadorLista } from '../moleculas/InputBuscadorLista';
import iso from "iso-country-currency";
import { ConvertirCapitalize } from '../../utils/Conversiones';
import { useState } from 'react';
import { Device } from '../../styles/breakpoints';
import { BtnCerrar } from '../atomos/BtnCerrar';

export const ListaPaises = ( { setSelect, setState } ) => {

  const [ dataResult, setDataResult ] = useState( [] );

  const isoCodigos = iso.getAllISOCodes();


  const buscar = ( event ) => {
    let filtrado = isoCodigos.filter( item => {
      return item.countryName === ConvertirCapitalize( event.target.value );
    } );
    setDataResult( filtrado );
  };

  const seleccionar = ( parametro ) => {
    setSelect( parametro );
    setState();
  };

  return (
    <Container>
      <header className='header'>
        <span>Busca tu país</span>
        <BtnCerrar funcion={ setState } />
      </header>
      <InputBuscadorLista onChange={ buscar } placeholder='Buscar...' />
      {
        dataResult.length > 0 &&
        dataResult.map( ( item, index ) => {
          return (
            <ItemContainer key={ index } onClick={ () => seleccionar( item ) }>
              <span>{ item.countryName }</span>
              <span>{ item.symbol }</span>
            </ItemContainer>
          );
        } )
      }
    </Container>
  );
};

const Container = styled.div`
margin-top: 7px;
position: absolute;
top: 88%;
width: 100%;
display: flex;
flex-direction: column;
background: ${ ( props ) => props.theme.bgtotal };
border-radius: 10px;
border: 3px solid #3a3a3a;
padding: 10px;
gap: 10px;
color: ${ ( props ) => props.theme.text };
z-index: 3;
@media ${ Device.tablet } {
  width: 400px;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: inherit;
}
`;

const ItemContainer = styled.section`
gap: 10px;
display: flex;
padding: 10px;
border-radius: 10px;
cursor: pointer;
transition:0.3s;
&:hover{
  background-color: #ada6a6;
}
`;