var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground,slingshot,polygon,polygonimage;

function preload(){
polygonimage = loadImage("polygon.png");
}
function setup(){
createCanvas(1200,800);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x=100,y=200});
}
function draw(){

imageMode(CENTER);
image(polygonimage,polygon.position.x,polygon.position.y,40,40);
}




































