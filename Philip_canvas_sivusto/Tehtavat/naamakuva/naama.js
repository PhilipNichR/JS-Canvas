"use strict";

(function(){

    let konteksti;
    let piirtoalusta;


    document.addEventListener("DOMContentLoaded", alusta);

    function alusta() {
        piirtoalusta=document.getElementById('piirtoalusta');
        konteksti=piirtoalusta.getContext('2d');
        piirra(70,60,220,230,'green', true)
        piirra(120,240,120,30,'red', true);
        piirra(160,180,40,40,'orange', true);
        piirra(120,100,50,50,'yellow', true);
        piirra(180,100,50,50,'yellow', true);
        piirra(210,135,10,10,'black');
        piirra(150,135,10,10,'black');

    }

    function piirra(x,y,leveys,korkeus,vari,reunat=false){
        konteksti.fillStyle=vari;
        konteksti.fillRect(x,y,leveys,korkeus);
        if(reunat) {
            konteksti.strokeStyle='black';
            konteksti.lineWidth=1;
            konteksti.strokeRect(x,y,leveys,korkeus);
        }
    }



})();