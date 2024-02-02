import { MyRoutes } from './routers/routes';
import { createContext, useState } from "react";
import { Dark, Light } from './styles/Themes';
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from './context/AuthContext';
import styled from "styled-components";
import { Sidebar } from './components/organismos/sidebar/Sidebar';
import { Device } from './styles/breakpoints';
import { Menuambur } from './components/organismos/Menuambur';
import { useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { useUsuariosStore } from './store/UsuariosStore';

export const ThemeContext = createContext( null );

function App() {

  const { mostrarUsuarios, dataUsuarios } = useUsuariosStore();

  const theme = dataUsuarios.tema === '0' ? 'light' : 'dark';

  const { pathname } = useLocation();
  /* const [ theme, setTheme ] = useState( "light" ); */
  const themeStyle = theme === 'light' ? Light : Dark;
  const [ sidebarOpen, setSidebarOpen ] = useState( false );


  const { isLoading, error } = useQuery( {
    queryKey: [ 'mostrarUsuarios' ],
    queryFn: () => mostrarUsuarios(),
  } );

  if ( isLoading ) {
    return ( <h1>Cargando...</h1> );
  }

  if ( error ) {
    return ( <h1>Error...</h1> );
  }

  return (
    <ThemeContext.Provider value={ { theme } }>
      <ThemeProvider theme={ themeStyle }>
        <AuthContextProvider>
          {
            pathname != "/login"
              ? (
                <Container className={ sidebarOpen ? "active" : "" }>
                  <div className='ContentSidebar'>
                    <Sidebar state={ sidebarOpen } setState={ setSidebarOpen } />
                  </div>
                  <div className='ContentMenuambur'>
                    <Menuambur />
                  </div>
                  <Containerbody>
                    <MyRoutes />
                  </Containerbody>
                </Container>
              )
              : ( <MyRoutes /> )
          }

        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
background: ${ ( props ) => props.theme.bgtotal };
transition: 0.3s ease-in-out;
.ContentSidebar{
  display: none;
}
.ContentMenuambur{
  left: 20px;
  display: initial;
  position: absolute;
}
@media ${ Device.tablet } {
  grid-template-columns: 65px 1fr;
  &.active{
    grid-template-columns: 220px 1fr;
  }  
  .ContentSidebar{
    display: initial;
  }
  .ContentMenuambur{
    display: none;
  }
}
`;

const Containerbody = styled.div`
grid-column: 1;
width: 100%;
@media ${ Device.tablet } {
  grid-column: 2;
}
`;
export default App;
