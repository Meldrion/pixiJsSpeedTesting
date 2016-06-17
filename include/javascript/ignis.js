/**
 * Created by fabien on 17.06.16.
 */
'use strict';

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);
stage.interactive = true;

stage.on('mousedown', clickEvent);
stage.on('touchstart', clickEvent);
stage.on("mousemove",moveEvent);


// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(window.innerWidth, getCanvasHeight(),{antialias: false, transparent: false});

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame(animate);
// create a texture from an image path
var texture01 = PIXI.Texture.fromImage("resource/image/tile01.png");
var texture02 = PIXI.Texture.fromImage("resource/image/tile02.png");
var texture03 = PIXI.Texture.fromImage("resource/image/tile03.png");

var texture04 = PIXI.Texture.fromImage("resource/image/cave.png");

var tile4 = new PIXI.Sprite(texture04);

var mousePosition;
var cellSize = 32;


var stats = new Stats();
//document.body.appendChild( stats.domElement );

stats.domElement.style.position = "absolute";
stats.domElement.style.top = "0px";

tile4.anchor.x = 0.5;
tile4.anchor.y = 0.5;
tile4.position.x = 500;
tile4.position.y = 500;

// Initialize the pixi Graphics class
var cursor = new PIXI.Graphics();
// Set the fill color
cursor.beginFill(0xe74c3c); // Red
cursor.drawRect(0,0,32,32);
cursor.endFill();
cursor.alpha = 0.75;
buildTileMap();


function animate() {

    stats.begin();
    requestAnimationFrame(animate);
    /*
     // just for fun, lets rotate mr rabbit a little
     tileset.rotation += 0.1;
     */

    if (tile4 != null) {
        tile4.rotation += 0.1;
    }


    // render the stage
    renderer.render(stage);
    stats.end();
}

/**
 * Build the Tilemap
 */
function buildTileMap() {

    stage.removeChildren(0, stage.children.length);

    cursor.width = cellSize;
    cursor.height = cellSize;

    var w = window.innerWidth;
    var h = getCanvasHeight();

    var maxX = w / cellSize;
    var maxY = h / cellSize;

    for (var i = 0; i < maxX; i++) {
        for (var j = 0; j < maxY; j++) {

            var tile = new PIXI.Sprite(texture01);

            tile.anchor.x = 0;
            tile.anchor.y = 0;
            tile.position.x = cellSize * i;
            tile.position.y = cellSize * j;
            tile.width = cellSize;
            tile.height = cellSize;
            tile.tint = 0x999999;

            var tile2 = new PIXI.Sprite(texture02);

            tile2.anchor.x = 0;
            tile2.anchor.y = 0;
            tile2.position.x = cellSize * i;
            tile2.position.y = cellSize * j;
            tile2.width = cellSize;
            tile2.height = cellSize;

            var tile3 = new PIXI.Sprite(texture03);

            tile3.anchor.x = 0;
            tile3.anchor.y = 0;
            tile3.position.x = cellSize * i;
            tile3.position.y = cellSize * j;
            tile3.width = cellSize;
            tile3.height = cellSize;
            tile3.alpha = 0.5;

            stage.addChild(tile);
            stage.addChild(tile2);
            stage.addChild(tile3);

        }
    }

    //stage.addChild(tile4);
    stage.addChild(cursor);
}

window.onresize = function (event){
    var w = window.innerWidth;
    var h = getCanvasHeight();

    //this part resizes the canvas but keeps ratio the same
    renderer.view.style.width = w + "px";
    renderer.view.style.height = h + "px";

    //this part adjusts the ratio:
    renderer.resize(w,h);
    buildTileMap();
}

function clickEvent(event) {
    console.log("Mouse Click @ {X:" + mousePosition.x + " Y:" + mousePosition.y +"}");
}

function moveEvent(event) {
    mousePosition = event.data.global;

    var posX = Math.floor(mousePosition.x / cellSize) * cellSize;
    var posY = Math.floor(mousePosition.y / cellSize) * cellSize;

    if (posX != cursor.x || posY != cursor.y) {
        cursor.x = posX;
        cursor.y = posY;
    }
}

function getCanvasWidth() {
    return 0;
}

function getCanvasHeight() {
    return window.innerHeight - 32; //- $("#toolbar").height;
}