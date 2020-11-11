var bgImg, plrImg, obs1, obs2, obs3, obs4;
var ob1, ob2, ob3, ob4;
var plr, bg, plrJump;
var ground;
var win, over;
var player, o1, o2, o3, o4;
var score;
var obstaclesGroup;

function preload() {

  bgImg = loadImage("images/bg1.jpg");
  plrImg = loadAnimation("images/p1.png", "images/p2.png");
  obs1 = loadImage("images/obstacle_1.png");
  obs2 = loadImage("images/obstacle_2.png");
  obs3 = loadImage("images/obstacle_3.png");
  obs4 = loadImage("images/obstacle_4.png");
  plrJump = loadImage("images/p2.png");

}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 90);

  plr = createSprite(200, 475, 50, 50);
  plr.addAnimation("pikachu", plrImg);
  plr.addAnimation("pikachuu", plrJump);
  plr.scale = 0.5;
  /*ob1 = createSprite(displayWidth + 40, 350, 50, 50);
  ob1.addImage(obs1);
  ob2 = createSprite(displayWidth + 60, 350, 50, 50);
  ob2.addImage(obs2);
  ob3 = createSprite(displayWidth + 200, 350, 50, 50);
  ob3.addImage(obs3);
  ob4 = createSprite(displayWidth + 200, 350, 50, 50);
  ob4.addImage(obs4);*/

  ground = createSprite(displayWidth/2, 523, displayWidth, 5);
  ground.visible = false;

  obstaclesGroup = new Group();

  score = 0;

  }

function draw() {
  background(bgImg);

  if(keyDown("up") && plr.y > 472) {
    plr.velocityY = -16;
    //plr.changeAnimation("pikachuu", plrJump);
  }

  /*if(plr.y > 473 && plr.y < 475) {
    plr.changeAnimation("pikachu", plrImg);
  }*/

  plr.velocityY = plr.velocityY + 0.4;

  plr.collide(ground);
  plr.setCollider("rectangle", 0, 0, plr.width, plr.height);
  //plr.debug = true;

  spawnObstacles();

  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 220 === 0) {
    var obstacle = createSprite(displayWidth + 40, 410,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obs1);
              break;
      case 2: obstacle.addImage(obs2);
              break;
      case 3: obstacle.addImage(obs3);
              break;
      case 4: obstacle.addImage(obs4);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.7;
    obstacle.lifetime = 500;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);

    plr.collide(obstacle);
  }
}

/*function reset(){
  gameState = PLAY;
  
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running", trex_running);
  
  score = 0;
  
}*/