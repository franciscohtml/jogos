//Fundo

let Miranhafundo;

//Musica
//let MiranhaMusica;

//Sons

let Perdeu;
let Bateu;

let colidiu = false;

//Variaveis Bolinha
let XBolinha = 190;
let YBolinha = 150;
let diametro = 27;
let raio = diametro/2;

//Variaveis Raquete
let xRaquete = 3;
let yRaquete = 200;
let Rcomprimento = 10;
let Raltura = 80;


//Variaveis Raquete do oponente
let xOponente = 583;
let yOponente = 150;
let Velocidade_Oponente;

let VXBolinha = 3;
let VYBolinha = 5;

//Pontos

let MeusPontos = 0;
let PontosAdversario = 0;

function preload(){
  Miranhafundo = loadImage("Miranha.jpg");
  //MiranhaMusica = loadSound("Miranha.mp3");
  Perdeu = loadSound("perdeu.mp3");
  Bateu = loadSound("raquetada.mp3");
}




function setup() {
  createCanvas(600, 420);
  //MiranhaMusica.loop();
}

function draw() {
  background(Miranhafundo);
  Bolinha();
  MovimentoBolinha();
  ColisaoBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xOponente, yOponente);
  movimentaMinhaRaquete();
  movimentaOponente();
  bateuBolinhanaRaquete(xRaquete, yRaquete);
  bateuBolinhanaRaquete(xOponente, yOponente);
  incluirPontos();
  marcaPontos();
}


function Bolinha(){
  let b = color(0,0,255);
  fill(b);
  circle(XBolinha , YBolinha, diametro);
}

function MovimentoBolinha() {
  XBolinha += VXBolinha;
  YBolinha += VYBolinha;
}



function ColisaoBolinha(){
   if(XBolinha + raio > width || XBolinha - raio < 0) {
  
  VXBolinha *= -1;
  
   
   }
  
  if(YBolinha + raio > height || YBolinha - raio < 0 ){
    
    VYBolinha *= -1
  }
  
}

function mostrarRaquete(x,y){
  let b = color(255,255,0);
  fill(b);
  rect(x,y,Rcomprimento,Raltura)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function movimentaOponente(){
  Velocidade_Oponente = YBolinha - yOponente
  - Rcomprimento / 2 - random(40,50);
  yOponente += Velocidade_Oponente
}

function bateuBolinhanaRaquete(x,y) {
  
  colidiu = collideRectCircle(
   x, y, Rcomprimento, Raltura, XBolinha, YBolinha, raio
);
  if(colidiu){
     VXBolinha *=  -1;
    Bateu.play();
     }
  
}

function incluirPontos(){
  stroke(255);
  textAlign(CENTER);
  textSize(30);
  fill(color(2, 107, 2));
  rect(263,1,30,30);
  fill(color(255, 255, 255));
  text(MeusPontos, 278,26);
  
  fill(color(255,140,0));
  rect(307,1,30,30);
  fill(255);
  text(PontosAdversario, 321,26);
}

function marcaPontos(){
  if(XBolinha < 15){
    Perdeu.play();
    PontosAdversario +=1;
  }
  
  if(XBolinha > 588){
    MeusPontos +=1;
  }
}
