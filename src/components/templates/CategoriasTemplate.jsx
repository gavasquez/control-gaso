import React, { useState } from 'react';
import styled from "styled-components";
import { Header } from '../organismos/Header';
import { ContentFiltros } from '../atomos/ContentFiltros';
import { BtnDesplegable } from '../moleculas/BtnDesplegable';
import { useOperaciones } from '../../store/OperacionesStore';
import { ContentMenuDesplegable } from '../moleculas/ContentMenuDesplegable';
import { DataDesplegableTipo } from '../../utils/dataEstatica';
import { BtnFiltro } from '../moleculas/BtnFiltro';
import { v } from "../../styles/Variables";
import { TablaCategorias } from '../organismos/tablas/TablaCategorias';

export const CategoriasTemplate = ({data}) => {

  const [ state, setState ] = useState( false );
  const [ stateTipo, setStateTipo ] = useState( false );

  const { colorCategoria, tituloBtnDesp, bgCategoria, setTipo } = useOperaciones();

  const cambiarTipo = ( parametro ) => {
    setTipo( parametro );
    setStateTipo( !stateTipo );
    setState( false );
  };

  const cerrarDesplegables = () => {
    setStateTipo( false );
    setState( false );
  };

  const openTipo = () => {
    setStateTipo( !stateTipo );
    setState( false );
  };

  const openUser = () => {
    setState( !state );
    setStateTipo( !setStateTipo );
  };

  return (
    <Container onClick={ cerrarDesplegables }>
      <header className='header'>
        <Header state={ state } setState={ openUser } />
      </header>
      <section className='tipo'>
        <ContentFiltros>
          <div onClick={ ( e ) => e.stopPropagation() }>
            <BtnDesplegable
              texto={ tituloBtnDesp }
              bgcolor={ bgCategoria }
              textcolor={ colorCategoria }
              funcion={ openTipo }
            />
            {
              stateTipo && ( <ContentMenuDesplegable data={ DataDesplegableTipo } top="112%" funcion={ cambiarTipo } /> )
            }
          </div>
        </ContentFiltros>
      </section>
      <section className='area2'>
        <ContentFiltro>
          <BtnFiltro
            bgcolor={ bgCategoria }
            textcolor={ colorCategoria } 
            icono={<v.agregar />}
            />
        </ContentFiltro>
      </section>
      <section className='main'>
        <TablaCategorias data={data}/>
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
  justify-content: end;
}
.main{
  grid-area: main;
  background: rgba(179,46,241,0.14);
}
`;

const ContentFiltro = styled.div`
display: flex;
flex-wrap: wrap;
`;