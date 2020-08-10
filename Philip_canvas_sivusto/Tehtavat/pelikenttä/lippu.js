'use strict';

(function() {
    let piirtoalusta;
    document.addEventListener('DOMContentLoaded', piirra);
    function piirra() {
        let canvas = document.getElementById('piirtoalusta');
        if (canvas.getContext) {
          let konteksti = canvas.getContext('2d');
      
          let gradient = konteksti.createLinearGradient(0, 0, 0, 600);
              gradient.addColorStop("0.2", "skyblue");
              gradient.addColorStop("0.32" ,"lightgray");
              gradient.addColorStop("0.56" ,"darkgray");
              gradient.addColorStop("0.9", "white");
      
          // BACKGROUND
              konteksti.fillStyle= gradient;
      
              konteksti.fillRect(0,0,800,800);

          // TEXT
            konteksti.fillStyle='red';
            konteksti.font='35pt Serif';
            konteksti.fillText('Hyvä Suomi!!', 20, 70);

        //Sike text

        konteksti.fillStyle='red';
        konteksti.font='35pt Serif';
        konteksti.fillText('SIKE!!', 550, 500);
          
          // BOX
            konteksti.fillStyle='black';
        lippu(400,35,75);
        let xx=50; //xx on lipun x positio
        for(let i=0;i<5;i++) {
            lippu(xx,310,75);
            xx=xx+150;
        }

            function lippu(x,y,leveys){
      
                let yksikko=leveys/18;
      
                konteksti.fillStyle='white';
                            // x,y,lev,kork
            konteksti.fillRect(x,y,leveys,11*yksikko);
      
            konteksti.fillStyle='rgb(0,47,108)';
            konteksti.fillRect(x,y+4.12*yksikko,leveys,3*yksikko);
            konteksti.fillRect(x+5*yksikko,y,3*yksikko,11*yksikko);
            konteksti.strokeRect(x,y,leveys,11*yksikko);
            }
            // BOX
            konteksti.fillStyle='black';
            konteksti.strokeRect(310,100,80,55);
            // KIEKKO
            konteksti.arc(275,200,10,0,2*Math.PI);
            konteksti.fill();
            konteksti.stroke();
            // MAILA
            konteksti.beginPath();
            konteksti.moveTo(150,160);
            konteksti.lineTo(210,220);
            konteksti.lineTo(250,205);
            konteksti.lineTo(240,195);
            konteksti.lineTo(215,205);
            konteksti.lineTo(165,155);
            konteksti.lineTo(150,160);
            konteksti.fillStyle='red';
            konteksti.fill();
            konteksti.stroke(); 
          
      } 
      }
   
})();