'use strict';

(function() {

    let piirtoalusta;
    let konteksti;

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
       piirtoalusta = document.getElementById('piirtoalusta');
       konteksti = piirtoalusta.getContext('2d');

       piirra();
    }

    function piirra() {
        konteksti.fillStyle="black";
        konteksti.font = "100px Serif";


        var teksti="9999",
        tekstiLeveys = konteksti.measureText(teksti).width;

        konteksti.fillText(teksti, (piirtoalusta.width / 2) - (tekstiLeveys / 1.7),((piirtoalusta.height-130) / 2)+90 );
    }


})();