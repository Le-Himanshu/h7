var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
// load the images

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){



  // creating canvas

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 // conecting the firebase

  database = firebase.database();
 
 // create a game object 
  game = new Game();
 // read the gamestate
  game.getState();
  // create the form and take thedetails of player

  game.start();
}


function draw(){
      // if 4 player entre the game change the gamestate to 1 
  if(playerCount === 4){
    game.update(1);
  }
   // to start the game and show all the cars 
  if(gameState === 1){
    clear();
    game.play();
  }
 // display in console game eneded
  if(gameState === 2){
    game.end();
  }
}
