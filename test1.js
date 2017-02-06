var worldHeight = 10;
var worldWidth = 10;
var tileWidth = 32;

var World = [[]];

var pathStart = [0,0];
var pathEnd = [worldWidth,worldHeight];
var Path = [];

var canvas;
var canvasContext;

document.onload() = function(){
    canvas = document.getElementById("game");
    canvas.height = worldHeight * tileWidth;
    canvas.height = worldWidth * tileWidth;
    canvasContext = canvas.getContext("2d");
    createWorld();
}

function createWorld(){
    for(x=0;x<worldWidth;x++){
        world[x] = []
        for(j=0;j<worldHeight;j++){
            Math.random() > 0.8 ? world[x][y] = 1 : world[x][y] = 0;
        }
    }
    redraw();
}

function redraw(){
    for(x=0;x<worldWidth;x++){
        world[x] = []
        for(j=0;j<worldHeight;j++){
            switch(world[x][y]){
                case 1 :
                canvasContext.fillStyle = "#000000";
                break;
                case 0 :
                canvasContext.fillStyle = "#AAAAAA";
                break;
                //hello
            }
            canvasContext.fillRect(x*tileWidth,y*tileWidth,tileWidth,tileWidth);
        }
    }
}