const games = {
    "acvalhalla": {
        title: "Assassin's Creed Valhalla",
        image: "images/acvalhalla.jpg",
        description: "Lidere invasões vikings pela Inglaterra.",
        rating: 8.4,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG",
        year: 2020,
        indie: false,
        multiplayer: false
    },
    "bloodborne": {
        title: "Bloodborne",
        image: "images/bloodborne.jpg",
        description: "Enfrente criaturas sombrias em um mundo gótico.",
        rating: 9.6,
        platform: "PlayStation",
        genre: "RPG",
        year: 2015,
        indie: false,
        multiplayer: true
    },
    "cs2": {
        title: "Counter-Strike 2",
        image: "images/cs2.jpg",
        description: "FPS competitivo com jogabilidade precisa e estratégica.",
        rating: 8.7,
        platform: "PC",
        genre: "FPS",
        year: 2023,
        indie: false,
        multiplayer: true
    },
    "cyberpunk": {
        title: "Cyberpunk 2077",
        image: "images/cyberpunk.jpg",
        description: "Um RPG futurista ambientado na cidade de Night City.",
        rating: 8.5,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG",
        year: 2020,
        indie: false,
        multiplayer: false
    },
    "deltarune": {
        title: "Deltarune",
        image: "images/deltarune.jpg",
        banner: "images/deltarune-banner.jpg",
        description: "Um RPG focado em história com escolhas e personagens únicos.",
        rating: 9.1,
        platform: "PC / PlayStation / Switch",
        genre: "RPG",
        year: 2018,
        indie: true,
        multiplayer: false
    },
    "elden": {
        title: "Elden Ring",
        image: "images/elden.jpg",
        description: "Um desafiador RPG de mundo aberto criado pela FromSoftware.",
        rating: 9.6,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG",
        year: 2022,
        indie: false,
        multiplayer: true
    },
    "fifa23": {
        title: "FIFA 23",
        image: "images/fifa23.jpg",
        description: "Simulador de futebol realista com times do mundo todo.",
        rating: 8.0,
        platform: "PC / PlayStation / Xbox",
        genre: "Esporte",
        year: 2022,
        indie: false,
        multiplayer: true
    },
    "fortnite": {
        title: "Fortnite",
        image: "images/fortnite.jpg",
        description: "Jogo battle royale com mecânicas de construção.",
        rating: 8.3,
        platform: "Todas as plataformas",
        genre: "Battle Royale",
        year: 2017,
        indie: false,
        multiplayer: true
    },
    "gow": {
        title: "God of War",
        image: "images/gow.jpg",
        banner: "images/gow-banner.jpg",
        description: "Kratos embarca em uma nova jornada pela mitologia nórdica.",
        rating: 9.8,
        platform: "PlayStation",
        genre: "Ação",
        year: 2018,
        indie: false,
        multiplayer: false
    },
    "gtav": {
        title: "Grand Theft Auto V",
        image: "images/gtav.jpg",
        description: "Acompanhe a vida de três criminosos em Los Santos.",
        rating: 9.6,
        platform: "PC / PlayStation / Xbox",
        genre: "Mundo Aberto",
        year: 2013,
        indie: false,
        multiplayer: true
    },
    "hogwarts": {
        title: "Hogwarts Legacy",
        image: "images/hogwarts.jpg",
        description: "Explore o mundo mágico no século XIX.",
        rating: 8.8,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG",
        year: 2023,
        indie: false,
        multiplayer: false
    },
    "hollowknight": {
        title: "Hollow Knight",
        image: "images/hollowknight.jpg",
        banner: "images/hollowknight-banner.jpg",
        description: "Um desafiador metroidvania 2D com arte belíssima.",
        rating: 9.4,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "Metroidvania",
        year: 2017,
        indie: true,
        multiplayer: false
    },
    "spiderman": {
        title: "Marvel's Spider-Man",
        image: "images/spiderman.jpg",
        description: "Balance-se por Nova York como o Homem-Aranha em muita ação.",
        rating: 9.2,
        platform: "PlayStation / PC",
        genre: "Ação",
        year: 2018,
        indie: false,
        multiplayer: false
    },
    "minecraft": {
        title: "Minecraft",
        image: "images/minecraft.jpg",
        description: "Construa e explore mundos infinitos feitos de blocos.",
        rating: 9.5,
        platform: "Todas as plataformas",
        genre: "Sandbox",
        year: 2011,
        indie: false,
        multiplayer: true
    },
    "overwatch": {
        title: "Overwatch 2",
        image: "images/overwatch2.jpg",
        description: "Jogo de tiro em equipe com heróis e habilidades únicas.",
        rating: 7.8,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "FPS",
        year: 2022,
        indie: false,
        multiplayer: true
    },
    "persona5": {
        title: "Persona 5 Royal",
        image: "images/persona5.jpg",
        description: "Equilibre a vida escolar com exploração de masmorras em Tóquio.",
        rating: 9.6,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "JRPG",
        year: 2019,
        indie: false,
        multiplayer: false
    },
    "rdr2": {
        title: "Red Dead Redemption 2",
        image: "images/rdr2.jpg",
        description: "Uma história épica sobre a vida no interior implacável dos EUA.",
        rating: 9.7,
        platform: "PC / PlayStation / Xbox",
        genre: "Mundo Aberto",
        year: 2018,
        indie: false,
        multiplayer: true
    },
    "re4": {
        title: "Resident Evil 4 Remake",
        image: "images/re4.jpg",
        description: "Um remake moderno de um clássico do terror.",
        rating: 9.4,
        platform: "PC / PlayStation / Xbox",
        genre: "Terror",
        year: 2023,
        indie: false,
        multiplayer: false
    },
    "sekiro": {
        title: "Sekiro: Shadows Die Twice",
        image: "images/sekiro.jpg",
        description: "Um jogo de ação brutal ambientado no Japão feudal.",
        rating: 9.5,
        platform: "PC / PlayStation / Xbox",
        genre: "Ação",
        year: 2019,
        indie: false,
        multiplayer: false
    },
    "stardew": {
        title: "Stardew Valley",
        image: "images/stardew.jpg",
        description: "Construa sua fazenda e viva uma vida tranquila no campo.",
        rating: 9.3,
        platform: "Todas as plataformas",
        genre: "Simulação",
        year: 2016,
        indie: true,
        multiplayer: true
    },
    "terraria": {
        title: "Terraria",
        image: "images/terraria.jpg",
        description: "Explore, construa e lute em um mundo sandbox 2D.",
        rating: 9.2,
        platform: "Todas as plataformas",
        genre: "Sandbox",
        year: 2011,
        indie: true,
        multiplayer: true
    },
    "skyrim": {
        title: "The Elder Scrolls V: Skyrim",
        image: "images/skyrim.jpg",
        description: "Um RPG de mundo aberto em um vasto universo de fantasia.",
        rating: 9.5,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "RPG",
        year: 2011,
        indie: false,
        multiplayer: false
    },
    "tlou": {
        title: "The Last of Us Part I",
        image: "images/tlou.jpg",
        description: "Uma história envolvente de sobrevivência em um mundo pós-apocalíptico.",
        rating: 9.7,
        platform: "PlayStation / PC",
        genre: "Ação e Aventura",
        year: 2022,
        indie: false,
        multiplayer: false
    },
    "zelda": {
        title: "The Legend of Zelda: Breath of the Wild",
        image: "images/zelda.jpg",
        description: "Explore um vasto mundo aberto e descubra segredos em Hyrule.",
        rating: 9.7,
        platform: "Nintendo",
        genre: "Aventura",
        year: 2017,
        indie: false,
        multiplayer: false
    },
    "witcher3": {
        title: "The Witcher 3: Wild Hunt",
        image: "images/witcher3.jpg",
        description: "Torne-se um caçador de monstros em um rico mundo de fantasia.",
        rating: 9.8,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG",
        year: 2015,
        indie: false,
        multiplayer: false
    },
    "undertale": {
        title: "Undertale",
        image: "images/undertale.jpg",
        description: "Um RPG único onde suas escolhas realmente importam.",
        rating: 9.4,
        platform: "PC / PlayStation / Switch",
        genre: "RPG",
        year: 2015,
        indie: true,
        multiplayer: false
    },
    "valorant": {
        title: "Valorant",
        image: "images/valorant.jpg",
        description: "Um FPS tático focado em precisão e trabalho em equipe.",
        rating: 8.5,
        platform: "PC",
        genre: "FPS",
        year: 2020,
        indie: false,
        multiplayer: true
    },
};

//const destaque = ["gow", "deltarune", "hollowknight"];

const destaque = Object.keys(games).filter(id => games[id].banner);

const emAlta = [
    "elden",
    "cyberpunk",
    "fortnite",
    "valorant",
    "hogwarts",
    "cs2",
    "spiderman",
    "re4",
    "deltarune",
    "overwatch",
    "acvalhalla",
    "minecraft"
];

/**const melhoresAv = [
    "gow",
    "zelda",
    "rdr2",
    "witcher3",
    "elden",
    "persona5",
    "bloodborne",
    "sekiro",
    "hollowknight",
    "re4",
    "tlou",
    "gtav"
];**/

const melhoresAv = Object.keys(games).filter(id => games[id].rating >= 9.5);

const lancamentos = Object.keys(games).filter(id => games[id].year >= 2023);

const indie = Object.keys(games).filter(id => games[id].indie);

const multiplayer = Object.keys(games).filter(id => games[id].multiplayer);

const classicos = [
    "gtav",
    "skyrim",
    "witcher3",
    "rdr2",
    "zelda",
    "gow"
];

const todos = Object.keys(games);