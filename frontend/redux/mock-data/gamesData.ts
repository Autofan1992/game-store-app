import { GameCardType, GamePlatformType } from '../../types/gameCardTypes'

const gamesData: Array<GameCardType & GamePlatformType> = [
    {
        id: '222221',
        name: 'Overwatch345',
        ageLimit: 12,
        rating: 5,
        price: 23.99,
        genre: 'Shooter',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/3/33/Overwatch_Origins_Edition_PC_cover.jpg',
        description:
            'Overwatch is a colorful team-based action game starring a diverse cast of powerful heroes. Travel the world, build a team, and contest objectives in exhilarating 6v6 combat.',
        amount: 1,
        alt: 'Overwatch',
        comments: [
            {
                author: {
                    fullName: 'John Kukold',
                },
                createdAt: '12-12-2023',
                text: '07.07.23 you still were a Junior :(',
                id: '1',
            },
        ],
    },
    {
        id: '1',
        name: 'Overwatch',
        ageLimit: 12,
        rating: 5,
        price: 23.99,
        genre: 'Shooter',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/3/33/Overwatch_Origins_Edition_PC_cover.jpg',
        description:
            'Overwatch is a colorful team-based action game starring a diverse cast of powerful heroes. Travel the world, build a team, and contest objectives in exhilarating 6v6 combat.',
        amount: 1,
        alt: 'Overwatch',
    },

    {
        id: '2',
        name: 'Minecraft',
        ageLimit: 3,
        rating: 4,
        price: 25.99,
        genre: 'Sandbox',
        platform: { pc: true, playstation: false, xbox: false },
        image: 'https://www.minecraft.net/content/dam/minecraft/home/Games_Subnav_Minecraft-228x350.png',
        description:
            'Minecraft is a sandbox game. There is a virtual land where users can create their own worlds and experiences, using building blocks, resources discovered on the site and their own creativity.',
        amount: 1,
        alt: 'Minecraft',
    },

    {
        id: '3',
        name: 'Terraria',
        ageLimit: 6,
        rating: 4,
        price: 4.99,
        genre: 'Sandbox',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://s3.gaming-cdn.com/images/products/932/orig-fallback-v1/terraria-pc-mac-game-steam-cover.jpg?v=1647352436',
        description:
            'Terraria is a 2D sandbox game with gameplay that revolves around exploration, building, crafting, combat, survival, and mining, playable in both single-player and multiplayer modes.',
        amount: 1,
        alt: 'Terraria',
    },

    {
        id: '4',
        name: 'The Witcher 3: Wild Hunt',
        ageLimit: 16,
        rating: 5,
        price: 29.99,
        genre: 'RPG',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'http://s.gamer-info.com/gl/t/h/e/w/the-witcher-3-wild-hunt_ba.jpg',
        description:
            'The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.',
        amount: 1,
        alt: 'The Witcher 3: Wild Hunt',
    },

    {
        id: '5',
        name: "Assassin's Creed Valhalla",
        ageLimit: 18,
        rating: 5,
        price: 25.99,
        genre: 'Action-adventure',
        platform: { pc: false, playstation: true, xbox: false },
        image: 'https://upload.wikimedia.org/wikipedia/ru/2/26/AC_Valhalla_standard_edition.jpg',
        description:
            "In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England's Dark Ages.",
        amount: 1,
        alt: "Assassin's Creed Valhalla",
    },

    {
        id: '6',
        name: 'Cyberpunk 2077',
        ageLimit: 18,
        rating: 3,
        price: 18.99,
        genre: 'Shooter',
        platform: { pc: true, playstation: false, xbox: false },
        image: 'https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg',
        description:
            'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.',
        amount: 1,
        alt: 'Cyberpunk 2077',
    },

    {
        id: '7',
        name: 'Far Cry 5',
        ageLimit: 18,
        rating: 4,
        price: 18.99,
        genre: 'Shooter',
        platform: { pc: false, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/4/42/Far_Cry_5_cover.png',
        description:
            'Hope County is the land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader and his siblings to liberate the besieged community.',
        amount: 1,
        alt: 'Far Cry 5',
    },

    {
        id: '8',
        name: 'Grand Theft Auto V',
        ageLimit: 18,
        rating: 5,
        price: 10.99,
        genre: 'Action-adventure',
        platform: { pc: false, playstation: false, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/c/c8/GTAV_Official_Cover_Art.jpg',
        description:
            'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions — linear scenarios — to progress through the story',
        amount: 1,
        alt: 'Grand Theft Auto V',
    },

    {
        id:'9',
        name: 'Sims 4',
        ageLimit: 12,
        rating: 4,
        price: 40.99,
        genre: 'Simulator',
        platform: { pc: true, playstation: false, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/5/5e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_The_Sims_4.jpeg',
        description:
            'Explore and customize every detail, from Sims to homes and much more. Choose how Sims look, act, and dress. Determine how they’ll live out each day.',
        amount: 1,
        alt: 'Sims 4',
    },

    {
        id: '10',
        name: 'Cooking Mama: Cookstar',
        ageLimit: 3,
        rating: 4,
        price: 14.99,
        genre: 'Simulator',
        platform: { pc: false, playstation: true, xbox: true },
        image: 'https://delistedgames.com/wp-content/uploads/2020/04/cookingmamacookstar.jpg',
        description:
            'This is a cooking simulation game in which players create and prepare dishes by completing cooking tasks (e.g., chopping, grating, fileting, frying)',
        amount: 1,
        alt: 'Cooking Mama: Cookstar',
    },

    {
        id: '11',
        name: 'DOOM 3',
        ageLimit: 16,
        rating: 5,
        price: 40.99,
        genre: 'Shooter',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Doom3box.jpg/274px-Doom3box.jpg',
        description:
            'This is a first-person shooter in which players assume the role of a marine battling a demonic invasion at a Mars base. Players use big variety of guns to kill mutants and demonic creatures.',
        amount: 1,
        alt: 'DOOM 3',
    },

    {
        id: '12',
        name: 'Epic Shef',
        ageLimit: 12,
        rating: 4,
        price: 12.99,
        genre: 'Simulator',
        platform: { pc: true, playstation: false, xbox: false },
        image: 'https://torrents-igruha.org/uploads/posts/2021-01/1611444215_25.jpg',
        description:
            'This is an adventure game in which players assume the role of a young chef exploring the land, harvesting crops, and cooking dishes to battle in culinary duels.',
        amount: 1,
        alt: 'Epic Shef',
    },

    {
        id: '13',
        name: 'Life is Strange: Before the storm',
        ageLimit: 16,
        rating: 4,
        price: 12.99,
        genre: 'Action-adventure',
        platform: { pc: true, playstation: true, xbox: false },
        image: 'https://upload.wikimedia.org/wikipedia/ru/0/0e/Life_Is_Strange_Before_The_Storm.jpg',
        description:
            'It is a game in which players assume the role of a high-school student investigating a family secret. Players are presented with various dialogue choices that change the course of the narrative.',
        amount: 1,
        alt: 'Life is Strange: Before the storm',
    },

    {
        id: '14',
        name: 'The Elder Scrolls V: Skyrim',
        ageLimit: 16,
        rating: 5,
        price: 35.99,
        genre: 'RPG',
        platform: { pc: false, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/3/3a/The_Elder_Scrolls_V_-_Skyrim.jpg',
        description:
            "The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
        amount: 1,
        alt: 'The Elder Scrolls V: Skyrim',
    },

    {
        id: '15',
        name: 'Apex Legends',
        ageLimit: 12,
        rating: 3,
        price: 15.99,
        genre: 'Shooter',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Apex_Legends.jpg',
        description:
            'Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, similar to those of hero shooters.',
        amount: 1,
        alt: 'Apex Legends',
    },

    {
        id: '16',
        name: 'Mass Effect: Legendary Edition',
        ageLimit: 16,
        rating: 5,
        price: 45.99,
        genre: 'RPG',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://cdn-products.eneba.com/resized-products/q7LfT94FS4Fc5KomlwjjI_pJxUyWdneCLgsWqqRRuAQ_350x200_1x-0.jpeg',
        description:
            'The Mass Effect™ Legendary Edition includes single-player base content and over 40 DLC from Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons and armors',
        amount: 1,
        alt: 'Mass Effect: Legendary Edition',
    },

    {
        id: '17',
        name: 'F1 2021',
        ageLimit: 6,
        rating: 4,
        price: 59.99,
        genre: 'Simulator',
        platform: { pc: true, playstation: false, xbox: false },
        image: 'https://s1.gaming-cdn.com/images/products/8970/271x377/f1-2021-xbox-one-xbox-series-xs-cover.jpg',
        description:
            'Enjoy the stunning new features of F1® 2021, including the thrilling story experience ‘Braking Point’, two-player Career, and get even closer to the grid with ‘Real-Season Start’.',
        amount: 1,
        alt: 'F1 2021',
    },

    {
        id: '18',
        name: 'Call of Duty: Modern Warfare',
        ageLimit: 18,
        rating: 2,
        price: 9.99,
        genre: 'Shooter',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_.jpg',
        description:
            'Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward for the Xbox One, PlayStation 4 and Windows. It is a reboot of the original Modern Warfare trilogy.',
        amount: 1,
        alt: 'Call of Duty: Modern Warfare',
    },

    {
        id: '19',
        name: 'Hitman',
        ageLimit: 16,
        rating: 5,
        price: 25.99,
        genre: 'Action-adventure',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4b/Hitman_3_Packart.jpg/1200px-Hitman_3_Packart.jpg',
        description:
            'Hitman is a stealth video game in which players control a genetically enhanced assassin from a third-person perspective as he carries out assassinations of various targets across the globe.',
        amount: 1,
        alt: 'Hitman',
    },

    {
        id: '20',
        name: 'Rust',
        ageLimit: 18,
        rating: 5,
        price: 30.99,
        genre: 'Sandbox',
        platform: { pc: true, playstation: true, xbox: true },
        image: 'https://store-images.s-microsoft.com/image/apps.36981.69312789698701726.d27b8773-a696-422a-8e4e-47d9f8fde34f.c3287c35-a0e9-411d-ba6a-459b891e4106',
        description:
            'The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.',
        amount: 1,
        alt: 'Rust',
    },
]

export default gamesData
