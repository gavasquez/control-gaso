import React, { useState } from 'react'
import styled from "styled-components";
import { Header } from '../organismos/Header';

export const ConfiguracionTemplate = () => {

  const [state, setState] = useState(false);

  return (
    <Container>
      <header className='header'>
        <Header state={state} setState={setState}/>
      </header>
      <section className='area1'>
      </section>
      <section className='area2'>
      </section>
      <section className='main'>
      </section>
    </Container>
  )
}

const Container = styled.div`
min-height: 100vh;
padding: 15px;
width: 100%;
background: ${(props) => props.theme.bgtotal};
color: ${({ theme }) => theme.text};
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
}
`;
