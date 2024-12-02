import './botaoSimples.css'

/*
    CRIANDO E ANHINHANDO COMPONENTES

    As aplicações React são compostas por componentes. Um componente 
    é uma parte da IU (interface do usuário) que possui sua própria 
    lógica e aparência. Um componente pode ser tão pequeno quanto 
    um botão, ou tão grande quanto uma página inteira. 
    Componentes do React são funções JavaScript que retornam 
    marcação (markup)
*/

function botao1(){ // O botao1 está sendo importado e chamado dentro do App.js
    //No React, você define uma classe CSS usando className
    return (
        <div className='container'> 
            <button>Primeiro botão</button>
        </div>
    )
}

export default botao1; //A palavra-chave export default especifica o componente principal no arquivo
