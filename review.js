const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const game = games[id];
const container = document.getElementById("game-container");

if (game) {
    container.innerHTML = `
        <div class="row g-4 align-items-start">
            <div class="col-12 col-md-4">
                <img src="${game.image}" alt="${game.title}" class="img-fluid rounded shadow">
            </div>

            <div class="col-12 col-md-8">
                <h1 class="mb-3 text-warning">${game.title}</h1>

                <p class="lead">${game.description}</p>

                <div class="card bg-secondary text-light border-0 p-3 mb-3">
                    <p class="mb-2"><strong>Nota:</strong> ${game.rating}</p>
                    <p class="mb-2"><strong>Plataforma:</strong> ${game.platform}</p>
                    <p class="mb-2"><strong>Gênero:</strong> ${game.genre}</p>
                    <p class="mb-2"><strong>Ano:</strong> ${game.year}</p>
                    <p class="mb-0"><strong>Multiplayer:</strong> ${game.multiplayer ? "Sim" : "Não"}</p>
                </div>
            </div>
        </div>
    `;
} else {
    container.innerHTML = `
        <div class="alert alert-danger">
            Jogo não encontrado.
        </div>
    `;
}