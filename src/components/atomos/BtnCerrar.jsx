import styled from "styled-components";
import { v } from "../../styles/Variables";

export const BtnCerrar = ( { funcion } ) => {
  return (
    <Container onClick={ funcion }>
      { <v.iconocerrar /> }
    </Container>
  );
};
const Container = styled.span`
    cursor: pointer;
    font-size: 25px;
    transition: all 0.2s;
    &:hover{
      color: ${ v.colorselector };
      transform: scale(1.2);
    }
`;