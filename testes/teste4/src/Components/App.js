import './App.css';
import BotaoSimples1 from './Botao/BotaoSimples1'
import BotaoSimples2 from './Botao/BotaoSimples2'

function BotaoSimples3(){
  function apertarBotao() {
    alert('Você clicou no botão numero 3');
  }
  return(
    <button onClick={apertarBotao}>Eu sou o botão 3</button>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BotaoSimples1></BotaoSimples1>
        <BotaoSimples2></BotaoSimples2>
        <BotaoSimples3></BotaoSimples3>

      </header>
    </div>
  );
}

export default App;
