import './App.css';
import Botao1 from './botao/botaoSimples';
import Botao2 from './botao/botaoSimples2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Editar <code>src/App.js</code> e salvar para carregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
        <Botao1/>
        <Botao2/>
      </header>
    </div>
  );
}

export default App;
