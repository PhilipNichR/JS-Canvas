'use strict';

document.addEventListener('DOMContentLoaded', start);
//Pelin käyttämät muuttujat.
let dealerC = 0;
let playerC = 0;
let dealerS = 0;
let dealerSV = 0;
let playerS = 0;
let cardL = 0;
let cardM = 0;
let gameon = false;
let done = false;
let vuoro = 0;
let bet = 0;
let money = 100;
let betted = 0;
let betbut;
let inbut;
let see=true;
let bgm = new Audio('bg.mp3');


function start() { //Ladataan pelin tiedot.
    document.getElementById('playersc').textContent = playerC;
    document.getElementById('playerscr').textContent = playerS;
    document.getElementById('dealersc').textContent = dealerC;
    document.getElementById('dealerscr').textContent = dealerSV;
    document.getElementById('praha').textContent = money + "€";
    document.getElementById('bett').textContent = bet + "€";
     betbut = document.getElementById('buttonX');
     inbut = document.getElementById('text2');
     
}

function CARDID() { //Luodaan uusi kortti ja otetaan talteen sen arvo
    cardL = Math.ceil(Math.random() * 13);
    cardM = Math.ceil(Math.random() * 4);
    console.log(vuoro, playerS, dealerS, cardL);
    if (vuoro === 0) {
        if(cardL<10) {
        playerS = playerS + cardL;
        } else if(cardL>9 && cardL<13) {
            playerS = playerS+10;
        } else if(playerS+11<22) {
            playerS=playerS+11;
        } else if(playerS+11>22) {
            playerS=playerS+1;
        }
    }
    if (vuoro === 1) {
        if(cardL<10) {
            dealerS = dealerS + cardL;
            if(dealerSV===0) {
                dealerSV=dealerS
            }
            } else if(cardL>10 && cardL<13) {
                dealerS = dealerS+10;
                if(dealerSV===0) {
                    dealerSV=dealerS
                }
            } else if(dealerS+11<22) {
                dealerS=dealerS+11;
                if(dealerSV===0) {
                    dealerSV=dealerS
                }
            } else if(dealerS+11>22) {
                dealerS=dealerS+1;
                if(dealerSV===0) {
                    dealerSV=dealerS
                }
            }
    }
    switch (cardM) {
        case 1:
            cardM = '♢';
            break;
        case 2:
            cardM = '♠';
            break;
        case 3:
            cardM = '♣';
            break;
        case 4:
            cardM = '♡';
            break;
    }
    switch (cardL) {
        case 10:
            cardL = 'Jack';
            break;
        case 11:
            cardL = 'Queen';
             break;
        case 12:
            cardL = 'King';
            break;
        case 13:
            cardL = 'Ace';
            break;
    }
    return cardM + cardL;
}

function ADDSCORE() { //Aloitetaan peli jakamalla ensimmäiset kortit.
    bgm.loop=true;
    bgm.play();
    document.getElementById('pel').style.opacity=1;
    document.getElementById('dil').style.opacity=1;
    if (!money < 1 || !bet < 1) {

        if (playerC < 2) {
            for (let x = 0; x < 2; x++) {
                let kortti = document.createElement("td");
                kortti.classList.add('pelaaja');
                document.getElementById("kortti").appendChild(kortti);
                vuoro = 0;
                kortti.textContent = CARDID();
                let kortti2 = document.createElement("td");
                if(dealerC>0) {
                kortti2.classList.add('enemy');
                } dealerC++;
                kortti2.style.position='relative';
                kortti2.style.top='80px';
                document.getElementById("dkortti").appendChild(kortti2);
                vuoro = 1;
                kortti2.textContent = CARDID();
            }
            playerC++;
            playerC++;
            gameon = true;
            console.log(dealerS);
            document.getElementById('playersc').textContent = playerC;
            document.getElementById('playerscr').textContent = playerS;
            document.getElementById('dealersc').textContent = dealerC;
            document.getElementById('dealerscr').textContent = dealerSV;
            document.getElementById('praha').textContent = money + "€";
        }

    }
}

function HIT() { //Lisätään kortti
    if (gameon) {
        if (!money < 1 || !bet < 1)
            if (playerS < 21) {
                let kortti = document.createElement("td");
                document.getElementById("kortti").appendChild(kortti);
                vuoro = 0;
                kortti.textContent = CARDID();
                playerC++;
                document.getElementById('playersc').textContent = playerC;
                document.getElementById('playerscr').textContent = playerS;
                if (playerS > 21) {
                    document.getElementById('playerscr').textContent = "BUST!";
                    document.getElementById('winner').textContent = "DIILAAJA VOITTI!";
                    bet = 0;
                    document.getElementById('praha').textContent = money + "€";
                    document.getElementById('bett').textContent = bet + "€";
                    done = true;
                }
            }
    }
}

function STAY() { //Verrataan pisteitä, kuka voitti.
    if (gameon) {
        if (!money < 1 || !bet < 1) {
            if (dealerS < 17) {
                if (dealerS < 17) {
                    while(dealerS < playerS) {
                    dealerC++;
                    let kortti2 = document.createElement("td");
                    kortti2.classList.add('enemy');
                    document.getElementById("dkortti").appendChild(kortti2);
                    vuoro = 1;
                    kortti2.textContent = CARDID();
                    document.getElementById('dealersc').textContent = dealerC;
                }
            }
            }
            if (dealerS > 21) {
                document.getElementById('dealerscr').textContent = "BUST!";
                document.getElementById('winner').textContent = "PELAAJA VOITTI!";
                bet = bet * 2;
                money = money + bet;
                bet = 0;
                document.getElementById('praha').textContent = money + "€";
                document.getElementById('bett').textContent = bet + "€";
                done = true;

            } else if (dealerS > playerS) {
                document.getElementById('winner').textContent = "DIILAAJA VOITTI!";
                bet = 0;
                document.getElementById('praha').textContent = money + "€";
                document.getElementById('bett').textContent = bet + "€";
                done = true;
            } else if (playerS > dealerS) {
                document.getElementById('winner').textContent = "PELAAJA VOITTI!";
                bet = bet * 2;
                money = money + bet;
                bet = 0;
                document.getElementById('praha').textContent = money + "€";
                document.getElementById('bett').textContent = bet + "€";
                done = true;
            } else if (playerS === dealerS) {
                document.getElementById('winner').textContent = "TASAPELI!";
                money = money + bet;
                bet = 0;
                document.getElementById('praha').textContent = money + "€";
                document.getElementById('bett').textContent = bet + "€";
                done = true;
            }
        }
    }
}

function BET() { //Panoksen lisääminen
    if (!gameon) {
        if (!money < 1 || !bet < 1) {
            bet = bet+ +inbut.value;
            betted = inbut.value;
            console.log(inbut.textContent);
            }
            if(betted<=money) {
                money = money - betted;
                document.getElementById('praha').textContent = money + "€";
                document.getElementById('bett').textContent = bet + "€";
                document.getElementById('q1').textContent = ""
            } else {
                bet = bet-betted;
                document.getElementById('q1').textContent = "Veto ei voi ylittää rahaa!"
            }
        }
    }

function REPEAT() { //Resetoi kaiken paitsi rahan.
    if (gameon && done) {
        let dealerC2 = dealerC;
        let playerC2 = playerC;
        dealerC = 0;
        playerC = 0;
        dealerS = 0;
        playerS = 0;
        gameon = false;
        done = false;
        document.getElementById('winner').textContent = ' ';
        document.getElementById('playersc').textContent = playerC;
        document.getElementById('playerscr').textContent = playerS;
        document.getElementById('dealersc').textContent = dealerC;
        document.getElementById('dealerscr').textContent = dealerS;
        document.getElementById('praha').textContent = money + "€";
        document.getElementById('bett').textContent = bet + "€";
        for (let i = 0; i < playerC2; i++) {
            document.getElementById('kortti').removeChild(document.getElementById('kortti').lastChild);
        }
        for (let z = 0; z < dealerC2; z++) {
            document.getElementById('dkortti').removeChild(document.getElementById('dkortti').lastChild);
        }

    }
}