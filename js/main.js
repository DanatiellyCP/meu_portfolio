document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       NAVBAR SCROLL
    ========================== */
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".custom-navbar");

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    /* =========================
    MENU ATIVO AO SCROLL
    ========================= */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    window.addEventListener("scroll", () => {
        let current = "";
    
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
        
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
    
        navLinks.forEach(link => {
            link.classList.remove("active");
        
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    /* =========================
       SCROLL SUAVE MENU
    ========================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });


    /* =========================
       ANIMAÇÃO AO SCROLL
    ========================== */
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));


    /* =========================
       GITHUB REPOS
    ========================== */
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

            if (!container) return;

            repos
                .filter(repo => reposDesejados.includes(repo.name))
                .forEach(repo => {
                    const col = document.createElement('div');
                    col.className = 'col-md-4 mb-4';

                    col.innerHTML = `
                        <div class="card h-100 shadow-sm border-0">
                            <div class="card-body">
                                <h5 class="card-title">${repo.name}</h5>
                                <p class="card-text">
                                    ${repo.description || 'Sem descrição disponível.'}
                                </p>
                                <a href="${repo.html_url}" target="_blank" class="btn btn-primary">
                                    Ver no GitHub
                                </a>
                            </div>
                        </div>
                    `;

                    container.appendChild(col);
                });
        })
        .catch(err => console.error('Erro ao carregar repositórios:', err));


    /* =========================
       PROJETOS ONLINE
    ========================== */
    const projetosOnline = [
        {
            name: "OS 804",
            description: "Sistema de ordens de serviço com geração de comprovantes.",
            url: "projetos/os804/index804.html"
        },
        {
            name: "Placebo Game",
            description: "Protótipo de jogo transmidia desenvolvido com Construct2.",
            url: "https://www.kongregate.com/en/games/danatielly/placebo1"
        },
        {
            name: "Projeto 3",
            description: "Em desenvolvimento.",
            url: "#"
        }
    ];

    const containerOnline = document.getElementById('online-projects');

    if (containerOnline) {
        projetosOnline.forEach(proj => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            col.innerHTML = `
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title">${proj.name}</h5>
                        <p class="card-text">${proj.description}</p>
                        <a href="${proj.url}" target="_blank" class="btn btn-primary">
                            Testar Online
                        </a>
                    </div>
                </div>
            `;

            containerOnline.appendChild(col);
        });
    }

});