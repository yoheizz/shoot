// 定数関係
const CANVAS_W = 400;
const CANVAS_H = 400;

const GAME_S = 1000/60;
const BOX_M =100;

// canvas系
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = CANVAS_W;
canvas.height = CANVAS_H;

// 関数関係
const rand=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
};

// クラス関係
class Box{
    constructor(){
        this.size = 2;
        this.x = rand(0,CANVAS_W);
        this.y = rand(0,CANVAS_H);
        this.vx = 0.1;
        this.vy = 1;
    };
    drow(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x,this.y,this.size,this.size);
    };
    update(){
        if (this.x>CANVAS_W) {
            this.x = 0;
        }else{
            this.x += this.vx;
        };
        
        if (this.y>CANVAS_H) {
            this.y = 0;
        } else {
            this.y += this.vy;            
        };
    };
};

class player{
    constructor(){
        this.size = 20;
        this.x = CANVAS_W/2 - this.size/2;
        this.y = CANVAS_H - this.size*2;
        this.vx = 0.04;
        this.vy = 0;
        this.speed = 10
    };
    drow(){
        ctx.strokeStyle = "red";
        ctx.lineWidth = "5";
        ctx.strokeRect(this.x,this.y,this.size,this.size);
        ctx.fillStyle = "white";
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    update(){
        const LB = document.getElementById('Left');
        const RB = document.getElementById('Right');

        LB.addEventListener('mousedown', () => {
            Player.x -= Player.vx;
        });

        RB.addEventListener('mousedown', () => {
            Player.x += Player.vx;
        });

    };
};
//new
const box = [];
for(let i=0;i<BOX_M;i++)box[i] = new Box();
const Player = new player()


// メイン処理
const loop=()=> {
    // 移動
    for(let i=0;i<BOX_M;i++)box[i].update(); 
    Player.update();
   
    //固定
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,CANVAS_W,CANVAS_H);
    for(let i=0;i<BOX_M;i++)box[i].drow();
    Player.drow();

    requestAnimationFrame(loop);
};

//関数呼び出し
window.onload=()=>{
    // setInterval(loop,GAME_S);
    requestAnimationFrame(loop);
};