async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        //método a ser realizado
        method: "POST",

        //tipo de requisição
        headers: {
            "Content-type": "application/json"
        },

        //corpo da requisição
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })
     conexaoConvertida = await conexao.json()
     return conexaoConvertida
}

export const conectaApi = {
    listaVideos, criaVideo
}

