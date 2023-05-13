import logo from './logo.svg';
import './App.css';

import { GlobalStyles } from './styles/Global';
import { device } from './styles/Breakpoints';
import Layout from './components/layout';


function App() {
  return (
    <>
      <GlobalStyles />
      <Layout /> 
    </>
  )
}

export default App;
