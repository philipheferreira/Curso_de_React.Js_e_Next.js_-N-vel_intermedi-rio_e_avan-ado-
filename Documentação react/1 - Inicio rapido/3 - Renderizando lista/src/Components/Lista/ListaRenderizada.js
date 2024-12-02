import './ListaRenderizada.css'

const pessoas = [
    {nome: 'Philiphe Ferreira', simOuNao: false, id: 1},
    {nome: 'João Jorge', simOuNao: false, id: 2},
    {nome: 'Jherson Haryson', simOuNao: true, id: 3},
];

function ListaRenderizada(){
    const listaPessoas = pessoas.map(pessoa =>
        <li
        key={pessoa.id}
        style={{
            color:pessoa.simOuNao ? 'magenta': 'darkgreen'
        }}
        >
            {pessoa.nome}
        </li>
    )
    return(
        <div> {listaPessoas} </div>
    );
}

export default ListaRenderizada;