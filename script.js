function entrar(){
    window.location = "lista-produtos.html";
}

function home(){
    window.location = "index.html";
}

function produto({classe,sabor,situacao}){
    window.location = "pagina-produto.html";
}

function verifica(){
    window.location = "verifica.html";
}

function verificar(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    
    if(nome=="Maciel Araujo" && senha=="admin"){
        window.location = "cadastrar-produto.html";
    }else{
        window.alert("Usuário ou senha incorretos. Permitido acesso apenas para administrador!")
    }
}

function cadastrarProduto(){
    let classe = document.getElementById("classeProduto").value;
    let sabor = document.getElementById("sabor").value;
    let preco = document.getElementById("preco").value;
    let novo = document.querySelector('div#produto');

    /*
    const localStorageCadastros = JSON.parse(localStorage.getItem('cadastros'));
    let cadastros = localStorage.getItem('cadastros')!==null? localStoragecadastros:[];
    */

    novo.innerHTML = `nome classe preço`;

}