let sizeX;
let sizeY;
 
function setup(){
  sizeX=windowWidth;
	sizeY = windowHeight;
  createCanvas(sizeX, sizeY);
  background(0);
}
 
function draw() {
  meinKreisePinsel();
}
 
function meinKreisePinsel() {
  strokeWeight(1);
  fill(255/sizeX*mouseX, 0, 255/sizeY*(sizeY-mouseX));
  circle(mouseX, mouseY,dist(mouseX, mouseY, pmouseX, pmouseY));
}