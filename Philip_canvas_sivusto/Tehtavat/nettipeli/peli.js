'use strict';

(function(){
    let tilataulu;
    const tyylit=['pata','hertta','ruutu','risti','kukka','naama'];
    const kuvataulu=[1,0,4,2,3,5,1,2,3,5,5];

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        console.log('segsgg');
        tilataulu=new Array(kuvataulu.length).fill(true);
        const painikkeet=document.getElementById('painikkeet');

        for(let i=0; i<tilataulu.length; i++) {
            const td=document.createElement('td');
            td.addEventListener('click', e=>paivitaTila(e.target,i));
            paivitaTila(td, i);
            painikkeet.appendChild(td);
        }
    }
    function paivitaTila(elementti, ind) {
        tilataulu[ind]= !tilataulu[ind];
        if(tilataulu[ind]) {
            elementti.setAttribute('class',tyylit[kuvataulu[ind]]);
        }
        else{
            elementti.setAttribute('class','tausta');
        }
    }
})();