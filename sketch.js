function setup() {
  createCanvas(400, 400, WEBGL); //plano 3D
   terra=loadImage('terra.jpg')
}

function draw() {
  background(130, 100, 84); //cor de fundo
  rotateY(millis()/1000); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(130, 60); //esfera 3D
  
  
  
}
