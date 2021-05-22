var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11, wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33, wall34,wall35,wall36,wall37,wall38,wall39,wall40;

var bg,bg_Image;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11, coin12,coin13,coin14,coin15,coin16,coin17,coin18,coin19,coin20, coin21,coin_Image;

var girl,girl_Image;
var robot1,robot2,robot3,robot4,robot5,robot6,robot7,robot_Image, robotGroup1, robotGroup2,robotGroup3,robotGroup4;

var gameOver,gameOver_Image;
var restart,restart_Image;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var score = 0;

function preload() {
  bg_Image = loadImage("BG.png");
  girl_Image = loadAnimation("bunny1.png","bunny2.png");
  
  robot_Image = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png", "7.png","8.png");
  
  coin_Image = loadAnimation("coin/1.png","coin/2.png","coin/3.png","coin/4.png", "coin/5.png","coin/6.png");
  
  gameOver_Image = loadImage("game over.png");
  restart_Image = loadImage("reset.png");
}

function setup() {
  
  createCanvas(600,600);
  
  bg = createSprite(300,300);
  bg.addImage(bg_Image);
  bg.scale = 6.5;
  
  girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
  
  wall1 = createSprite(150,25,15,90);
  wall1.shapeColor = "darkOrange";
  
  wall2 = createSprite(43,130,85,15);
  wall2.shapeColor = "darkOrange";
  
  wall3 = createSprite(250,120,15,90);
  wall3.shapeColor = "darkOrange";
  
  wall4 = createSprite(318,70,150,15);
  wall4.shapeColor = "darkOrange";
  
  wall5 = createSprite(140,200,85,15);
  wall5.shapeColor = "darkOrange";
  
  wall6 = createSprite(185,223,15,100);
  wall6.shapeColor = "darkOrange";
  
  wall7 = createSprite(240,280,125,15);
  wall7.shapeColor = "darkOrange";
  
  wall8 = createSprite(300,323,15,100);
  wall8.shapeColor = "darkOrange";
  
  wall9 = createSprite(61,360,120,15);
  wall9.shapeColor = "darkOrange";
  
  wall10 = createSprite(81,320,15,90);
  wall10.shapeColor = "darkOrange";
  
  wall11 = createSprite(300,250,15,90);
  wall11.shapeColor = "darkOrange";
  
  wall12 = createSprite(400,113,15,100);
  wall12.shapeColor = "darkOrange";
  
  wall13 = createSprite(457,70,100,15);
  wall13.shapeColor = "darkOrange";
  
  wall14 = createSprite(400,70,100,15);
  wall14.shapeColor = "darkOrange";
  
  wall15 = createSprite(400,20,15,90);
  wall15.shapeColor = "darkOrange";
  
  wall16 = createSprite(387,260,160,15);
  wall16.shapeColor = "darkOrange";
  
  wall17 = createSprite(460,215,15,100);
  wall17.shapeColor = "darkOrange";
  
  wall18 = createSprite(387,260,160,15);
  wall18.shapeColor = "darkOrange";
   
  wall19 = createSprite(5,220,90,15);
  wall19.shapeColor = "darkOrange";
  
  wall20 = createSprite(387,260,160,15);
  wall20.shapeColor = "darkOrange";
  
  wall21 = createSprite(550,330,100,15);
  wall21.shapeColor = "darkOrange";
  
  wall22 = createSprite(387,260,160,15);
  wall22.shapeColor = "darkOrange";
  
  wall23 = createSprite(530,500,160,15);
  wall23.shapeColor = "darkOrange";
  
  wall24 = createSprite(595,557,15,100);
  wall24.shapeColor = "RED";
  
  wall25 = createSprite(80,500,160,15);
  wall25.shapeColor = "darkOrange";
  
  wall26 = createSprite(250,580,15,70);
  wall26.shapeColor = "darkOrange";
  
  wall27 = createSprite(349,325,90,15);
  wall27.shapeColor = "darkOrange";
  
  wall28 = createSprite(155,472,15,70);
  wall28.shapeColor = "darkOrange";
  
  wall29 = createSprite(198,440,100,15);
  wall29.shapeColor = "darkOrange";
  
  wall30 = createSprite(493,372,15,100);
  wall30.shapeColor = "darkOrange";
  
  wall31 = createSprite(386,380,15,100);
  wall31.shapeColor = "darkOrange";
  
  wall32 = createSprite(475,370,50,15);
  wall32.shapeColor = "darkOrange";
  
  wall33 = createSprite(570,250,70,15);
  wall33.shapeColor = "darkOrange";
  
  wall34 = createSprite(570,400,60,15);
  wall34.shapeColor = "darkOrange";
  
  wall35 = createSprite(135,500,88,15);
  wall35.shapeColor = "darkOrange";
  
  wall36 = createSprite(293,550,100,15);
  wall36.shapeColor = "darkOrange";
  
  wall37 = createSprite(340,528,15,60);
  wall37.shapeColor = "darkOrange";
  
  wall38 = createSprite(245,345,100,15);
  wall38.shapeColor = "darkOrange";
  
   wall39 = createSprite(528,160,150,15);
  wall39.shapeColor = "darkOrange";
  
  wall40 = createSprite(295,145,80,15);
  wall40.shapeColor = "darkOrange";
  
  robot1 = createSprite(100,476);
  robot1.addAnimation("robot",robot_Image);
  robot1.scale = 0.5;
  
  robot2 = createSprite(340,236);
  robot2.addAnimation("robot",robot_Image);
  robot2.scale = 0.5;
  
  robot3 = createSprite(100,576);
  robot3.addAnimation("robot",robot_Image);
  robot3.scale = 0.5;
  robotGroup1 = new Group();
   robotGroup2 = new Group();
  robotGroup3 = new Group();
  robotGroup4 = new Group();
  
  coin1 = createSprite(300,45);
  coin1.addAnimation("coin",coin_Image);
  coin1.scale = 0.2;
  
  coin2 = createSprite(340,45);
  coin2.addAnimation("coin",coin_Image);
  coin2.scale = 0.2;
  
  coin3 = createSprite(430,45);
  coin3.addAnimation("coin",coin_Image);
  coin3.scale = 0.2;
  
  coin4 = createSprite(470,45);
  coin4.addAnimation("coin",coin_Image);
  coin4.scale = 0.2;
  
  coin5 = createSprite(470,136);
  coin5.addAnimation("coin",coin_Image);
  coin5.scale = 0.2;
  
  coin6 = createSprite(510,136);
  coin6.addAnimation("coin",coin_Image);
  coin6.scale = 0.2;
  
  coin7 = createSprite(390,236);
  coin7.addAnimation("coin",coin_Image);
  coin7.scale = 0.2;
  
  coin8 = createSprite(40,336);
  coin8.addAnimation("coin",coin_Image);
  coin8.scale = 0.2;
  
  coin9 = createSprite(25,196);
  coin9.addAnimation("coin",coin_Image);
  coin9.scale = 0.2;
  
  coin10 = createSprite(40,476);
  coin10.addAnimation("coin",coin_Image);
  coin10.scale = 0.2;
  
  coin11 = createSprite(40,582);
  coin11.addAnimation("coin",coin_Image);
  coin11.scale = 0.2;
  
  coin12 = createSprite(130,582);
  coin12.addAnimation("coin",coin_Image);
  coin12.scale = 0.2;
  
  coin13 = createSprite(180,582);
  coin13.addAnimation("coin",coin_Image);
  coin13.scale = 0.2;
  
  coin14 = createSprite(250,321);
  coin14.addAnimation("coin",coin_Image);
  coin14.scale = 0.2;
  
  coin15 = createSprite(310,582);
  coin15.addAnimation("coin",coin_Image);
  coin15.scale = 0.2;
  
  coin16 = createSprite(533,476);
  coin16.addAnimation("coin",coin_Image);
  coin16.scale = 0.2;
  
  coin17 = createSprite(300,526);
  coin17.addAnimation("coin",coin_Image);
  coin17.scale = 0.2;
  
  coin18 = createSprite(540,306);
  coin18.addAnimation("coin",coin_Image);
  coin18.scale = 0.2;
  
  coin19 = createSprite(350,301);
  coin19.addAnimation("coin",coin_Image);
  coin19.scale = 0.2;
  
  coin20 = createSprite(250,256);
  coin20.addAnimation("coin",coin_Image);
  coin20.scale = 0.2;
  
  coin21 = createSprite(300,106);
  coin21.addAnimation("coin",coin_Image);
  coin21.scale = 0.2;
  
  gameOver = createSprite(300,200);
  gameOver.addImage(gameOver_Image);
  gameOver.scale = 0.4;
  
  restart = createSprite(300,330);
  restart.addImage(restart_Image);
  restart.scale = 0.2;
  gameOver.visible = false;
  restart.visible = false;
  
  score = 0;
  group = createGroup()

  console.log()
    // for(var i =0; i<22 ; i++){
  //   coin.visible = false
  // }
  
    group.add(coin1)
group.add(coin2)
group.add(coin3)
group.add(coin4)
group.add(coin5)
group.add(coin6)
group.add(coin7)
group.add(coin8)
group.add(coin9)
group.add(coin10)
group.add(coin11)
group.add(coin12)
group.add(coin13)
group.add(coin14)
group.add(coin15)
group.add(coin16)
group.add(coin17)
group.add(coin18)
group.add(coin19)
group.add(coin20)
group.add(coin21)


  // console.log(group)
}

function draw() {
  background("green");
 
  if (gameState===PLAY){
    if(girl.isTouching(coin1)) {
      coin1.visible = false;
      
      score = score + 1;
    }
     if(girl.isTouching(coin2)) {
      coin2.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin3)) {
      coin3.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin4)) {
      coin4.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin5)) {
      coin5.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin6)) {
      coin6.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin7)) {
      coin7.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin8)) {
      coin8.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin9)) {
      coin9.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin10)) {
      coin10.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin11)) {
      coin11.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin12)) {
      coin12.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin13)) {
      coin13.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin14)) {
      coin14.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin15)) {
      coin15.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin16)) {
      coin16.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin17)) {
      coin17.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin18)) {
      coin18.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin19)) {
      coin19.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin20)) {
      coin20.visible = false;
       
      score = score + 1;
    }
     if(girl.isTouching(coin21)) {
      coin21.visible = false;
       
      score = score + 1;
    }
     
  if(keyDown(UP_ARROW)) {
    girl.velocityY = -2;
    girl.velocityX = 0;
  }
  
  if(keyDown(DOWN_ARROW)) {
    girl.velocityY = 2;
    girl.velocityX = 0;
  }
  
  if(keyDown(LEFT_ARROW)) {
    girl.velocityX = -2;
    girl.velocityY = 0;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    girl.velocityX = 2;
    girl.velocityY = 0;
  }
    
    if(girl.isTouching(wall1)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall2)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall5)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall6)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall7)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall8)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall9)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall12)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall13)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall14)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall15)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall17)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall18)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall19)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall21)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall22)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall23)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall24)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall25)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    if(girl.isTouching(wall26)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall27)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall28)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall29)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall30)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall32)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall34)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall35)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall36)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall37)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    if(girl.isTouching(wall38)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;

    }
    
    if(girl.isTouching(wall40)) {
      girl.destroy();

      for(var i = 0; i<21;i++){
  group[i].visible=true
    }


       girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
    }
    
    stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,40,40);
  spawnRobot1();
  spawnRobot2();
  spawnRobot3();
  spawnRobot4();
    
    if(girl.isTouching(robot1)) {
      gameState = END;
    }
    if(girl.isTouching(robot2)) {
      gameState = END;
    }
    if(girl.isTouching(robot3)) {
      gameState = END;
    }
    if(girl.isTouching(robotGroup1)) {
      gameState = END;
    }
    if(girl.isTouching(robotGroup2)) {
      gameState = END;
    }
    if(girl.isTouching(robotGroup3)) {
      gameState = END;
    }
    if(girl.isTouching(robotGroup4)) {
      gameState = END;
    }
  } else if (gameState === END) {
    gameOver.visible = true;
  restart.visible = true;
    robotGroup1.setVelocityXEach(0);
    robotGroup2.setVelocityXEach(0);
    robotGroup3.setVelocityXEach(0);
    robotGroup4.setVelocityXEach(0);
    robotGroup1.setLifetimeEach(-1);
    robotGroup2.setLifetimeEach(-1);
    robotGroup3.setLifetimeEach(-1);
    robotGroup4.setLifetimeEach(-1);
    robotGroup1.destroyEach();
    robotGroup2.destroyEach();
    robotGroup3.destroyEach();
    robotGroup4.destroyEach();
     robot1.destroy();
    robot2.destroy();
    robot3.destroy();
    girl.destroy();
    coin1.destroy();
    coin2.destroy();
    coin3.destroy();
    coin4.destroy();
    coin5.destroy();
    coin6.destroy();
    coin7.destroy();
    coin8.destroy();
    coin9.destroy();
    coin10.destroy();
    coin11.destroy();
    coin12.destroy();
    coin13.destroy();
    coin14.destroy();
    coin15.destroy();
    coin16.destroy();
    coin17.destroy();
    coin18.destroy();
    coin19.destroy();
    coin20.destroy();
    coin21.destroy();
    
     wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    wall17.destroy();
    wall18.destroy();
    wall19.destroy();
    wall20.destroy();
   wall21.destroy();
     wall22.destroy();
    wall23.destroy();
    wall24.destroy();
    wall25.destroy();
    wall26.destroy();
    wall27.destroy();
    wall28.destroy();
    wall29.destroy();
    wall30.destroy();
    wall31.destroy();
    wall32.destroy();
    wall33.destroy();
    wall34.destroy();
    wall35.destroy();
    wall36.destroy();
    wall37.destroy();
    wall38.destroy();
    wall39.destroy();
    wall40.destroy();
   
    if(mousePressedOver(restart)) {
      reset();
  }
}
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,40,40);
  drawSprites();
   spawnRobot1();
  spawnRobot2();
  spawnRobot3();
  spawnRobot4();
}

function spawnRobot1() {
   if (frameCount % 100 === 0) {
  var robot4 = createSprite(620,475);
     robot4.y = Math.round(random(470,475));
      robot4.addAnimation("robot",robot_Image);
  robot4.scale = 0.5;
     robot4.velocityX = -3;
     robotGroup1.add(robot4);
     robotGroup1.setLifetimeEach(40);
   }
  

}

function spawnRobot2() {
   if (frameCount % 100 === 0) {
  var robot5 = createSprite(600,135);
     robot5.y = Math.round(random(130,135));
      robot5.addAnimation("robot",robot_Image);
  robot5.scale = 0.5;
     robot5.velocityX = -3;
     robotGroup2.add(robot5);
     robotGroup2.setLifetimeEach(50);
     
   }
}

function spawnRobot3() {
   if (frameCount % 100 === 0) {
  var robot6 = createSprite(500,305);
     robot6.y = Math.round(random(300,305));
      robot6.addAnimation("robot",robot_Image);
  robot6.scale = 0.5;
     robot6.velocityX = -3;
     robotGroup3.add(robot6);
     robotGroup3.setLifetimeEach(60);
   }
}

function spawnRobot4() {
   if (frameCount % 100 === 0) {
  var robot7 = createSprite(500,44);
     robot7.y = Math.round(random(40,44));
      robot7.addAnimation("robot",robot_Image);
  robot7.scale = 0.5;
     robot7.velocityX = -3;
     robotGroup4.add(robot7);
     robotGroup4.setLifetimeEach(85);
   }
}

function reset() {
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  girl = createSprite(60,100);
  girl.addAnimation("girl",girl_Image);
  girl.scale = 0.4;
  

  console.log("reset");
  console.log(group);
  wall1 = createSprite(150,25,15,90);
  wall1.shapeColor = "darkOrange";
  
  wall2 = createSprite(43,130,85,15);
  wall2.shapeColor = "darkOrange";
  
  wall3 = createSprite(250,120,15,90);
  wall3.shapeColor = "darkOrange";
  
  wall4 = createSprite(318,70,150,15);
  wall4.shapeColor = "darkOrange";
  
  wall5 = createSprite(140,180,85,15);
  wall5.shapeColor = "darkOrange";
  
  wall6 = createSprite(185,223,15,100);
  wall6.shapeColor = "darkOrange";
  
  wall7 = createSprite(240,280,125,15);
  wall7.shapeColor = "darkOrange";
  
  wall8 = createSprite(300,323,15,100);
  wall8.shapeColor = "darkOrange";
  
  wall9 = createSprite(61,360,120,15);
  wall9.shapeColor = "darkOrange";
  
  wall10 = createSprite(81,320,15,90);
  wall10.shapeColor = "darkOrange";
  
  wall11 = createSprite(300,250,15,90);
  wall11.shapeColor = "darkOrange";
  
  wall12 = createSprite(400,113,15,100);
  wall12.shapeColor = "darkOrange";
  
  wall13 = createSprite(457,70,100,15);
  wall13.shapeColor = "darkOrange";
  
  wall14 = createSprite(400,70,100,15);
  wall14.shapeColor = "darkOrange";
  
  wall15 = createSprite(400,20,15,90);
  wall15.shapeColor = "darkOrange";
  
  wall16 = createSprite(387,260,160,15);
  wall16.shapeColor = "darkOrange";
  
  wall17 = createSprite(460,215,15,100);
  wall17.shapeColor = "darkOrange";
  
  wall18 = createSprite(387,260,160,15);
  wall18.shapeColor = "darkOrange";
   
  wall19 = createSprite(5,220,90,15);
  wall19.shapeColor = "darkOrange";
  
  wall20 = createSprite(387,260,160,15);
  wall20.shapeColor = "darkOrange";
  
  wall21 = createSprite(550,330,100,15);
  wall21.shapeColor = "darkOrange";
  
  wall22 = createSprite(387,260,160,15);
  wall22.shapeColor = "darkOrange";
  
  wall23 = createSprite(530,500,160,15);
  wall23.shapeColor = "darkOrange";
  
  wall24 = createSprite(595,557,15,100);
  wall24.shapeColor = "RED";
  
  wall25 = createSprite(80,500,160,15);
  wall25.shapeColor = "darkOrange";
  
  wall26 = createSprite(250,580,15,70);
  wall26.shapeColor = "darkOrange";
  
  wall27 = createSprite(349,325,90,15);
  wall27.shapeColor = "darkOrange";
  
  wall28 = createSprite(155,472,15,70);
  wall28.shapeColor = "darkOrange";
  
  wall29 = createSprite(198,440,100,15);
  wall29.shapeColor = "darkOrange";
  
  wall30 = createSprite(493,372,15,100);
  wall30.shapeColor = "darkOrange";
  
  wall31 = createSprite(386,380,15,100);
  wall31.shapeColor = "darkOrange";
  
  wall32 = createSprite(475,370,50,15);
  wall32.shapeColor = "darkOrange";
  
  wall33 = createSprite(570,250,70,15);
  wall33.shapeColor = "darkOrange";
  
  wall34 = createSprite(570,400,60,15);
  wall34.shapeColor = "darkOrange";
  
  wall35 = createSprite(135,500,88,15);
  wall35.shapeColor = "darkOrange";
  
  wall36 = createSprite(293,550,100,15);
  wall36.shapeColor = "darkOrange";
  
  wall37 = createSprite(340,528,15,60);
  wall37.shapeColor = "darkOrange";
  
  wall38 = createSprite(245,345,100,15);
  wall38.shapeColor = "darkOrange";
  
   wall39 = createSprite(528,160,150,15);
  wall39.shapeColor = "darkOrange";
  
  wall40 = createSprite(300,130,100,15);
  wall40.shapeColor = "darkOrange";
  
  robot1 = createSprite(100,476);
  robot1.addAnimation("robot",robot_Image);
  robot1.scale = 0.5;
  
  robot2 = createSprite(340,236);
  robot2.addAnimation("robot",robot_Image);
  robot2.scale = 0.5;
  
  robot3 = createSprite(100,576);
  robot3.addAnimation("robot",robot_Image);
  robot3.scale = 0.5;
  
  coin1 = createSprite(300,45);
  coin1.addAnimation("coin",coin_Image);
  coin1.scale = 0.2;
  
  coin2 = createSprite(340,45);
  coin2.addAnimation("coin",coin_Image);
  coin2.scale = 0.2;
  
  coin3 = createSprite(430,45);
  coin3.addAnimation("coin",coin_Image);
  coin3.scale = 0.2;
  
  coin4 = createSprite(470,45);
  coin4.addAnimation("coin",coin_Image);
  coin4.scale = 0.2;
  
  coin5 = createSprite(470,136);
  coin5.addAnimation("coin",coin_Image);
  coin5.scale = 0.2;
  
  coin6 = createSprite(510,136);
  coin6.addAnimation("coin",coin_Image);
  coin6.scale = 0.2;
  
  coin7 = createSprite(390,236);
  coin7.addAnimation("coin",coin_Image);
  coin7.scale = 0.2;
  
  coin8 = createSprite(40,336);
  coin8.addAnimation("coin",coin_Image);
  coin8.scale = 0.2;
  
  coin9 = createSprite(25,196);
  coin9.addAnimation("coin",coin_Image);
  coin9.scale = 0.2;
  
  coin10 = createSprite(40,476);
  coin10.addAnimation("coin",coin_Image);
  coin10.scale = 0.2;
  
  coin11 = createSprite(40,582);
  coin11.addAnimation("coin",coin_Image);
  coin11.scale = 0.2;
  
  coin12 = createSprite(130,582);
  coin12.addAnimation("coin",coin_Image);
  coin12.scale = 0.2;
  
  coin13 = createSprite(180,582);
  coin13.addAnimation("coin",coin_Image);
  coin13.scale = 0.2;
  
  coin14 = createSprite(250,321);
  coin14.addAnimation("coin",coin_Image);
  coin14.scale = 0.2;
  
  coin15 = createSprite(310,582);
  coin15.addAnimation("coin",coin_Image);
  coin15.scale = 0.2;
  
  coin16 = createSprite(533,476);
  coin16.addAnimation("coin",coin_Image);
  coin16.scale = 0.2;
  
  coin17 = createSprite(300,526);
  coin17.addAnimation("coin",coin_Image);
  coin17.scale = 0.2;
  
  coin18 = createSprite(540,306);
  coin18.addAnimation("coin",coin_Image);
  coin18.scale = 0.2;
  
  coin19 = createSprite(350,301);
  coin19.addAnimation("coin",coin_Image);
  coin19.scale = 0.2;
  
  coin20 = createSprite(250,256);
  coin20.addAnimation("coin",coin_Image);
  coin20.scale = 0.2;
  
  coin21 = createSprite(300,106);
  coin21.addAnimation("coin",coin_Image);
  coin21.scale = 0.2;
  
  if(keyDown(UP_ARROW)) {
    girl.velocityY = -2;
    girl.velocityX = 0;
  }
  
  if(keyDown(DOWN_ARROW)) {
    girl.velocityY = 2;
    girl.velocityX = 0;
  }
  
  if(keyDown(LEFT_ARROW)) {
    girl.velocityX = -2;
    girl.velocityY = 0;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    girl.velocityX = 2;
    girl.velocityY = 0;
  }
  
  if(girl.isTouching(coin1)) {
      coin1.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin2)) {
      coin2.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin3)) {
      coin3.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin4)) {
      coin4.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin5)) {
      coin5.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin6)) {
      coin6.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin7)) {
      coin7.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin8)) {
      coin8.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin9)) {
      coin9.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin10)) {
      coin10.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin11)) {
      coin11.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin12)) {
      coin12.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin13)) {
      coin13.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin14)) {
      coin14.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin15)) {
      coin15.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin16)) {
      coin16.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin17)) {
      coin17.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin18)) {
      coin18.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin19)) {
      coin19.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin20)) {
      coin20.destroy();
      score = score + 1;
    }
     if(girl.isTouching(coin21)) {
      coin21.destroy();
      score = score + 1;
    }
  score = 0;
}