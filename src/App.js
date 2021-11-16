import HelloWorld from './components/HelloWorld';
// Ao importar um componente temos que dar a ele um nome, geralmente o mesmo nome do arquivo,
// nesse caso é o HelloWorld
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';
import './App.css';

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
    </div>
  );
}

export default App;
