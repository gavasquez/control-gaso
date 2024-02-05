import styled from "styled-components";

export const BtnFiltro = ( { bgcolor, textcolor, icono, funcion } ) => {
  return (
    <Container $bgcolor={ bgcolor } onClick={ funcion } $textcolor={ textcolor }>
      <div className="contentIcon">
        <span>{ icono }</span>
      </div>
    </Container>
  );
};

const Container = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
background: ${ ( props ) => props.$bgcolor };
color: ${ ( props ) => props.$textcolor };
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
position: relative;
cursor: pointer;
.contentIcon{
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  &:hover{
    transform: scale(1.3);
  }
}
`;