let card = document.querySelector('.projetos')

projetos.reverse()

for(let i=0;i<projetos.length;i++){
    card.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <img src="${projetos[i].img}" alt="imagem do projeto">
            <div class="teste">
                <h2>${projetos[i].title}</h2>
                <p>${projetos[i].description}</p>
                <div class="visite_projeto">
                    <a href="${projetos[i].link}">Acesse aqui</a>
                </div>
            </div>
        </div>
`)}



