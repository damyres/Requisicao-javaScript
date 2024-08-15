import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo() {
    event.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")

    //Remover itens filhos de itens pais para listar de acordo coma  busca
    while (lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => 
        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao,elemento.url, elemento.imagem)
    ))
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")
botaoDePesquisa.addEventListener("click", event => buscarVideo(event))