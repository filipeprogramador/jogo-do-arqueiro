const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

//cria configuraçoes do objeto. quero que ele fique flutuando
  var options = {
    isStatic:true
  }

  //cria corpo fisico da base do jogador,mas nao desenha
  playerBase = Bodies.rectangle(200, 350, 180, 150, options) ;

  //adicionei a base do jogador no mundo
  World.add(world, playerBase)
  
player = Bodies.rectangle(200, playerBase.position.y-145, 50, 50,options)
World.add(world, player)


}

function draw() {
  background(backgroundImg);
push()
imageMode(CENTER)
  //exibir a imagem do jogador usando a função image()
image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
image(playerimage,player.position.x,player.position.y,50,180)
  //exibir a imagem da base do jogador usando a função image()
pop()

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
