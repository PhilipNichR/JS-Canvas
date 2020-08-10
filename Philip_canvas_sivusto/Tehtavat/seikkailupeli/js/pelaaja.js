'use strict';
class Pelaaja {
constructor(nimi, rivi, sarake, suunta) {
this.rivi = rivi;
this.sarake = sarake;
this.suunta = suunta;
this.nimi = nimi;
this.reppu=[];
this.pisteet=0;
}
lisaaReppuun(esine) {
this.reppu.push(esine);
this.pisteet+=esine.pisteet;
}
haeReppu() {
return this.reppu;
}
getLuokka() {
return this.nimi+this.suunta;
}
siirry() {
switch (this.suunta) {
case SUUNTA.YLOS:
this.rivi--;
break;
case SUUNTA.ALAS:
this.rivi++;
break;
case SUUNTA.VASEN:
this.sarake--;
break;
case SUUNTA.OIKEA:
this.sarake++;
break;
}
}
}