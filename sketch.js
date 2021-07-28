var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var ground1

var clouds, cloudImage

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

    trex_collided = loadImage("trex_collided.png");

    groundImage = loadImage("ground2.png")

    cloudImage = loadImage("cloud.png")
}
function setup() {
    createCanvas(600, 200);

    //create a trex sprite

    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite

    ground = createSprite(200,190,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    ground1 = createSprite(200,205,400,20)
    ground1.visible=false
}
function draw() {
    background(280);

    console.log(trex.y);

    //jump when the space button is pressed

    if (keyDown("space") && trex.y>=150) {
        trex.velocityY = -10;


    }
    trex.velocityY = trex.velocityY + 0.8

    spawnCloud()

    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }   

    trex.collide(ground1)

    drawSprites();
}

function spawnCloud () {

    if (frameCount%75===0) {
        clouds = createSprite(550, 50, 20, 20)
        clouds.velocityX=-5
        clouds.addImage(cloudImage)
        clouds.scale = 0.15
        clouds.y = Math.round(random(20,80))
        clouds.depth = trex.depth
        trex.depth = trex.depth+1
    }

     


   

}
