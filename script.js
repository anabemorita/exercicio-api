let input = document.querySelector("input");
let botao = document.querySelector("button");
// let paragrafos = document.querySelectorAll("p"); //devolve os elementos em formato de array/lista
let article = document.querySelector("article");

function pesquisar (event) {
    event.preventDefault();
    let id = input.value;
    fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        // paragrafos[0].innerHTML = `Nome: ${json.name}`;
        // paragrafos[1].innerHTML = `Ano de nascimento: ${json.birth_year}`;
        // paragrafos[2].innerHTML = `Genero: ${json.gender}`;

        let pResposta = document.querySelectorAll("article p");
        if(pResposta.length > 0) {
            // article.removeChild(pResposta[0]);
            // article.removeChild(pResposta[1]);
            // article.removeChild(pResposta[2]);
            for (let p of pResposta) {
                article.removeChild(p);
            }
        }
        

        let nome = document.createElement("p");
        let anoNascimento = document.createElement("p");
        let genero = document.createElement("p"); 

        nome.innerHTML = `Nome: ${json.name}`;
        anoNascimento.innerHTML = `Ano de nascimento: ${json.birth_year}`;
        genero.innerHTML = `Genero: ${json.gender}`;

        article.appendChild(nome);
        article.appendChild(anoNascimento);
        article.appendChild(genero);
    })
}

botao.onclick = pesquisar;