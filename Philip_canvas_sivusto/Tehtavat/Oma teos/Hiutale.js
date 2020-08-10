class Hiutale {
    constructor(x, y, r, vari='White'){
        this.x=x;
        this.y=y;
        this.r=r;
        this.vari=vari;
    }

    piirra(konteksti){
        konteksti.save();
        konteksti.fillStyle=this.vari;
        konteksti.beginPath();
        konteksti.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        konteksti.fill();
        konteksti.stroke();
        konteksti.restore();
    }
}