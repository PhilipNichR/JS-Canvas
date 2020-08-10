'use strict';

(function () {
    const viesti="Voitit!";
    let voitto;
    const maxAarteet=10;
    let yritykset;
    let kaivettu=20;
    let pisteet=0;
    let tilataulu;
    let pelialue;
    let pistealue;
    const tyylit = ['kukka','ruoho','kukka2','tausta','aarre'];
    const taso = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 3, 0, 0],
        [0, 2, 0, 3, 0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
        
    ];

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
         pelialue = document.getElementById('pelialue');
         pistealue = document.getElementById("scoreboard");
         yritykset = document.getElementById("yritykset");
         voitto = document.getElementById("voitto");
            arvoAarteet(maxAarteet);
        for (let rivi = 0; rivi < taso.length; rivi++) {
            let tr = document.createElement('tr');
            for (let sarake = 0; sarake < taso[rivi].length; sarake++) {
                let td = document.createElement('td');
                td.setAttribute('class', tyylit[Math.floor(Math.random()*3)]);
                td.addEventListener('click',
                    e => paivitaTila(e.target, rivi,sarake));
                tr.appendChild(td);
            }
            pelialue.appendChild(tr);
        }
    }
    
    function paivitaTila(elementti, r,s) {
        if (taso[r][s]===5){
            return;
        }
        if (taso[r][s]===1 ) {
            elementti.setAttribute('class','aarre');
            taso[r][s]=5;
            pisteet += 1;
            pistealue.textContent=pisteet;
        }
        else {
            elementti.setAttribute('class', 'tausta');
            kaivettu--;
           yritykset.textContent = kaivettu;
        }
    }
    function arvoAarteet(lkm){
        while (lkm>0) {
            let rivi=Math.floor(Math.random()*taso.length);
            let sarake=Math.floor(Math.random()*taso[rivi].length);
            if (taso[rivi][sarake]!==1) {
                taso[rivi][sarake] = 1;
                lkm--;
            }
        }
    }
    function voitto1(){
        if (pisteet===maxAarteet){
            viesti;
        voitto.textContent=viesti;
        }
    }

})();