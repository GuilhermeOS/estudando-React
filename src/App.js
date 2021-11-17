// import HelloWorld from './components/HelloWorld';
// Ao importar um componente temos que dar a ele um nome, geralmente o mesmo nome do arquivo,
// nesse caso é o HelloWorld
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoas';
// import Frase from './components/Frase';
// import List from './components/List';
//import Evento from './components/Evento';
//import Form from './components/Form';
//import Condicional from './components/Condicional';
//import OutraLista from './components/OutraLista';
//import { useState } from 'react'
//import SeuNome from './components/SeuNome';
//import Saudacao from './components/Saudacao';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';

import './App.css';

/*
function App() {

  const nome = 'tio'

  return (
    <div className="App">
      <HelloWorld />
      <Frase />
      <SayMyName nome="Guilherme"/>
      <SayMyName nome="cuzão"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo"
      idade="28"
      profissao="vagabundo"
      foto="https://via.placeholder.com/150"
      />
      <List />
      <Evento />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Form />
      <Evento />
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  )
}



function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}
*/

function App() {

  return (
    <Router>

      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/empresa" element={<Empresa />} />

        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  )
}
export default App;
