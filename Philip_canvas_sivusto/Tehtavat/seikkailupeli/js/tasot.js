'use strict';
function lataaTasot() {
return [
{
"nimi": "taso 1",
"riviLkm": 7,
"sarakeLkm": 12,
"kartta": [
[1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,1,1,0,1,1,0,1,0,1],
[1,0,2,2,2,0,1,1,0,1,0,1],
[1,0,0,0,0,0,1,2,0,0,0,2],
[1,1,1,1,1,0,0,0,0,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
],
"karttakuvat": ["tie", "nurmi", "kukka"],
"alkurivi": 2,
"alkusarake": 0,
"alkusuunta":"oikea",
"loppurivi": 1,
"loppusarake": 11,
"kulkuSallittu":0,
"tormays":"tormays",
"sumu":{"nimi":"sumu", "leveys":1,"pituus":2},
"vastustajat":[
{"nimi":"vastustaja", "alkurivi":1, "alkusarake":11,
"suunta":"vasen"},
{"nimi":"vastustaja", "alkurivi":1, "alkusarake":3,
"suunta":"oikea"}
],
"esineet":[
{"nimi":"raha","rivi":1,"sarake":4,"pisteet":10},
{"nimi":"raha","rivi":5,"sarake":6,"pisteet":5},
],
"avaimet":[
]
},
{
"nimi": "taso 2",
"riviLkm": 9,
"sarakeLkm": 20,
"kartta": [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1],
[1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1],
[1,0,2,2,2,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,1,2,0,0,0,0,0,1,1,0,1,0,0,1],
[1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1],
[1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1],
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
"karttakuvat": ["tie", "nurmi", "kukka"],
"alkurivi": 1,
"alkusarake": 0,
"alkusuunta":"oikea",
"loppurivi": 4,
"loppusarake": 19,
"kulkuSallittu":0,
"tormays":"tormays",
"sumu":{"nimi":"sumu", "leveys":1,"pituus":2},
"vastustajat":[
{"nimi":"vastustaja", "alkurivi":1, "alkusarake":12,
"suunta":"vasen"},
{"nimi":"vastustaja", "alkurivi":4, "alkusarake":3,
"suunta":"oikea"}
],
"esineet":[
{"nimi":"raha","rivi":7,"sarake":15,"pisteet":5},
{"nimi":"raha","rivi":6,"sarake":7,"pisteet":5},
{"nimi":"raha","rivi":1,"sarake":14,"pisteet":5},
{"nimi":"raha","rivi":6,"sarake":3,"pisteet":5}
],
"avaimet":[
{"nimi":"avain","rivi":1,"sarake":10,"pisteet":10,
"avaaRivi":4, "avaaSarake":19, "arvo":0}
]
},
{
"nimi": "taso 3",
"riviLkm": 17,
"sarakeLkm": 20,
"kartta": [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1],
[1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1],
[1,0,2,2,2,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1],
[1,0,0,0,0,0,1,2,0,0,0,0,0,1,1,0,1,0,0,1],
[1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1],
[1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1],
[1,0,0,1,2,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1],
[1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
[1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
[1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,0,1,0,2,0,1,1,1,0,1,1,1,0,2,2,0,1],
[1,0,1,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,0,1,0,2,0,1,1,0,1,1,0,1,1,1,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
"karttakuvat": ["tie", "hiekka", "kukka"],
"alkurivi": 1,
"alkusarake": 0,
"alkusuunta":"oikea",
"loppurivi": 4,
"loppusarake": 19,
"kulkuSallittu":0,
"tormays":"tormays",
"sumu":{"nimi":"sumu", "leveys":2,"pituus":3},
"vastustajat":[
{"nimi":"vastustaja", "alkurivi":1, "alkusarake":12,
"suunta":"vasen"},
{"nimi":"vastustaja", "alkurivi":4, "alkusarake":3,
"suunta":"oikea"},
{"nimi":"vastustaja", "alkurivi":4, "alkusarake":12,
"suunta":"vasen"},
{"nimi":"vastustaja", "alkurivi":7, "alkusarake":2,
"suunta":"alas"},
{"nimi":"vastustaja", "alkurivi":8, "alkusarake":4,
"suunta":"alas"},
{"nimi":"vastustaja", "alkurivi":15, "alkusarake":10,
"suunta":"vasen"}
],
"esineet":[
{"nimi":"raha","rivi":4,"sarake":10,"pisteet":10},
{"nimi":"raha","rivi":6,"sarake":7,"pisteet":10},
{"nimi":"raha","rivi":1,"sarake":14,"pisteet":10},
{"nimi":"raha","rivi":15,"sarake":7,"pisteet":10},
{"nimi":"raha","rivi":15,"sarake":12,"pisteet":10},
{"nimi":"raha","rivi":1,"sarake":16,"pisteet":10},
{"nimi":"raha","rivi":14,"sarake":3,"pisteet":10},
{"nimi":"raha","rivi":3,"sarake":13,"pisteet":10}
],
"avaimet":[
{"nimi":"avain2","rivi":7,"sarake":2,"pisteet":100,
"avaaRivi":9, "avaaSarake":17, "arvo":0},
{"nimi":"avain","rivi":8,"sarake":17,"pisteet":100,
"avaaRivi":4, "avaaSarake":19, "arvo":0},
{"nimi":"avain","rivi":14,"sarake":18,"pisteet":100,
"avaaRivi":10, "avaaSarake":1, "arvo":0},
{"nimi":"avain","rivi":1,"sarake":10,"pisteet":100,
"avaaRivi":8, "avaaSarake":11, "arvo":0}
]
}
];
}