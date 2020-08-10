'use strict';


(function (){

    let piirtoalusta;
    let konteksti;
    let z=0;
    let x=0;
    let y=0;
    let korkeus;
    let leveys;
    let vari='blue';

    let hiutaleet=[
        new Hiutale(250,45,5),
        new Hiutale(200,200,5),
        new Hiutale(380,260,6),
        new Hiutale(50,60,5),
        new Hiutale(130,100,5),
        new Hiutale(400,500,6),
        new Hiutale(530,160,5),
        new Hiutale(700,200,6),
        new Hiutale(160,70,5),
        new Hiutale(240,240,6),
        new Hiutale(580,320,5),
        new Hiutale(420,370,6),
        new Hiutale(130,100,5),
        new Hiutale(640,430,6),
        new Hiutale(830,30,5),
        new Hiutale(900,80,6),
        new Hiutale(970,400,5),
        new Hiutale(100,500,6),
        new Hiutale(30,200,5),
        new Hiutale(300,130,6),
        new Hiutale(300,430,6),
        new Hiutale(800,300,5),
        new Hiutale(170,370,6),
    ];

  document.addEventListener('DOMContentLoaded', alusta);

    function alusta(){
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        korkeus = piirtoalusta.height;
        leveys = piirtoalusta.width;
        z=0;
        setInterval(piirra, 600);
     /* 
*/

        function piirra(){
            konteksti.fillStyle=vari;
            konteksti.fillRect(x,y,leveys,korkeus);

            for(let hiutale of hiutaleet){
                hiutale.y+=10;
                if (hiutale.y>korkeus){
                    hiutale.y=0;
                }
                hiutale.piirra(konteksti);
            }

            pallot(z);
            z+=10;
        }
    }




})();