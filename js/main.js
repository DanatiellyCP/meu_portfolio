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
