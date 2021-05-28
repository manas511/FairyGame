var starImg,bgImg;
var star, starBody;
var fairy ; 
var fairyImg;
var sound1;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	sound1 = loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	sound1.play();
	//create fairy sprite and add animation for fairy

	fairy = createSprite(130,520);
	fairy.addAnimation("fairyAni",fairyImg);
	fairy.scale= 0.25;



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	World.add(world,fairy);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
	if(star.y>470 && starBody.position.y>470){
		Matter.Body.setStatic(starBody,true);
	}
	keyPressed(
		
	);
  drawSprites();

}

function keyPressed() {
	if (keyDown(RIGHT_ARROW)){
		fairy.x = fairy.x+20;
	}
	/*if (keyCode === RIGHT_ARROW){
		fairy.y = fairy.y+20;
	}*/
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		
	}

	//writw code to move fairy left and right
	
}
