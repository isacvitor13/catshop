import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Componentes/Home';
import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';
import Raças from './Componentes/Raças';
import SearchCat from './Componentes/SearchCat';
import Contatos from './Componentes/Contatos';
import Sobre from './Componentes/Sobre';
import PageCat from './Componentes/PageCat';


function App(z) {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/Raças' element={<Raças />} />
          <Route  path='/Contatos' element={<Contatos />} />
          <Route  path='/SearchCat/:id/:name' element={<SearchCat/>} />
          <Route  path='/PageCat/:id' element={<PageCat/>} />
          <Route  path='/Sobre' element={<Sobre/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App
