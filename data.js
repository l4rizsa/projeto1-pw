const games = {
    "gow": {
        title: "God of War",
        image: "images/gow.jpg",
        description: "Kratos embarks on a new journey through Norse mythology.",
        rating: 9.8,
        platform: "PlayStation",
        genre: "Action"
    },
    "zelda": {
        title: "The Legend of Zelda: Breath of the Wild",
        image: "images/zelda.jpg",
        description: "Explore a vast open world and uncover secrets in Hyrule.",
        rating: 9.7,
        platform: "Nintendo",
        genre: "Adventure"
    },
    "elden": {
        title: "Elden Ring",
        image: "images/elden.jpg",
        description: "A challenging open-world RPG created by FromSoftware.",
        rating: 9.6,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG"
    },
    "rdr2": {
        title: "Red Dead Redemption 2",
        image: "images/rdr2.jpg",
        description: "An epic tale of life in America’s unforgiving heartland.",
        rating: 9.7,
        platform: "PC / PlayStation / Xbox",
        genre: "Open World"
    },
    "witcher3": {
        title: "The Witcher 3: Wild Hunt",
        image: "images/witcher3.jpg",
        description: "Become a monster hunter in a rich fantasy world.",
        rating: 9.8,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG"
    },
    "cyberpunk": {
        title: "Cyberpunk 2077",
        image: "images/cyberpunk.jpg",
        description: "A futuristic RPG set in Night City.",
        rating: 8.5,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG"
    },
    "fifa23": {
        title: "FIFA 23",
        image: "images/fifa23.jpg",
        description: "Realistic football simulation with global teams.",
        rating: 8.0,
        platform: "PC / PlayStation / Xbox",
        genre: "Sports"
    },
    "minecraft": {
        title: "Minecraft",
        image: "images/minecraft.jpg",
        description: "Build and explore infinite worlds made of blocks.",
        rating: 9.5,
        platform: "All Platforms",
        genre: "Sandbox"
    },
    "fortnite": {
        title: "Fortnite",
        image: "images/fortnite.jpg",
        description: "Battle royale game with building mechanics.",
        rating: 8.3,
        platform: "All Platforms",
        genre: "Battle Royale"
    },
    "hollowknight": {
        title: "Hollow Knight",
        image: "images/hollowknight.jpg",
        description: "A challenging 2D metroidvania with beautiful art.",
        rating: 9.4,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "Metroidvania"
    },
    "gtav": {
        title: "Grand Theft Auto V",
        image: "images/gtav.jpg",
        description: "Experience the lives of three criminals in Los Santos.",
        rating: 9.6,
        platform: "PC / PlayStation / Xbox",
        genre: "Open World"
    },
    "tlou": {
        title: "The Last of Us Part I",
        image: "images/tlou.jpg",
        description: "A gripping story of survival in a post-apocalyptic world.",
        rating: 9.7,
        platform: "PlayStation / PC",
        genre: "Action-Adventure"
    },
    "spiderman": {
        title: "Marvel's Spider-Man",
        image: "images/spiderman.jpg",
        description: "Swing through New York as Spider-Man in this action-packed game.",
        rating: 9.2,
        platform: "PlayStation / PC",
        genre: "Action"
    },
    "sekiro": {
        title: "Sekiro: Shadows Die Twice",
        image: "images/sekiro.jpg",
        description: "A brutal action game set in feudal Japan.",
        rating: 9.5,
        platform: "PC / PlayStation / Xbox",
        genre: "Action"
    },
    "bloodborne": {
        title: "Bloodborne",
        image: "images/bloodborne.jpg",
        description: "Hunt nightmarish creatures in a gothic world.",
        rating: 9.6,
        platform: "PlayStation",
        genre: "RPG"
    },
    "persona5": {
        title: "Persona 5 Royal",
        image: "images/persona5.jpg",
        description: "Balance school life and dungeon crawling in Tokyo.",
        rating: 9.6,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "JRPG"
    },
    "overwatch": {
        title: "Overwatch 2",
        image: "images/overwatch2.jpg",
        description: "Team-based shooter with unique heroes and abilities.",
        rating: 7.8,
        platform: "PC / PlayStation / Xbox / Switch",
        genre: "FPS"
    },
    "valorant": {
        title: "Valorant",
        image: "images/valorant.jpg",
        description: "A tactical shooter focused on precision and teamwork.",
        rating: 8.5,
        platform: "PC",
        genre: "FPS"
    },
    "stardew": {
        title: "Stardew Valley",
        image: "images/stardew.jpg",
        description: "Build your farm and live a peaceful rural life.",
        rating: 9.3,
        platform: "All Platforms",
        genre: "Simulation"
    },
    "terraria": {
        title: "Terraria",
        image: "images/terraria.jpg",
        description: "Explore, build, and fight in a 2D sandbox world.",
        rating: 9.2,
        platform: "All Platforms",
        genre: "Sandbox"
    },
    "cs2": {
        title: "Counter-Strike 2",
        image: "images/cs2.jpg",
        description: "A competitive tactical FPS with precise gunplay.",
        rating: 8.7,
        platform: "PC",
        genre: "FPS"
    },
    "acvalhalla": {
        title: "Assassin's Creed Valhalla",
        image: "images/acvalhalla.jpg",
        description: "Lead Viking raids across England.",
        rating: 8.4,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG"
    },
    "hogwarts": {
        title: "Hogwarts Legacy",
        image: "images/hogwarts.jpg",
        description: "Explore the wizarding world in the 1800s.",
        rating: 8.8,
        platform: "PC / PlayStation / Xbox",
        genre: "RPG"
    },
    "re4": {
        title: "Resident Evil 4 Remake",
        image: "images/re4.jpg",
        description: "A modern remake of the survival horror classic.",
        rating: 9.4,
        platform: "PC / PlayStation / Xbox",
        genre: "Horror"
    },
    "detroit": {
        title: "Detroit: Become Human",
        image: "images/detroit.jpg",
        description: "Shape a branching story about androids and humanity.",
        rating: 9.0,
        platform: "PC / PlayStation",
        genre: "Interactive Drama"
    },
    "deltarune": {
    title: "Deltarune",
    image: "images/deltarune.jpg",
    description: "A story-driven RPG by Toby Fox with unique characters and choices.",
    rating: 9.1,
    platform: "PC / PlayStation / Switch",
    genre: "RPG"
}
};

const destaque = ["gow", "zelda", "elden"];

const emAlta = ["zelda", "gow", "deltarune", "terraria", "witcher3", "rdr2", "elden", "minecraft", "fifa23", "fortnite", "hollowknight", "cyberpunk"];

const melhoresAv = ["elden", "minecraft", "witcher3", "rdr2", "gow", "stardew", "persona5", "hollowknight", "fifa23", "fortnite", "zelda", "cyberpunk"];
