//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == ''){
        alert('Por favor insira um nome!');
    }
    else if(amigos.includes(nome)){
        alert('O nome já esta na lista');
        limparCampo();
    }
    else
    {
    amigos.push(nome);
    console.log(`${amigos}`);
    limparCampo();
    let listadeAmigos = document.getElementById('listaAmigos');
    listadeAmigos.innerHTML = (amigos)
    }
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
    let amigoSorteado = document.getElementById('resultado');
    amigoSorteado.innerHTML = '';
}

function sortearIndice(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return indiceAleatorio;
}

function sortearAmigo(){
    if (amigos == ''){
        alert('Você não adicionou nenhum amigo!');
    }
    else{
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = (`O amigo(a) sorteado foi o(a): ${amigos[sortearIndice()]}`);

         setTimeout(recomecar, 50);
    }
}
function recomecar() {
    let recom = 4;
    while(recom > 3 || recom < 0){
        let recom = prompt('Você deseja recomeçar? 1 - sim, 2 - não');

        if(recom == 1){
        let listadeAmigos = document.getElementById('listaAmigos');
        listadeAmigos.innerHTML = '';
            limparCampo();
            amigos = [];
            break;
        }
        else if(recom == 2) {
            alert('Continue');
            break;
        }
        else{
            alert('Escolha uma opção!');
    }
}
}
