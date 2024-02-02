import React from 'react'
import styled from "styled-components";
import { UserAuth } from '../../context/AuthContext';
import { BtnCircular } from '../moleculas/BtnCircular';
import { v } from '../../styles/Variables';
import { ContentMenuDesplegable } from '../moleculas/ContentMenuDesplegable';
import { DesplegableUser } from '../../utils/dataEstatica';
import { useAuthStore } from '../../store/AuthStore';


export const DataUser = ({ state, setState }) => {

    const { user } = UserAuth();

    const { signout } = useAuthStore();

    const funcionXtipo = async (tipo) => {
        if (tipo === 'cerrarsesion') {
            await signout();
        }
    }

    return (
        <Container onClick={setState}>
            <div className='imgContainer'>
                <img src={user.picture} />
            </div>
            <BtnCircular
                icono={<v.iconocorona />}
                width="25px"
                height="25px"
                bgcolor="#ffffff"
                textcolor="#181616"
                textosize="11px"
                translatex="-60px"
                translatey="-25px"
            />
            <span className='nombre'>{user.name}</span>
            {
                state && <ContentMenuDesplegable top="60px" data={DesplegableUser} 
                funcion={funcionXtipo}/>
            }
        </Container>
    )
}

const Container = styled.div`
position: relative;
top: 0;
right: 0;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 50px;
margin: 15px;
cursor: pointer;
z-index: 4;
.imgContainer{
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        object-fit: cover;
    }
}
&:hover {
    background-color: ${(props) => props.theme.bg3};
}
.nombre{
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
}
`;
