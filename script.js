function createCarousel(data, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    data.forEach((id, index) => {
        const game = games[id];
        if (!game) return;

        const item = document.createElement("div");
        item.className = "carousel-item";

        if (index === 0) {
            item.classList.add("active");
        }

        item.innerHTML = `
            <a href="game.html?id=${id}" class="carousel-link">
                <img src="${game.image}" class="d-block w-100" alt="">
                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1>${game.title}</h1>
                        <p class="opacity-75">${game.description}</p>
                    </div>
                </div>
            </a>
        `;

        container.appendChild(item);
    });
}


function createCards(data, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    data.forEach(id => {
        const game = games[id];

        if (!game) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <a href="game.html?id=${id}" style="text-decoration: none; color: inherit;">
                <div class="imgcard">
                    <img src="${game.image}" alt="">
                </div>
                <p class="gct">${game.title}</p>
            </a>
        `;

        container.appendChild(card);
    });
}


const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

if (typeof games !== "undefined" && gameId) {
    const game = games[gameId];

    if (game) {
        const title = document.getElementById("title");
        const image = document.getElementById("image");
        const desc = document.getElementById("desc");

        if (title) title.textContent = game.title;
        if (image) image.src = game.image;
        if (desc) desc.textContent = game.description;
    }
}


createCarousel(destaque, "carouselInner");
                createCards(melhoresAv, "melhoresAv");