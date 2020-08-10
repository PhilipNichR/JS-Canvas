'use strict';

let piirtoalusta;
let konteksti;
let maxpallot=8;
let hp=0;

document.addEventListener('DOMContentLoaded', alusta);

function alusta(){
    piirtoalusta = document.getElementById('piirtoalusta');
    konteksti = piirtoalusta.getContext('2d'); 
    let x=45;
    hp=0;
    for (let i=0; i<hp; i++){
        piirraPallo(konteksti, x,200, 'green', 'lightgreen', 'lightgreen');
        x+=85;
    }
    for (let i=0; i<maxpallot-hp; i++){
        piirraPallo(konteksti, x,200, 'grey', 'lightgrey', 'lightgrey');
        x+=85;
    }  
}

function LisaaPallo(){
    let x=45;
    hp+=1;
    hp=Math.min(hp,maxpallot);
    for (let i=0; i<hp; i++){
        piirraPallo(konteksti, x,200, 'green', 'lightgreen', 'lightgreen');
        x+=85;
    }
    for (let i=0; i<maxpallot-hp; i++){
        piirraPallo(konteksti, x,200, 'grey', 'lightgrey', 'lightgrey');
        x+=85;
    }  
}

function PoistaPallo(){
    let x=45;
    hp-=1;
    hp=Math.max(hp,0);
    for (let i=0; i<hp; i++){
        piirraPallo(konteksti, x,200, 'green', 'lightgreen', 'lightgreen');
        x+=85;
    }
    for (let i=0; i<maxpallot-hp; i++){
        piirraPallo(konteksti, x,200, 'grey', 'lightgrey', 'lightgrey');
        x+=85;
    }  
}

function piirraPallo(konteksti, x, y, vari1, vari2, vari3) {
    let taustavari=konteksti.createRadialGradient(x,y,70,x-50,200,10);
    taustavari.addColorStop(1.0, vari1);
    taustavari.addColorStop(0.9, vari2);
    taustavari.addColorStop(0.7, vari3);
    konteksti.beginPath();
    
    konteksti.fillStyle=taustavari;
                    //x   y   r alkukulma kierto rad
    konteksti.arc(x,y,40, 0, 2*Math.PI);
    konteksti.fill();
    konteksti.beginPath();

}