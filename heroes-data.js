/* External hero database. Game logic reads this file; edit or extend it to rebalance the arena. */
window.HEROES = [
 {id:'spiderman',name:'Spider-Man',icon:'🕷️',role:'Tactician',cost:250,health:80,attack:65,defense:55,speed:90,power:75,ability:{name:'Web Shot',power:1.15,effect:'stun',chance:.45,desc:'урон и паутина'}},
 {id:'captain',name:'Captain America',icon:'🛡️',role:'Tank',cost:250,health:95,attack:60,defense:82,speed:65,power:55,ability:{name:'Shield Throw',power:1.2,effect:'stun',chance:.25,desc:'урон и оглушение'}},
 {id:'ironman',name:'Iron Man',icon:'🤖',role:'Striker',cost:300,health:78,attack:82,defense:65,speed:72,power:85,ability:{name:'Repulsor Blast',power:1.55,effect:'none',desc:'мощный луч'}},
 {id:'thor',name:'Thor',icon:'⚡',role:'Striker',cost:350,health:110,attack:90,defense:80,speed:65,power:95,ability:{name:'Lightning',power:1.45,effect:'stun',chance:.3,desc:'гром и оглушение'}},
 {id:'hulk',name:'Hulk',icon:'💚',role:'Tank',cost:400,health:145,attack:100,defense:85,speed:40,power:80,ability:{name:'Rage',power:1,effect:'rage',desc:'ярость: +35% атаки'}},
 {id:'strange',name:'Doctor Strange',icon:'🔮',role:'Support',cost:400,health:72,attack:65,defense:55,speed:75,power:100,ability:{name:'Mystic Heal',power:0,effect:'heal',amount:34,desc:'лечение союзника'}},
 {id:'wolverine',name:'Wolverine',icon:'🦸',role:'Striker',cost:280,health:105,attack:78,defense:58,speed:78,power:70,ability:{name:'Berserker Claws',power:1.45,effect:'rage',desc:'урон и ярость'}},
 {id:'blackpanther',name:'Black Panther',icon:'🐾',role:'Tactician',cost:230,health:76,attack:63,defense:62,speed:92,power:68,ability:{name:'Vibranium Strike',power:1.3,effect:'defend',desc:'урон и защита'}},
 {id:'scarletwitch',name:'Scarlet Witch',icon:'🔴',role:'Tactician',cost:360,health:70,attack:76,defense:48,speed:76,power:98,ability:{name:'Hex',power:1.25,effect:'stun',chance:.5,desc:'урон и проклятие'}},
 {id:'blackwidow',name:'Black Widow',icon:'🕵️',role:'Tactician',cost:180,health:68,attack:53,defense:45,speed:95,power:58,ability:{name:'Widow Bite',power:1.1,effect:'stun',chance:.55,desc:'электрошок'}},
 {id:'hawkeye',name:'Hawkeye',icon:'🏹',role:'Striker',cost:190,health:65,attack:71,defense:42,speed:82,power:62,ability:{name:'Trick Arrow',power:1.35,effect:'none',desc:'точный выстрел'}},
 {id:'vision',name:'Vision',icon:'🟡',role:'Support',cost:330,health:88,attack:70,defense:75,speed:68,power:88,ability:{name:'Solar Jewel',power:1.4,effect:'heal',amount:18,desc:'луч и восстановление'}},
 {id:'antman',name:'Ant-Man',icon:'🐜',role:'Tactician',cost:170,health:62,attack:50,defense:42,speed:88,power:66,ability:{name:'Giant Punch',power:1.5,effect:'none',desc:'увеличенный удар'}},
 {id:'groot',name:'Groot',icon:'🌳',role:'Tank',cost:260,health:125,attack:55,defense:78,speed:35,power:65,ability:{name:'I Am Groot',power:0,effect:'heal',amount:40,desc:'регенерация'}},
 {id:'gamora',name:'Gamora',icon:'🗡️',role:'Striker',cost:270,health:82,attack:76,defense:54,speed:84,power:72,ability:{name:'Godslayer',power:1.5,effect:'none',desc:'смертельный удар'}},
 {id:'starlord',name:'Star-Lord',icon:'🚀',role:'Support',cost:210,health:74,attack:62,defense:50,speed:80,power:68,ability:{name:'Quad Blasters',power:1.3,effect:'defend',desc:'залп и укрытие'}},
 {id:'daredevil',name:'Daredevil',icon:'😈',role:'Tactician',cost:200,health:76,attack:61,defense:55,speed:87,power:60,ability:{name:'Radar Sense',power:1,effect:'defend',desc:'идеальная защита'}},
 {id:'loki',name:'Loki',icon:'🐍',role:'Tactician',cost:320,health:73,attack:67,defense:52,speed:80,power:92,ability:{name:'Illusion',power:1.15,effect:'stun',chance:.4,desc:'обман и оглушение'}},
 {id:'deadpool',name:'Deadpool',icon:'🔫',role:'Striker',cost:290,health:98,attack:79,defense:50,speed:76,power:75,ability:{name:'Maximum Effort',power:1.55,effect:'heal',amount:15,desc:'урон и регенерация'}},
 {id:'storm',name:'Storm',icon:'🌪️',role:'Support',cost:310,health:74,attack:72,defense:53,speed:83,power:90,ability:{name:'Storm Call',power:1.35,effect:'stun',chance:.32,desc:'шторм'}},
 {id:'colossus',name:'Colossus',icon:'🪨',role:'Tank',cost:240,health:120,attack:57,defense:88,speed:38,power:58,ability:{name:'Steel Skin',power:1,effect:'defend',desc:'стальная кожа'}}
];

