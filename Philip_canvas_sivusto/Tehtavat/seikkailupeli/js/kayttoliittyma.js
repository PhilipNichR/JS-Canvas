'use strict';
let elementtitaulukko;
function teePelialue(taso) {
let pelialue = document.getElementById('pelialue');
pelialue.innerHTML = '';
let osaDokumentti = document.createDocumentFragment();
elementtitaulukko = [];
for (let rivi = 0; rivi < taso.riviLkm; rivi++) {
let tr = document.createElement('tr');
elementtitaulukko[rivi] = [];
for (let sarake = 0; sarake < taso.sarakeLkm; sarake++) {
let td = document.createElement('td');
elementtitaulukko[rivi][sarake] = td;
td.classList.add(taso.karttakuvat[taso.kartta[rivi][sarake]]);
td.classList.add(taso.sumu.nimi);
tr.appendChild(td);
}
osaDokumentti.appendChild(tr);
}
pelialue.appendChild(osaDokumentti);
}
function poistaVanhaSuunta(hahmo) {
poistaLuokka(hahmo.rivi, hahmo.sarake,hahmo.getLuokka());
}
function lisaaUusiSuunta(hahmo) {
lisaaLuokka(hahmo.rivi, hahmo.sarake, hahmo.getLuokka());
}
function lisaaLuokka(rivi,sarake,luokka){
elementtitaulukko[rivi][sarake].classList.add(luokka);
}
function poistaLuokka(rivi,sarake,luokka) {
elementtitaulukko[rivi][sarake].classList.remove(luokka);
}
function korvaaLuokat(rivi,sarake,luokka) {
elementtitaulukko[rivi][sarake].setAttribute("class",luokka);
}
function piirraPelaajaAlkupaikkaan(pelaaja) {
    lisaaUusiSuunta(pelaaja);
    }
    function piirraVastustajatAlkupaikkaan(vastustajat) {
    for (let vastustaja of vastustajat) {
    lisaaUusiSuunta(vastustaja);
    }
    }
    function lisaaEsineet(esineet) {
    for (let esine of esineet) {
    lisaaLuokka(esine.rivi, esine.sarake, esine.nimi);
    }
    }
    function paivitaPisteet(taso, pelaaja){
    document.getElementById('pisteet').textContent="Taso: "+taso.nimi+
    ", Pisteet: "+pelaaja.pisteet;
    }
    function poistaSumu(taso,alkurivi, loppurivi, alkusarake,loppusarake) {
    let alkur=Math.max(0,alkurivi);
    let alkus=Math.max(0,alkusarake);
    let loppur=Math.max(0,Math.min(taso.riviLkm-1,loppurivi));
    let loppus=Math.max(0,Math.min(taso.sarakeLkm-1,loppusarake));
    for(let rivi=Math.min(alkur,loppur);
    rivi<=Math.max(alkur,loppur);
    rivi++) {
    for(let sarake=Math.min(alkus,loppus);
    sarake<=Math.max(alkus,loppus);
    sarake++) {
    elementtitaulukko[rivi][sarake].classList.remove(
    taso.sumu.nimi);
    }
    }
    }
    function paivitaSumu(taso, pelaaja) {
    let leveys=taso.sumu.leveys;
    let pituus=taso.sumu.pituus;
    let kerroin=1;
    switch(pelaaja.suunta) {
    case SUUNTA.YLOS: kerroin=-1;
    case SUUNTA.ALAS:
    poistaSumu(taso, pelaaja.rivi, pelaaja.rivi+kerroin*pituus,
    pelaaja.sarake-leveys, pelaaja.sarake+leveys);
    break;
    case SUUNTA.VASEN: kerroin=-1;
    case SUUNTA.OIKEA:
    poistaSumu(taso, pelaaja.rivi-leveys, pelaaja.rivi+leveys,
    pelaaja.sarake, pelaaja.sarake+kerroin*pituus);
    }
    }
    function lopputeksti() {
        document.getElementById('pelialue').innerHTML=
        "<h1 class='loppu'>Peli loppui</h1>";
        }