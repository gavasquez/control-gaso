import styled from "styled-components";


export const ColorContent = styled.div`
justify-content: center;
min-height: ${ ( props ) => props.$alto };
width: ${ ( props ) => props.$ancho };
background-color: ${ ( props ) => props.$color };
border-radius: 50%;
text-align: center;
display: block;
`;