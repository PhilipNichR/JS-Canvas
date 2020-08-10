'use strict';
class Vastustaja extends Pelaaja {
constructor(nimi, rivi, sarake, suunta) {
super(nimi, rivi, sarake, suunta);
}
siirry(tasotehdas) {
let vanhaSuunta = this.suunta;
let vanhaRivi = this.rivi;
let vanhaSarake = this.sarake;
if (Math.random() < 0.5) {
SUUNTA.setKiertosuuntaMyotapaivaan();
}
else {
SUUNTA.setKiertosuuntaVastapaivaan();
}
if (Math.random() < 0.3) {
this.suunta = SUUNTA.getSeuraavaSuunta(this.suunta);
}
super.siirry();
while (!tasotehdas.onSiirtoKelvollinen(this.rivi,
this.sarake)) {
this.rivi = vanhaRivi;
this.sarake = vanhaSarake;
this.suunta = SUUNTA.getSeuraavaSuunta(this.suunta);
super.siirry();
}
}
}