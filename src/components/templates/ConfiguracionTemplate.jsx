import React, { useState } from 'react';
import styled from "styled-components";
import { Header } from '../organismos/Header';
import { Selector } from '../organismos/Selector';
import { v } from '../../styles/Variables';
import { ListaPaises } from '../organismos/ListaPaises';
import { useUsuariosStore } from '../../store/UsuariosStore';
import { ListaGenerica } from '../moleculas/ListaGenerica';
import { TemasData } from '../../utils/dataEstatica';
import { BtnSave } from '../moleculas/BtnSave';

export const ConfiguracionTemplate = () => {

  const [ state, setState ] = useState( false );

  const [ select, setSelect ] = useState( [] );

  const [ stateListaPaises, setStateListaPaises ] = useState( false );

  const { dataUsuarios, editarTemaMonedaUsr } = useUsuariosStore();
  //* Pais Moneda
  const moneda = select.symbol ? select.symbol : dataUsuarios.moneda;
  const pais = select.countryName ? select.countryName : dataUsuarios.pais;
  const paisSeleccionado = "🐷 " + moneda + " " + pais;
  //* Tema
  const [ selectTema, setSelectTema ] = useState( [] );
  const [ stateListaTemas, setstateListaTemas ] = useState( false );
  const iconobd = dataUsuarios.tema === "0" ? "🌞" : "🌑";
  const temabd = dataUsuarios.tema === "0" ? "light" : "dark";
  const temainicial = selectTema.tema ? selectTema.tema : temabd;
  const iconoInicial = selectTema.icono ? selectTema.icono : iconobd;

  const temaSeleccionado = iconoInicial + " " + temainicial;

  //* Funcion editar

  const editar = async () => {
    const temaElegido = selectTema.descripcion === 'light' ? "0" : "1";
    const parametros = {
      tema: temaElegido,
      moneda: moneda,
      pais: pais,
      id: dataUsuarios.id
    };
    await editarTemaMonedaUsr( parametros );
  };


  return (
    <Container>
      <header className='header'>
        <Header state={ state } setState={ setState } />
      </header>
      <section className='area2'>
        <h1>AJUSTES</h1>
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
        <ContentCard>
          <span>Tema</span>
          <Selector
            texto1={ temaSeleccionado }
            color={ v.colorselector }
            state={ stateListaTemas }
            funcion={ () => setstateListaTemas( !stateListaTemas ) }
          />
          {
            stateListaTemas &&
            (
              <ListaGenerica
                data={ TemasData }
                setState={ () => setstateListaTemas( !stateListaTemas ) }
                funcion={ setSelectTema }
              />
            )
          }
        </ContentCard>

        {
          !stateListaTemas && !stateListaPaises &&
          (
            <BtnSave
              titulo='Guardar'
              bgcolor={ () => v.colorselector }
              icon={ <v.iconoguardar /> }
              funcion={ editar }
            />
          )
        }


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
grid-template: "header" 100px "area2" auto ;
.header {
  grid-area: header;
 /*  background: rgba(103,93,241,0.14); */
  display: flex;
  align-items: center;
}
.area2 {
  grid-area: area2;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  align-self: center;
  h1{
    font-size: 3rem;
  }
}
`;
const ContentCard = styled.div`
display: flex;
text-align: center;
align-items: center;
gap: 20px;
position: relative;
width: 100%;
justify-content: center;
`;