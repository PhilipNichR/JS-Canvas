'use strict';
(function () {
let onLoppu;
let ajastin;
let tasotehdas;
let pelaaja;
let vastustajat;
let esineet;
let avaimet;
document.addEventListener('DOMContentLoaded', function () {
onLoppu = false;
tasotehdas = new Tasotehdas();
alustaTaso();
pelaaja = tasotehdas.getPelaaja();
piirraPelaajaAlkupaikkaan(pelaaja);
paivitaPisteet(tasotehdas.getTaso(), pelaaja);
let nappaimisto = new Nappaimisto();
nappaimisto.lisaaNappain(NAPPAIN.NUOLI_YLOS, TOIMINTO.YLOS);
nappaimisto.lisaaNappain(NAPPAIN.NUOLI_ALAS, TOIMINTO.ALAS);
nappaimisto.lisaaNappain(NAPPAIN.NUOLI_VASEN, TOIMINTO.VASEN);
nappaimisto.lisaaNappain(NAPPAIN.NUOLI_OIKEA, TOIMINTO.OIKEA);
window.addEventListener('keyup', function (e) {
suoritaToiminto(nappaimisto.getToiminto(e.keyCode));
});
ajastin = setInterval(paivitaVastustajat, 330);
});
function suoritaToiminto(toiminto) {
    if (onLoppu) {
    lopputeksti();
    }
    switch (toiminto) {
    case TOIMINTO.YLOS:
    if (tasotehdas.onSiirtoKelvollinen(pelaaja.rivi - 1,
    pelaaja.sarake)) {
    poistaVanhaSuunta(pelaaja);
    pelaaja.suunta = SUUNTA.YLOS;
    pelaaja.siirry();
    }
    break;
    case TOIMINTO.ALAS:
    if (tasotehdas.onSiirtoKelvollinen(pelaaja.rivi + 1,
    pelaaja.sarake)) {
    poistaVanhaSuunta(pelaaja);
    pelaaja.suunta = SUUNTA.ALAS;
    pelaaja.siirry();
    }
    break;
    case TOIMINTO.VASEN:
    if (tasotehdas.onSiirtoKelvollinen(pelaaja.rivi,
    pelaaja.sarake - 1)) {
    poistaVanhaSuunta(pelaaja);
    pelaaja.suunta = SUUNTA.VASEN;
    pelaaja.siirry();
    }
    break;
    case TOIMINTO.OIKEA:
    if (tasotehdas.onSiirtoKelvollinen(pelaaja.rivi,
    pelaaja.sarake + 1)) {
    poistaVanhaSuunta(pelaaja);
    pelaaja.suunta = SUUNTA.OIKEA;
    pelaaja.siirry();
    }
    break;
    }
    paivitaSumu(tasotehdas.getTaso(), pelaaja)
    tarkastaTormaykset();
    lisaaUusiSuunta(pelaaja);
    tarkastaEsinetormaykset(pelaaja);
    tarkastaAvaintormaykset(pelaaja);
    if (tasotehdas.onTasoLoppu(pelaaja)) {
    vaihdaTaso();
    }
    }
    function tarkastaEsinetormaykset(hahmo) {
        for (let i = 0; i < esineet.length; i++) {
        if (hahmo.rivi === esineet[i].rivi &&
        hahmo.sarake === esineet[i].sarake) {
        hahmo.lisaaReppuun(esineet[i]);
        poistaLuokka(esineet[i].rivi, esineet[i].sarake,
        esineet[i].nimi);
        esineet.splice(i, 1);
        paivitaPisteet(tasotehdas.getTaso(), pelaaja);
        return;
        }
        }
        }
        function tarkastaAvaintormaykset(hahmo) {
        let taso = tasotehdas.getTaso();
        for (let i = 0; i < avaimet.length; i++) {
        let avain = avaimet[i];
        if ( hahmo.rivi === avain.rivi &&
        hahmo.sarake === avain.sarake) {
        hahmo.lisaaReppuun(avain);
        poistaLuokka(avain.rivi, avain.sarake, avain.nimi);
        taso.kartta[avain.avaaRivi][avain.avaaSarake] =
        avain.arvo;
        korvaaLuokat(avain.avaaRivi, avain.avaaSarake,
        taso.karttakuvat[avain.arvo]);
        avaimet.splice(i, 1);
        paivitaPisteet(taso, pelaaja);
        return;
        }
        }
        }
        function paivitaVastustajat() {
        for (let vastustaja of vastustajat) {
        poistaVanhaSuunta(vastustaja);
        vastustaja.siirry(tasotehdas);
        lisaaUusiSuunta(vastustaja);
        }
        tarkastaTormaykset();
        }
        function tuliTormays(olio, vastustaja) {
        return olio.rivi === vastustaja.rivi &&
        olio.sarake === vastustaja.sarake;
        }
        function tarkastaTormaykset() {
            for (let vastustaja of vastustajat) {
            if (tuliTormays(pelaaja, vastustaja)) {
            lisaaLuokka(pelaaja.rivi, pelaaja.sarake,
            tasotehdas.getTaso().tormays);
            onLoppu = true;
            clearInterval(ajastin);
            }
            }
            }
            function vaihdaTaso() {
            tasotehdas.seuraavaTaso();
            if (tasotehdas.onTasojaJaljella()) {
            alustaTaso();
            pelaaja.rivi = tasotehdas.getTaso().alkurivi;
            pelaaja.sarake = tasotehdas.getTaso().alkusarake;
            pelaaja.suunta = tasotehdas.getTaso().alkusuunta;
            piirraPelaajaAlkupaikkaan(pelaaja);
            }
            else {
            onLoppu = true;
            clearInterval(ajastin);
            }
            }
            function alustaTaso() {
            teePelialue(tasotehdas.getTaso());
            vastustajat = tasotehdas.getVastustajat();
            esineet = tasotehdas.getEsineet();
            avaimet = tasotehdas.getAvaimet();
            piirraVastustajatAlkupaikkaan(vastustajat);
            lisaaEsineet(esineet);
            lisaaEsineet(avaimet);
            }
            })();