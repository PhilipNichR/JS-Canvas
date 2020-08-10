'use strict';

(function() {

  let piirtoalusta;
  let konteksti;

  document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {

        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');

        //noppa 1
        konteksti.beginPath();
        piirra(40,50,120,120, 'green', true);
        konteksti.fillStyle='blue';
        konteksti.arc(98, 110, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        //noppa 2
        konteksti.beginPath();
        piirra(200, 50, 120, 120, 'red', true);
        konteksti.fillStyle='purple';
        konteksti.arc(235, 80, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(280, 140, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        //noppa 3
        konteksti.beginPath();
        piirra(360, 50, 120, 120, 'white', true);
        konteksti.fillStyle='red';
        konteksti.arc(390, 78, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(421, 113, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(453, 148, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        //noppa 4
        konteksti.beginPath();
        piirra(520, 50, 120, 120, 'gold', true);
        konteksti.fillStyle='darkred';
        konteksti.arc(550, 82, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(550, 140, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(610, 140, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(610, 82, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        //noppa 5
        konteksti.beginPath();
        piirra(120, 200, 120, 120, 'skyblue', true);
        konteksti.fillStyle='green';
        konteksti.arc(150, 230, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(208, 230, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(209, 290, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(151, 290, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(180, 260, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

        //noppa 6
        konteksti.beginPath();
        piirra(445, 200, 120, 120, 'purple', true);
        konteksti.fillStyle='pink';
        konteksti.arc(485, 230, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(485, 260, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(485, 290, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(525, 230, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(525, 260, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.beginPath();
        konteksti.arc(525, 290, 7, 0, 2 * Math.PI);
        konteksti.fill();
        konteksti.stroke();

    }

    function piirra(x,y,leveys,korkeus,vari){
        konteksti.fillStyle=vari;
        konteksti.fillRect(x,y,leveys,korkeus);
    }
})();
