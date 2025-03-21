import './App.css';
import Botao1 from './botao/botaoSimples'; // Os botões tem que ser definidos como maiusculos depois do import
import Botao2 from './botao/botaoSimples2'; // Os botões tem que ser definidos como maiusculos depois do import

const pessoa = { // cria uma lista imutavel (constante) que armazena diferentes valores
  nome: 'Philiphe Siqueira Ferreira',
  imgUrl: 'https://media.gq.com/photos/55828b3f1177d66d68d5287c/1:1/w_450,h_450,c_limit/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg',
  imgHeight: 180,
  imgWidth: 180
};

function Botao3(){// função criada dentro de botão, não precisa ser importada
  return(
    <button>Terceiro botão</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{pessoa.nome}</h1>
        <img
         className='ImagemProfile'
         alt= { "Foto de " + pessoa.nome}
         src= {pessoa.imgUrl}
         style={{
          width: pessoa.imgWidth,
          height: pessoa.imgHeight
         }}
        />
         
        <Botao1/>
        <Botao2/>
        <Botao3/>
      </header>
    </div>
  );
}

export default App;
