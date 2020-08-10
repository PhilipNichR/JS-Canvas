'use strict';
class Nappaimisto {
getToiminto(nappainkoodi) {
return this[nappainkoodi] || TOIMINTO.TYHJA;
}
lisaaNappain(nappainkoodi, toiminto) {
this[nappainkoodi] = toiminto;
}
poistaNappain(nappainkoodi) {
delete this[nappainkoodi];
}
}