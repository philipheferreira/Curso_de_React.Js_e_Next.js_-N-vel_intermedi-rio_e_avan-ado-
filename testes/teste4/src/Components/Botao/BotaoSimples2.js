

    export default function botao2(){
        function apertarBotao(){
            console.log("Você clicou no botão numero 2");
        }
        return(
            <button onClick={apertarBotao}>Eu sou o botão 2</button>
        );
    }