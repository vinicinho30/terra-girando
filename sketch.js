function setup() {
  createCanvas(2020, 2080, WEBGL); //plano 3D
   terra=loadImage('terra.jpg')
}

function draw() {
  background(130, 100, 84); //cor de fundo
  rotateY(millis()/1000); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(260, 120); //esfera 3D
  
  
  
}
