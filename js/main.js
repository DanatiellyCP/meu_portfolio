/*document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/DanatiellyCP/repos?sort=updated')
        .then(res => res.json())
        .then(repos => {
            const container = document.getElementById('repos');
            repos.slice(0, 6).forEach(repo => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';
                col.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description || 'Sem descrição disponível.'}</p>
                            <a href="${repo.html_url}" target="_blank" class="btn btn-primary">Ver no GitHub</a>
                        </div>
                    </div>`;
                container.appendChild(col);
            });
        })
        .catch(err => console.error('Erro ao carregar repositórios:', err));
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const reposDesejados = [
        "Nina_Game",
        "Lib_Camaleao",
        "ProjetosIA",
        "projetos_delphi",
        "gestor_campanha",

    ]; 

    fetch('https://api.github.com/users/DanatiellyCP/repos')
        .then(res => res.json())
        .then(repos => {
            const container = document.getElementById('repos');
            repos
                .filter(repo => reposDesejados.includes(repo.name))
                .forEach(repo => {
                    const col = document.createElement('div');
                    col.className = 'col-md-4 mb-4';
                    col.innerHTML = `
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${repo.name}</h5>
                                <p class="card-text">${repo.description || 'Sem descrição disponível.'}</p>
                                <a href="${repo.html_url}" target="_blank" class="btn btn-primary">Ver no GitHub</a>
                            </div>
                        </div>`;
                    container.appendChild(col);
                });
        })
        .catch(err => console.error('Erro ao carregar repositórios:', err));
});


// Array com seus projetos online
const projetosOnline = [
    {
        name: "OS 804",
        description: "Projeto para impressão de comprovante de ordens de serviços",
        url: "projetos/os804/index804.html"
    },
    {
        name: "Placebo Game",
        description: "Projeto de protótipo de jogo, como parte de um produto transmidia, criado no curso de cinema em 2015; Desenvolvido com Construct2, para plataformas Web e Android.  ",
        url: "https://www.kongregate.com/en/games/danatielly/placebo1?permalink=placebo1&set_locale=true&uploaded_by=danatielly"
    },
    {
        name: "Projeto 3",
        description: "Descrição do Projeto 3",
        url: "https://link-do-projeto3.com"
    }
];

// Seleciona o container da nova seção
const containerOnline = document.getElementById('online-projects');

projetosOnline.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">${proj.name}</h5>
                <p class="card-text">${proj.description || 'Sem descrição disponível.'}</p>
                <a href="${proj.url}" target="_blank" class="btn btn-primary">Testar Online</a>
            </div>
        </div>
    `;
    containerOnline.appendChild(col);
});
