import { MyRoutes } from './routers/routes'
import { createContext, useState } from "react";
import { Dark, Light } from './styles/Themes';
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from './context/AuthContext';
import styled from "styled-components";
import { Sidebar } from './components/organismos/sidebar/Sidebar';
import { Device } from './styles/breakpoints';
import { Menuambur } from './components/organismos/Menuambur';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === 'light' ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container>
            <div className='ContentSidebar'>
              <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
            </div>
            <div className='ContentMenuambur'>
              <Menuambur />
            </div>
            <Containerbody>
              <MyRoutes />
            </Containerbody>
          </Container>
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
background: ${(props) => props.theme.bgtotal};
.ContentSidebar{
  display: block;
  position: absolute;
}
.ContentMenuambur{
  left: 20px;
  display: initial;
}
@media ${Device.tablet} {
  display: grid;
  grid-template-columns: 65px 1fr;
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
@media ${Device.tablet} {
  grid-column: 2;
  
}
`;
export default App
