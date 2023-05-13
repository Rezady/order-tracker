import { GlobalStyles } from './styles/Global';
import Layout from './components/layout';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App;
