var worldHeight = 10;
var worldWidth = 10;
var tileWidth = 32;

var world = [[]];

var pathStart = [0,0];
var pathEnd = [worldWidth,worldHeight];
var Path = [];

var canvas;
var canvasContext;

function onload(){
    console.log("document loaded");
    canvas = document.getElementById("game");
    canvas.height = worldHeight * tileWidth;
    canvas.height = worldWidth * tileWidth;
    canvas.addEventListener("click", canvasClick, false);
    canvasContext = canvas.getContext("2d");
    createWorld();
}

function createWorld(){
    console.log("Loading world");
    for(x=0;x<worldWidth;x++){
        world[x] = []
        for(y=0;y<worldHeight;y++){
            Math.random() > 0.8 ? world[x][y] = 1 : world[x][y] = 0;
        }
    }
    redraw();
}

function redraw(){
    console.log("Rendering world")
    for(x=0;x<worldWidth;x++)
    {
        for(y=0;y<worldHeight;y++)
        {
            switch(world[x][y])
            {
                case 1 :
                    canvasContext.fillStyle = "#000000";
                    break;
                case 0 :
                    canvasContext.fillStyle = "#AAAAAA";
                    break;
            }
            canvasContext.fillRect(x*tileWidth,y*tileWidth,tileWidth,tileWidth);
        }
    }
}

onload();

function canvasClick(e){
    var x;
    var y;

    if(e.pageX != undefined && e.pageY != undefined){
        x = e.pageX;
        y = e.pageY;
    }
    else{
        x = e.clientX + document.body.scrollLeft+document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop+document.documentElement.scrollTop;
    }

    x-=canvas.offsetLeft;
    y-=canvas.offsetTop;

    var cell = [Math.floor(x/tileWidth),Math.floor(y/tileWidth)];

    console.log("Clicked on cell["+cell[0]+";"+cell[1]+"]");

    pathStart = pathEnd;
    pathEnd = cell;
    
}

function findPath()
{
    
}

//Math functions

function manhattanDist(c1, c2)
{
    Math.abs(c1[0]-c2[0])+Math.abs(c1[1]-c2[1]);
}

function euclidianDist(c1, c2)
{
    return Math.sqrt(Math.pow(c1[0]-c2[0],2)+(Math.pow(c1[1]-c2[1],2)));
}