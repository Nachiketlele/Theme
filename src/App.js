import { useContext } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { ThemeContext } from './context/ThemeContext';
import { Switch,Stack } from '@chakra-ui/react'

function App() {
  const {isLight,toogletheme} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight? "light" : "dark"}`}>
        <Navbar/>
    <Stack direction='row'>
    <Switch className={`App ${isLight? "light" : "dark"}`} onChange={toogletheme}  colorScheme='teal' size='lg' />
  </Stack>
    </div>
  );
}

export default App;
