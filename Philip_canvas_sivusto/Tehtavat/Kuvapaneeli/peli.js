'use strict';

(function(){
    let kuvienNimet=['kuva1.png', 'kuva2.png', 'kuva3.png'];
    let kuvataulukko;
    let piirtoalusta;
    let konteksti;

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        piirtoalusta=document.getElementById('piirtoalusta');
        konteksti=piirtoalusta.getContext('2d');

        Promise.all(kuvienNimet.map(async nimi=>lataaKuva(nimi)))
            .then(kuvat=>aloita(kuvat))
           // .catch(viesti=>alert(viesti));
           .catch(viesti=>virheilmoitus(viesti));
    }

    function virheilmoitus(viesti) {
        konteksti.fillStyle='orange';
        konteksti.fillRect(0,0,piirtoalusta.width,piirtoalusta.height);
        konteksti.fillStyle='red';
        konteksti.font='20pt Papyrus';
        konteksti.fillText(viesti, 10, 100);
        
    }

    function aloita(kuvat) {
        kuvataulukko=kuvat;
        konteksti.clearRect(0,0,piirtoalusta.width, piirtoalusta.height);
        let x=0;
        for(let kuva of kuvataulukko) {
            konteksti.drawImage(kuva, x,0);
            x+=kuva.width+10;
        }
    }

    async function lataaKuva(polku){
        return new Promise((resolve,reject)=>{
            let kuva=new Image();
            kuva.src=polku;
            kuva.addEventListener('load', ()=>resolve(kuva));
            kuva.addEventListener('error', ()=>reject(`virhe ${polku} lataamisessa`));
        });
    }

})();