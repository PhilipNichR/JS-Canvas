'use strict';

(function(){
    document.addEventListener('DOMContentLoaded', alusta);

    function alusta(){
        const piirtoalusta=document.getElementById('piirtoalusta');
        const konteksti=piirtoalusta.getContext('2d');
        let taustavari;

        taustavari=konteksti.createRadialGradient(250,200,200,200,200,50);
        taustavari.addColorStop(1.0, 'green');
        taustavari.addColorStop(0.9, 'lightgreen');
        taustavari.addColorStop(0.7, 'lightgreen');

        
        konteksti.fillStyle=taustavari;
                        //x   y   r alkukulma kierto rad
        konteksti.arc(250,200,90, 0, 2*Math.PI);
        konteksti.fill();
        konteksti.beginPath();
        konteksti.fillStyle='rgba(45,45,200,0.5)';

    }

})();