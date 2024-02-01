import React from 'react'
import styled from "styled-components";

export const BtnCircular = ({ icono, width, height, bgcolor, textcolor, fontsize, translateX, translateY }) => {
    return (
        <Container
            bgcolor={bgcolor}
            textcolor={textcolor}
            height={height}
            width={width}
            fontsize={fontsize}
            translateX={translateX}
            translateY={translateY}
        >
            <span>{icono}</span>
        </Container>
    )
}

const Container = styled.div`
background-color: ${(props) => props.bgcolor};
min-width: ${(props) => props.width};
min-height: ${(props) => props.height};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
transform: translateX(${(props) => props.translateX});
transform: translateY(${(props) => props.translateY});
span {
    font-size: ${(props) => props.fontsize};
    text-align: center;
    color: ${(props) => props.textcolor}
}
`;