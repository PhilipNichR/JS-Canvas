'use strict';

(function () {

    let kentta = [];
    let kuvat = ['pinkkiKukka', 'ruoho', 'punainenKukka', 'kolikko', 'pata', 'risti', 'ruutu', 'hertta'];
    let pelikentta = [];
    let piilotus = [];
    for (let i = 0; i < kuvat.length; i++) {
        kentta.push(kuvat[i])
        kentta.push(kuvat[i])
    }
    for (let i = 0; i < kentta.length; i++) {
        shuffle(kentta);
    }

    function shuffle(array) {
        array.sort(() => Math.floor(Math.random() - 0.5));
    }

    document.addEventListener('DOMContentLoaded', muodostaPeli);

    luoPeliKentta(kentta, 4);

    function luoPeliKentta(kentta, lkm) {
        for (let i = 0; i < lkm; i++) {
            pelikentta[i] = [];
            for (let r = 0; r < lkm; r++) {
                pelikentta[i].push(kentta[r]);
            }
            for (let o = 0; o < lkm; o++) {
                kentta.shift();
            }
        }
        for (let i = 0; i < lkm; i++) {
            piilotus[i] = [];
            for (let o = 0; o < lkm; o++) {
                piilotus[i].push('piilossa');
            }
        }
    }


    function muodostaPeli() {



        let taulukko = document.getElementById('taulukko');
        for (let r = 0; r < pelikentta.length; r++) {
            let tr = document.createElement('tr');
            taulukko.appendChild(tr)
            for (let s = 0; s < pelikentta[r].length; s++) {

                let td = document.createElement('td');


                td.addEventListener('click', e => paivitaTila(e.target, r, s));

                td.setAttribute('class', piilotus[r][s]);
                tr.appendChild(td);
            }


        }
    }


    let valitut = 0;
    let yritys = 20;
    let yritykset;
    let aika = 1000;
    let muisti1;
    let muisti2;
    let muistiRivi1;
    let muistiSarake1;
    let muistiRivi2;
    let muistiSarake2;
    let pisteet = 0;
    let tulos;

    function paivitaTila(elementti, rivi, sarake) {

        tulos = document.getElementById('summa');
        yritykset = document.getElementById('yritys');
        if (valitut < 1) {
            muistiRivi1 = rivi;
            muistiSarake1 = sarake;
            muisti1 = pelikentta[rivi][sarake];

            if (pelikentta[rivi][sarake]) {
                piilotus[rivi][sarake] = pelikentta[rivi][sarake];

                elementti.setAttribute('class', piilotus[rivi][sarake]);
                valitut++;

            } else {
                elementti.setAttribute('class', 'piilossa');
            }
        } else {
            muistiRivi2 = rivi;
            muistiSarake2 = sarake;

            muisti2 = pelikentta[rivi][sarake];

            console.log(muisti1);
            console.log(muisti2);


            piilotus[rivi][sarake] = pelikentta[rivi][sarake];

            elementti.setAttribute('class', piilotus[rivi][sarake]);
            for (let i = 0; i < piilotus.length; i++) {
                for (let r = 0; r < piilotus[i].length; r++) {
                    piilotus[i][r] = 'piilossa';

                }
            }
            if (muisti1 == 'saatu' || muisti2 == 'saatu') {
                pisteet--;
                yritys--;
            } else if (muisti1 == muisti2) {
                pisteet++;
                tulos.textContent = pisteet;



                pelikentta[muistiRivi1][muistiSarake1] = 'saatu';
                pelikentta[muistiRivi2][muistiSarake2] = 'saatu';





                console.log(pelikentta);

            }
            setTimeout(nollaus, aika)

            function nollaus() {
                let taulukko = document.getElementById('taulukko');
                while (taulukko.hasChildNodes()) {
                    taulukko.removeChild(taulukko.firstChild);
                }

                for (let r = 0; r < pelikentta.length; r++) {
                    let tr = document.createElement('tr');
                    taulukko.appendChild(tr)
                    for (let s = 0; s < pelikentta[r].length; s++) {

                        let td = document.createElement('td');


                        td.addEventListener('click', e => paivitaTila(e.target, r, s));
                        if (pelikentta[r][s] == 'saatu') {
                            td.setAttribute('class', 'saatu');
                        } else {
                            td.setAttribute('class', piilotus[r][s]);
                        }
                        tr.appendChild(td);
                        valitut = 0;

                    }

                }
                yritys--;
                yritykset.textContent = yritys;
            }

        }
    }


})();