// 定数関係
const CANVAS_W = 400;
const CANVAS_H = 400;
const FLAME = 1000/60;
const BOX_M =100;

// canvas系
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = CANVAS_W;
canvas.height = CANVAS_H;
ctx.fillStyle = "black";
ctx.fillRect(0,0,CANVAS_W,CANVAS_H);

// 関数関係
const rand=(min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
}

// クラス関係
class Box{
    constructor(){
        this.size =2;
        this.x = rand(0,CANVAS_W);
        this.y = rand(0,CANVAS_H);
        this.vx = 10;
        this.vy = 10;
    }
    drow(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
    }
};

const box = [];
for(let i=0;i<BOX_M;i++)box[i] = new Box();
for(let i=0;i<BOX_M;i++)box[i].drow();

const Main =() => {
    
}