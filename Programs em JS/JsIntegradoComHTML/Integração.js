//criação de uma factory para mudança de banckground
function myFunction(n){
    //pegando o elemento pelo id
    document.getElementById(n).style.backgroundColor="#000";
    //teste de verificação de funcionamento
    console.log("funciono");
};

//factory para inserção de textos
function myFunction2(n){
    let nome = "banana";
    //pegando o elementos pelo id
   let elemento = document.getElementById(n);
   //inserindo um texto diretamente
   elemento.innerText="banana";
   //inserindo um texto atrasves de um objeto html
   elemento.innerText = nome;
   //criação de elemento pelo JavaScript
   let newDiv = document.createElement("p");
   //criação do conteudo, para o novo elemento
   let newConteudo = document.createTextNode("banana 2");
   //amarrando o novo conteudo para o elemento recem craido
   newDiv.appendChild(newConteudo);
   //amarrando elemento recem criado no elemento ja existente no HTML raiz
   elemento.appendChild(newDiv);
};

function construtora(n){
    let elemento = document.getElementById(n);
    elemento.style.background="aqua";
}

console.log("conectado");