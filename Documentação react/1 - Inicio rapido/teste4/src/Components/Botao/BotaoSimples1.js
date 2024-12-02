

function botao1() {
    function apertarBotao(){
        console.log("Você apertou o botão numero 1");
    }
    return (
        <button onClick={apertarBotao}> Eu sou um botão 1</button>
    );
}

export default botao1;