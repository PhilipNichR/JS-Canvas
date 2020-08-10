'use strict';

(function () {
    let piirtoalusta;
    document.addEventListener('DOMContentLoaded', piirra);

    function piirra() {
        let canvas = document.getElementById('piirtoalusta');
        if (canvas.getContext) {
            let konteksti = canvas.getContext('2d');

            let gradient = konteksti.createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop("0.2", "skyblue");
            gradient.addColorStop("0.32", "lightgreen");
            gradient.addColorStop("0.56", "green");
            gradient.addColorStop("0.9", "green");

            // BACKGROUND
            konteksti.fillStyle = gradient;

            konteksti.fillRect(0, 0, 800, 800);

            // TEXT
            konteksti.fillStyle = 'red';
            konteksti.font = '35pt Serif';
            konteksti.fillText('par', 20, 70);


            // BOX
            konteksti.fillStyle = 'black';
            lippu(400, 35, 75);
            let xx = 50; //xx on lipun x positio
            for (let i = 0; i < 5; i++) {
                lippu(xx, 310, 75);
                xx = xx + 150;
            }

            function lippu(x, y, leveys) {

               
            }
            // BOX
            konteksti.beginPath();
            konteksti.fillStyle = 'yellow';
            konteksti.fillRect(400, 100, 30, 20);
            konteksti.fillRect = "red";
            konteksti.fill();
            // Pallo
            konteksti.beginPath();
            konteksti.arc(300, 300, 10, 0, 2 * Math.PI);
            konteksti.fill();
            konteksti.stroke();
            // MAILA
            konteksti.beginPath();
            konteksti.moveTo(170, 270);
            konteksti.lineTo(230, 330);
            konteksti.lineTo(270, 315);
            konteksti.lineTo(260, 305);
            konteksti.lineTo(235, 315);
            konteksti.lineTo(185, 265);
            konteksti.lineTo(170, 270);
            konteksti.fillStyle = 'red';
            konteksti.fill();
            konteksti.stroke();

            konteksti.beginPath();
            konteksti.moveTo(400, 200);
            konteksti.lineTo(400, 100);
            konteksti.strokeStyle = "red";
            konteksti.fillStyle = '##008002';
            konteksti.fill();
            konteksti.stroke();

            konteksti.save();
            konteksti.scale(2, 1);
            konteksti.beginPath();
            konteksti.arc(200, 200, 10, 0, 2 * Math.PI, false);
            konteksti.restore();
            konteksti.fillStyle="grey";
            konteksti.fill();
            konteksti.closePath();
            konteksti.stroke();
        
        }
    }

})();