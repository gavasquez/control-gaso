import React from 'react'
import styled from "styled-components";
import { v } from '../../../styles/Variables';
import { LinksArray } from '../../../utils/dataEstatica';
import { NavLink } from "react-router-dom";

export const Sidebar = ({ state, setState }) => {
  return (
    <Main>
      <Container>
        <div className='Logocontent'>
          <div className='imgcontent'>
            <img src={v.logo} />
          </div>
          <h2>Cerdyn</h2>
        </div>
        {
          LinksArray.map(({ icon, label, to }) => (
            <NavLink to={to}>
              <div className='Linkicon'>
                {icon}
              </div>
              <span>
                {label}
              </span>
            </NavLink>
          ))
        }
        <Divider />
      </Container>
    </Main>
  )
}

const Container = styled.div`
color: ${(props) => props.theme.text};
background: ${(props) => props.theme.bg};
position: fixed;
padding-top: 20px;
z-index: 100;
height: 100%;
`;

const Main = styled.div`

`;

const Divider = styled.div`
height: 1px;
width: 100%;
background: ${(props) => props.theme.bg4};
margin: ${v.lgSpacing} 0;
`