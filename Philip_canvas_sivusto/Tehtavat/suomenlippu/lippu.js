'use strict';

function draw(){

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0, suhde(18), suhde(11));
    ctx.fillStyle = '#002F6C';
    ctx.fillRect(suhde(5), 0, suhde(3), suhde(11));
    ctx.fillRect(0, suhde(4), suhde(18), suhde(3));
}

function suhde(num)
{
    return canvas.width*num/18;
}