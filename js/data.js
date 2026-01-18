// this is temporary!!
// here we are manually pushing data into localStorage using setItem() method
// create an admin page where we can add games to the store

let games = [{
    id: uuidv4(),
    name: 'The Last of Us: Part 2',
    developer: 'Santa Monica Studio',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.726 106.726"><defs/><g><path d="M11.703 67.563l-3.6 1.4c-5.4 2.3-8.2 4.7-8.1 6.8.3 3.1 3.8 5.4 10.2 7.1 8.3 2.2 16.7 2.7 25.4 1.4v-8.7l-6.9 2.6c-7.2 2.5-10.9.4-10.9.4-1.1-.7-1.6-2.4 1.4-3.5l3.8-1.4 12.6-4.5v-10.1l-3.2 1.1-20.7 7.4zM64.303 32.463v25.9c5.4 2.6 10.2 2.8 13.8.1 3.7-2.6 5.7-7.1 5.7-13.9 0-7.1-1.4-12.5-4.5-16.1-2.8-3.8-7.8-7-15.2-9.5-9.2-3-17-5.6-23.2-6.9v77.5l16.7 5.1v-64.4c-.1-3.9 6.7-3.6 6.7 2.2z"/><path d="M106.703 72.463c-.1-2.7-3.3-4.8-9-6.7-6.4-2.1-11.9-3.1-17.9-2.9-5.5.1-12.1 1.9-18 3.8v9.9l16.2-5.7s4.9-1.8 9.1-.7c3.2.8 3 2.6-.2 3.7l-3.7 1.5-21.4 7.7v10.1l10-3.6 24-8.5 2.8-1.3c5.8-2.1 8.4-4.4 8.1-7.3z"/></g></svg>`,
    thumbnail: 'img/lastOfUs/thumb.jpg',
    banner: 'img/lastOfUs/banner.jpg',
    category: {
        id: 0,
        name: 'Playstation'
    },
    price: 19.99,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg'],
    releaseDate: '19th Jun, 2020',
    summary: [{
        txt: `Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming.`,
        img: 'img/lastOfUs/gallery/1.jpg'
    }, {
        txt: `Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.`,
        img: 'img/lastOfUs/gallery/2.jpg'
    }, {
        txt: `As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.`,
        img: 'img/lastOfUs/gallery/3.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Animal Crossing: New Horizons',
    developer: 'Nintendo',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs/><path xmlns="http://www.w3.org/2000/svg" d="M397 0H281v512h116c63.411 0 115-51.589 115-115V115C512 51.589 460.411 0 397 0zm-.5 332c-33.359 0-60.5-27.141-60.5-60.5s27.141-60.5 60.5-60.5 60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z" data-original="#d5011d"/><g xmlns="http://www.w3.org/2000/svg"><path d="M251 512H115C51.589 512 0 460.411 0 397V115C0 51.589 51.589 0 115 0h136v512zM115 30c-46.869 0-85 38.131-85 85v282c0 46.869 38.131 85 85 85h106V30H115z" data-original="#ff0021"/><path d="M125.5 211C92.141 211 65 183.859 65 150.5S92.141 90 125.5 90s60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z" data-original="#ff0021"/></g></svg>`,
    thumbnail: 'img/animalCrossing/thumb.jpg',
    banner: 'img/animalCrossing/banner.jpg',
    category: {
        id: 1,
        name: 'Nintendo'
    },
    price: 24.99,
    rating: ['img/rating/p3.png'],
    releaseDate: '20th Mar, 2020',
    summary: [{
        txt: `If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package. Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service. But deep down, isn’t there a part of you that longs for…freedom?`,
        img: 'img/animalCrossing/gallery/1.jpg'
    }, {
        txt: `Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered. Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways.`,
        img: 'img/animalCrossing/gallery/2.jpg'
    }, {
        txt: `Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more.`,
        img: 'img/animalCrossing/gallery/3.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.082"><defs/><path d="M0 409.705l194.716 26.836V250.677H0zM0 226.692h194.716V38.544L0 65.38zM216.129 439.398l258.953 35.684V250.674H216.129zM216.132 35.688v191.004h258.95V0z"/></svg>`,
    thumbnail: 'img/cyberpunk/thumb.jpg',
    banner: 'img/cyberpunk/banner.jpg',
    category: {
        id: 2,
        name: 'PC'
    },
    price: 24.99,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg', 'img/rating/descriptors/sex.jpg'],
    releaseDate: '10th Dec, 2020',
    summary: [{
        txt: `Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.`,
        img: 'img/cyberpunk/gallery/1.jpg'
    }, {
        txt: `You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.`,
        img: 'img/cyberpunk/gallery/2.jpg'
    }, {
        txt: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality.`,
        img: 'img/cyberpunk/gallery/3.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Doom Eternal',
    developer: 'Bethesda',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.726 106.726"><defs/><g><path d="M11.703 67.563l-3.6 1.4c-5.4 2.3-8.2 4.7-8.1 6.8.3 3.1 3.8 5.4 10.2 7.1 8.3 2.2 16.7 2.7 25.4 1.4v-8.7l-6.9 2.6c-7.2 2.5-10.9.4-10.9.4-1.1-.7-1.6-2.4 1.4-3.5l3.8-1.4 12.6-4.5v-10.1l-3.2 1.1-20.7 7.4zM64.303 32.463v25.9c5.4 2.6 10.2 2.8 13.8.1 3.7-2.6 5.7-7.1 5.7-13.9 0-7.1-1.4-12.5-4.5-16.1-2.8-3.8-7.8-7-15.2-9.5-9.2-3-17-5.6-23.2-6.9v77.5l16.7 5.1v-64.4c-.1-3.9 6.7-3.6 6.7 2.2z"/><path d="M106.703 72.463c-.1-2.7-3.3-4.8-9-6.7-6.4-2.1-11.9-3.1-17.9-2.9-5.5.1-12.1 1.9-18 3.8v9.9l16.2-5.7s4.9-1.8 9.1-.7c3.2.8 3 2.6-.2 3.7l-3.7 1.5-21.4 7.7v10.1l10-3.6 24-8.5 2.8-1.3c5.8-2.1 8.4-4.4 8.1-7.3z"/></g></svg>`,
    thumbnail: 'img/doom/thumb.jpg',
    banner: 'img/doom/banner.jpg',
    category: {
        id: 0,
        name: 'Playstation'
    },
    price: 10,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg'],
    releaseDate: '20th Mar, 2020',
    summary: [{
        txt: `DOOM Eternal is the direct sequel to 2016's DOOM. Developed by id Software, DOOM Eternal delivers the ultimate combination of speed and power, along with the next leap in push-forward, first-person combat.`,
        img: 'img/doom/gallery/1.jpg'
    }, {
        txt: `As the DOOM Slayer, you’ll return to take your vengeance against the forces of Hell. Set to an all-new pulse-pounding soundtrack composed by Mick Gordon, you fight across dimensions as you slay new and classic demons with powerful new weapons and abilities.`,
        img: 'img/doom/gallery/2.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Grand Theft Auto V',
    developer: 'Rockstar',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.082"><defs/><path d="M0 409.705l194.716 26.836V250.677H0zM0 226.692h194.716V38.544L0 65.38zM216.129 439.398l258.953 35.684V250.674H216.129zM216.132 35.688v191.004h258.95V0z"/></svg>`,
    thumbnail: 'img/gta5/thumb.jpg',
    banner: 'img/gta5/banner.jpg',
    category: {
        id: 2,
        name: 'PC'
    },
    price: 24.00,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg', 'img/rating/descriptors/in-game-purchases.jpg'],
    releaseDate: '18th Nov, 2014',
    summary: [{
        txt: `The sprawling sun-soaked metropolis of Los Santos is chock full of self-help coaches, starlets and C-List celebrities, once on top of the media world, now struggling to stay relevant in time of economic malaise and lowest-common-denominator reality TV.`,
        img: 'img/gta5/gallery/1.jpg'
    }, {
        txt: `Amidst this madness, three unique criminals plan their own chances of survival and success: Franklin, a street-level hustler in search of opportunities for serious money; Michael, an ex-con whose "retirement" is a less rosy than he hoped it would be; and Trevor, a violent dude driven by the chance for a quick high and the next big score.`,
        img: 'img/gta5/gallery/2.jpg'
    }, {
        txt: `Nearly out of options, the crew risks it all in a series of daring and dangerous heists that could set them up for life - one way or the other.`,
        img: 'img/gta5/gallery/3.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Assassin\'s Creed Valhalla',
    developer: 'Ubisoft',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.732 25.732"><defs/><path d="M5.733 2.183c-.013.01-.023.021-.035.031.073-.077.178-.16.247-.205C7.959.7 10.286 0 12.868 0c2.415 0 4.677.667 6.608 1.827.14.083.522.345.719.583v.001c-1.863-2.054-7.339 2.353-7.339 2.353-1.894-1.46-3.636-2.455-4.933-2.809-1.084-.297-1.834-.049-2.19.228zm16.572 1.942c-.057-.063-.119-.122-.176-.187-.471-.517-1.05-.642-1.572-.608-.475.149-2.67.94-5.375 3.494 0 0 3.045 2.961 4.91 5.988 1.863 3.027 2.977 5.406 2.292 8.708 2.079-2.285 3.347-5.321 3.347-8.655 0-3.374-1.299-6.445-3.426-8.74zm-4.648 9.98c-.826-.927-2.055-2.255-3.678-3.869-.355-.353-.73-.721-1.124-1.102 0 0-.593.593-1.365 1.373v-.001c-.988.998-2.269 2.3-2.98 3.06-1.266 1.351-4.893 5.594-5.097 7.973 0 0-.807-1.887.964-6.239 1.157-2.845 4.653-7.117 6.113-8.509 0 0-1.334-1.468-3.008-2.482l-.01-.003s-.019-.015-.049-.034c-.805-.48-1.684-.85-2.53-.899-.864.061-1.411.693-1.411.693-2.159 2.302-3.48 5.396-3.48 8.8 0 7.105 5.76 12.866 12.866 12.866 3.771 0 7.164-1.626 9.518-4.211-.001-.004-.271-1.7-2.002-4.133-.407-.57-1.894-2.349-2.727-3.283z"/></svg>`,
    thumbnail: 'img/assassinsCreed/thumb.jpg',
    banner: 'img/assassinsCreed/banner.jpg',
    category: {
        id: 3,
        name: 'XBOX'
    },
    price: 24.99,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg', 'img/rating/descriptors/in-game-purchases.jpg'],
    releaseDate: '10th Nov, 2020',
    summary: [{
        txt: `Build your own Viking Legend. Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla.`,
        img: 'img/assassinsCreed/gallery/1.jpg'
    }, {
        txt: `England in the age of the Vikings is a fractured nation of petty lords and warring kingdoms. Beneath the chaos lies a rich and untamed land waiting for a new conqueror. Will it be you? Write Your Viking Saga. Blaze your own path across England with advanced RPG mechanics. Fight brutal battles, lead fiery raids or use strategy and alliances with other leaders to bring victory.`,
        img: 'img/assassinsCreed/gallery/2.jpg'
    }, {
        txt: `Every choice you make in combat and conversation is another step on the path to greatness. Lead Epic Raids. Lead a crew of raiders and launch lightning-fast surprise attacks against Saxon armies and fortresses. Claim the riches of your enemies' lands for your clan and expand your influence far beyond your growing settlement.`,
        img: 'img/assassinsCreed/gallery/3.jpg'
    }, {
        txt: `ENGAGE IN VISCERAL COMBAT. Unleash the ruthless fighting style of a Viking warrior as you dual-wield axes, swords, or even shields against relentless foes. Decapitate opponents in close-quarters combat, riddle them with arrows, or assassinate them with your Hidden Blade. Grow Your Settlement. Your clan's new home grows with your legend.`,
        img: 'img/assassinsCreed/gallery/4.jpg'
    }, {
        txt: `Customise your settlement by building upgradable structures. Unlock new features and quests by constructing a barracks, a blacksmith, a tattoo parlour, and much more. Share Your Custom Raider. Recruit mercenary Vikings designed by other players or create and customise your own to share online. Sit back and reap the rewards when they fight alongside your friends in their game worlds.`,
        img: 'img/assassinsCreed/gallery/5.jpg'
    }, {
        txt: `A Dark Age Open World. Sail across the icy North Sea to discover and conquer the broken kingdoms of England. Immerse yourself in activities like hunting and drinking games or engage in traditional Norse competitions like flyting – or, as it's better known, verbally devastating rivals through the art of the Viking rap battle.`,
        img: 'img/assassinsCreed/gallery/6.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'The Witcher 3: Wild Hunt',
    developer: 'CD Projekt Red',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.082"><defs/><path d="M0 409.705l194.716 26.836V250.677H0zM0 226.692h194.716V38.544L0 65.38zM216.129 439.398l258.953 35.684V250.674H216.129zM216.132 35.688v191.004h258.95V0z"/></svg>`,
    thumbnail: 'img/theWitcher/thumb.jpg',
    banner: 'img/theWitcher/banner.jpg',
    category: {
        id: 2,
        name: 'PC'
    },
    price: 15,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg'],
    releaseDate: '19th May, 2015',
    summary: [{
        txt: `With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing.`,
        img: 'img/theWitcher/gallery/1.jpg'
    }, {
        txt: `Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format. Also known as "The Witcher III: Wild Hunt".`,
        img: 'img/theWitcher/gallery/2.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Paper Mario: The Origami King',
    developer: 'Nintendo',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs/><path xmlns="http://www.w3.org/2000/svg" d="M397 0H281v512h116c63.411 0 115-51.589 115-115V115C512 51.589 460.411 0 397 0zm-.5 332c-33.359 0-60.5-27.141-60.5-60.5s27.141-60.5 60.5-60.5 60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z" data-original="#d5011d"/><g xmlns="http://www.w3.org/2000/svg"><path d="M251 512H115C51.589 512 0 460.411 0 397V115C0 51.589 51.589 0 115 0h136v512zM115 30c-46.869 0-85 38.131-85 85v282c0 46.869 38.131 85 85 85h106V30H115z" data-original="#ff0021"/><path d="M125.5 211C92.141 211 65 183.859 65 150.5S92.141 90 125.5 90s60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z" data-original="#ff0021"/></g></svg>`,
    thumbnail: 'img/mario/thumb.jpg',
    banner: 'img/mario/banner.jpg',
    category: {
        id: 1,
        name: 'Nintendo'
    },
    price: 24.99,
    rating: ['img/rating/p7.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/fear.jpg'],
    releaseDate: '17th Jul, 2020',
    summary: [{
        txt: `Featuring a new ring-based battle system that mixes puzzle-solving skills with traditional turn-based combat, Paper Mario: The Origami King aims to put new twists in the series' established formula.`,
        img: 'img/mario/gallery/1.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Half-Life Alyx',
    developer: 'Valve',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.082"><defs/><path d="M0 409.705l194.716 26.836V250.677H0zM0 226.692h194.716V38.544L0 65.38zM216.129 439.398l258.953 35.684V250.674H216.129zM216.132 35.688v191.004h258.95V0z"/></svg>`,
    thumbnail: 'img/halfLife/thumb.jpg',
    banner: 'img/halfLife/banner.jpg',
    category: {
        id: 2,
        name: 'PC'
    },
    price: 15,
    rating: ['img/rating/p16.png', 'img/rating/descriptors/violence.jpg'],
    releaseDate: '23rd Mar, 2020',
    summary: [{
        txt: `Half-Life: Alyx is Valve's VR return to the Half-Life series. It's the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity's only chance for survival.`,
        img: 'img/halfLife/gallery/1.jpg'
    }, {
        txt: `The Combine's control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth's greatest scientists: you and your father, Dr. Eli Vance.`,
        img: 'img/halfLife/gallery/2.jpg'
    }, {
        txt: `As founders of a fledgling resistance, you've continued your clandestine scientific activity performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine. Every day, you learn more about your enemy, and every day you work toward finding a weakness.`,
        img: 'img/halfLife/gallery/3.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'God of War',
    developer: 'Santa Monica Studio',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.726 106.726"><defs/><g><path d="M11.703 67.563l-3.6 1.4c-5.4 2.3-8.2 4.7-8.1 6.8.3 3.1 3.8 5.4 10.2 7.1 8.3 2.2 16.7 2.7 25.4 1.4v-8.7l-6.9 2.6c-7.2 2.5-10.9.4-10.9.4-1.1-.7-1.6-2.4 1.4-3.5l3.8-1.4 12.6-4.5v-10.1l-3.2 1.1-20.7 7.4zM64.303 32.463v25.9c5.4 2.6 10.2 2.8 13.8.1 3.7-2.6 5.7-7.1 5.7-13.9 0-7.1-1.4-12.5-4.5-16.1-2.8-3.8-7.8-7-15.2-9.5-9.2-3-17-5.6-23.2-6.9v77.5l16.7 5.1v-64.4c-.1-3.9 6.7-3.6 6.7 2.2z"/><path d="M106.703 72.463c-.1-2.7-3.3-4.8-9-6.7-6.4-2.1-11.9-3.1-17.9-2.9-5.5.1-12.1 1.9-18 3.8v9.9l16.2-5.7s4.9-1.8 9.1-.7c3.2.8 3 2.6-.2 3.7l-3.7 1.5-21.4 7.7v10.1l10-3.6 24-8.5 2.8-1.3c5.8-2.1 8.4-4.4 8.1-7.3z"/></g></svg>`,
    thumbnail: 'img/godOfWar/thumb.jpg',
    banner: 'img/godOfWar/banner.jpg',
    category: {
        id: 0,
        name: 'Playstation'
    },
    price: 7,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg'],
    releaseDate: '20th Apr, 2018',
    summary: [{
        txt: `His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.`,
        img: 'img/godOfWar/gallery/1.jpg'
    }, {
        txt: `As mentor and protector to a son determined to earn his respect, Kratos is faced with an unexpected opportunity to master the rage that has long defined him. Questioning the dark lineage he’s passed on to his son, he hopes to make amends for the shortcomings of his past.`,
        img: 'img/godOfWar/gallery/2.jpg'
    }, {
        txt: `Set within the untamed forests, mountains, and realms of Norse lore, God of War features a distinctly new setting with its own pantheon of creatures, monsters, and gods.`,
        img: 'img/godOfWar/gallery/3.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'Resident Evil 3',
    developer: 'Capcom',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.726 106.726"><defs/><g><path d="M11.703 67.563l-3.6 1.4c-5.4 2.3-8.2 4.7-8.1 6.8.3 3.1 3.8 5.4 10.2 7.1 8.3 2.2 16.7 2.7 25.4 1.4v-8.7l-6.9 2.6c-7.2 2.5-10.9.4-10.9.4-1.1-.7-1.6-2.4 1.4-3.5l3.8-1.4 12.6-4.5v-10.1l-3.2 1.1-20.7 7.4zM64.303 32.463v25.9c5.4 2.6 10.2 2.8 13.8.1 3.7-2.6 5.7-7.1 5.7-13.9 0-7.1-1.4-12.5-4.5-16.1-2.8-3.8-7.8-7-15.2-9.5-9.2-3-17-5.6-23.2-6.9v77.5l16.7 5.1v-64.4c-.1-3.9 6.7-3.6 6.7 2.2z"/><path d="M106.703 72.463c-.1-2.7-3.3-4.8-9-6.7-6.4-2.1-11.9-3.1-17.9-2.9-5.5.1-12.1 1.9-18 3.8v9.9l16.2-5.7s4.9-1.8 9.1-.7c3.2.8 3 2.6-.2 3.7l-3.7 1.5-21.4 7.7v10.1l10-3.6 24-8.5 2.8-1.3c5.8-2.1 8.4-4.4 8.1-7.3z"/></g></svg>`,
    thumbnail: 'img/re3/thumb.jpg',
    banner: 'img/re3/banner.jpg',
    category: {
        id: 0,
        name: 'Playstation'
    },
    price: 13.99,
    rating: ['img/rating/p18.png', 'img/rating/descriptors/violence.jpg', 'img/rating/descriptors/bad-language.jpg'],
    releaseDate: '3rd Apr, 2020',
    summary: [{
        txt: `Fight your way to freedom from the brink of despair. A series of strange disappearances have been occurring in the American Midwest within a place called Racoon City.`,
        img: 'img/re3/gallery/1.jpg'
    }, {
        txt: `A specialist squad of the police force known as S.T.A.R.S. has been investigating the case, and have determined that the pharmaceutical company Umbrella and their biological weapon, the T-Virus, are behind the incidents though they've lost several members in the process.`,
        img: 'img/re3/gallery/2.jpg'
    }, {
        txt: `Jill Valentine and the other surviving S.T.A.R.S. members try to make this truth known, but find that the police department itself is under Umbrella's sway and their reports are rejected out of hand. However, soon reports of a grisly "cannibal virus" begin to surface, and vicious dogs begin roaming the streets.`,
        img: 'img/re3/gallery/3.jpg'
    }, {
        txt: `With the viral plague spreading through the town and to her very doorstep, Jill is determined to survive. However, unbeknownst to Jill, an extremely powerful pursuer has already been dispatched to eliminate her.`,
        img: 'img/re3/gallery/4.jpg'
    }]
}, {
    id: uuidv4(),
    name: 'The Legend of Zelda: Link\'s Awakening',
    developer: 'Nintendo',
    developerIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs/><path xmlns="http://www.w3.org/2000/svg" d="M397 0H281v512h116c63.411 0 115-51.589 115-115V115C512 51.589 460.411 0 397 0zm-.5 332c-33.359 0-60.5-27.141-60.5-60.5s27.141-60.5 60.5-60.5 60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z" data-original="#d5011d"/><g xmlns="http://www.w3.org/2000/svg"><path d="M251 512H115C51.589 512 0 460.411 0 397V115C0 51.589 51.589 0 115 0h136v512zM115 30c-46.869 0-85 38.131-85 85v282c0 46.869 38.131 85 85 85h106V30H115z" data-original="#ff0021"/><path d="M125.5 211C92.141 211 65 183.859 65 150.5S92.141 90 125.5 90s60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z" data-original="#ff0021"/></g></svg>`,
    thumbnail: 'img/zelda/thumb.jpg',
    banner: 'img/zelda/banner.jpg',
    category: {
        id: 1,
        name: 'Nintendo'
    },
    price: 18,
    rating: ['img/rating/p7.png', 'img/rating/descriptors/violence.jpg'],
    releaseDate: '20th Sept, 2019',
    summary: [{
        txt: `26 years after its original release on Game Boy, The Legend of Zelda: Link's Awakening will be reborn as a new experience on Nintendo Switch. Buffeted by a storm, Link washes ashore on the mysterious Koholint Island.`,
        img: 'img/zelda/gallery/1.jpg'
    }, {
        txt: `In order to return home, Link must overcome challenging dungeons and battle against fearsome monsters. This new version of the classic adventure includes many unique elements that appeared in the original Game Boy release, such as 2D platformer-style rooms and appearances from characters outside of The Legend of Zelda series.`,
        img: 'img/zelda/gallery/2.jpg'
    }]
}];
localStorage.setItem('games', JSON.stringify(games));