import React, { useState } from 'react';
import styled from "styled-components";
import { Header } from '../organismos/Header';
import { Selector } from '../organismos/Selector';
import { v } from '../../styles/Variables';
import { ListaPaises } from '../organismos/ListaPaises';
import { useUsuariosStore } from '../../store/UsuariosStore';

export const ConfiguracionTemplate = () => {

  const [ state, setState ] = useState( false );

  const [ select, setSelect ] = useState( [] );

  const [ stateListaPaises, setStateListaPaises ] = useState( false );

  const { dataUsuarios } = useUsuariosStore();

  const moneda = select.symbol ? select.symbol : dataUsuarios.moneda;
  const pais = select.countryName ? select.countryName : dataUsuarios.pais;
  const paisSeleccionado = "🐷 " + moneda + " " + pais;

  return (
    <Container>
      <header className='header'>
        <Header state={ state } setState={ setState } />
      </header>
      <section className='area1'>
        <h1>Ajustes</h1>
      </section>
      <section className='area2'>
        <ContentCard>
          <span>Moneda:</span>
          <Selector
            texto1={ paisSeleccionado }
            state={ stateListaPaises }
            funcion={ () => setStateListaPaises( !stateListaPaises ) }
            color={ v.colorselector }
          />
          {
            stateListaPaises
            &&
            (
              <ListaPaises
                setSelect={ setSelect }
                setState={ () => setStateListaPaises( !stateListaPaises ) } />
            )
          }

        </ContentCard>
      </section>
      <section className='main'>
      </section>
    </Container>
  );
};

const Container = styled.div`
min-height: 100vh;
padding: 15px;
width: 100%;
background: ${ ( props ) => props.theme.bgtotal };
color: ${ ( { theme } ) => theme.text };
display: grid;

grid-template: "header" 100px "area1" 100px "area2" 50px "main" auto;
.header {
  grid-area: header;
  background: rgba(103,93,241,0.14);
  display: flex;
  align-items: center;
}
.area1 {
  grid-area: area1;
  background: rgba(229,67,26,0.14);
  display: flex;
  align-items: center;
}
.area2 {
  grid-area: area2;
  background: rgba(77,237,106,0.14);
  display: flex;
  align-items: center;
}
.main{
  grid-area: main;
  background: rgba(179,46,241,0.14);
}`;
const ContentCard = styled.div`
display: flex;
text-align: center;
align-items: center;
gap: 20px;
position: relative;
width: 100%;
justify-content: center;
`;