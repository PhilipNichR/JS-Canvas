'use strict';
class Tasotehdas {
constructor() {
this.tasot = lataaTasot();
this.aktiivinenIndeksi = 0;
this.aktiivinenTaso = this.tasot[0];
}
onTasojaJaljella() {
return this.aktiivinenIndeksi < this.tasot.length;
}
seuraavaTaso() {
this.aktiivinenIndeksi++;
if (this.onTasojaJaljella()) {
this.aktiivinenTaso = this.tasot[this.aktiivinenIndeksi];
}
}
getTaso() {
return this.aktiivinenTaso;
}
onSiirtoKelvollinen(rivi, sarake) {
    let taso = this.aktiivinenTaso;
    return 0 <= rivi &&
    rivi < taso.riviLkm &&
    0 <= sarake &&
    sarake < taso.sarakeLkm &&
    taso.kartta[rivi][sarake] <= taso.kulkuSallittu;
    }
    onTasoLoppu(pelaaja) {
    return pelaaja.rivi === this.aktiivinenTaso.loppurivi &&
    pelaaja.sarake === this.aktiivinenTaso.loppusarake;
    }
    getPelaaja() {
    let taso = this.aktiivinenTaso;
    return new Pelaaja("pelaaja", taso.alkurivi,
    taso.alkusarake, taso.alkusuunta);
    }
    getVastustajat() {
    let vastustajat = [];
    for (let vastustaja of this.aktiivinenTaso.vastustajat) {
    vastustajat.push(new Vastustaja(vastustaja.nimi,
    vastustaja.alkurivi,
    vastustaja.alkusarake,
    vastustaja.suunta));
    }
    return vastustajat;
    }
    getEsineet() {
    return this.aktiivinenTaso.esineet;
    }
    getAvaimet() {
    return this.aktiivinenTaso.avaimet;
    }
    }