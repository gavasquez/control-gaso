import React, { useState } from 'react';
import styled from "styled-components";
import { Header } from '../organismos/Header';
import { ContentFiltros } from '../atomos/ContentFiltros';
import { BtnDesplegable } from '../moleculas/BtnDesplegable';
import { useOperaciones } from '../../store/OperacionesStore';
import { ContentMenuDesplegable } from '../moleculas/ContentMenuDesplegable';
import { DataDesplegableTipo } from '../../utils/dataEstatica';

export const CategoriasTemplate = () => {

  const [ state, setState ] = useState( false );
  const { colorCategoria, tituloBtnDesp, bgCategoria, setTipo } = useOperaciones();

  const cambiarTipo = ( parametro ) => {
    setTipo( parametro );
  };

  return (
    <Container>
      <header className='header'>
        <Header state={ state } setState={ setState } />
      </header>
      <section className='tipo'>
        <ContentFiltros>
          <BtnDesplegable
            texto={ tituloBtnDesp }
            bgcolor={ bgCategoria }
            textcolor={ colorCategoria } />
          <ContentMenuDesplegable data={ DataDesplegableTipo } top="112%" funcion={ cambiarTipo } />
        </ContentFiltros>
      </section>
      <section className='area2'>
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

grid-template: "header" 100px "tipo" 100px "area2" 50px "main" auto;
.header {
  grid-area: header;
  background: rgba(103,93,241,0.14);
  display: flex;
  align-items: center;
}
.tipo {
  grid-area: tipo;
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
}
`;
