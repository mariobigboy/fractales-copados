function drawFractal(centre, vertexCount, radius, radiusreductor, iteracion){
//con interacion termino la ejecucion cuando llega a cero
  if (iteracion < 0) {
    return;
  }
  let alpha=0;
  const alphaStep = (PI*2) / vertexCount;
  const vertices = [];
  beginShape();
  //me permite crear el poligono
  for (let i = 0; i <= vertexCount; i++) {
    const v = {
      x:centre.x + Math.cos(alpha)*radius,
      y:centre.y + Math.sin(alpha)*radius
    }
    alpha += alphaStep;
    vertices.push(v);
    vertex(v.x, v.y);
  }
  endShape();
  for (var vert of vertices) {
    drawFractal(vert, vertexCount, radius * radiusreductor, radiusreductor, iteracion -1)
  }
}
function setup(){
  createCanvas(800,600);
  //background(0);
}

let angle = 0;
function draw(){
  //background(Math.abs(255 * Math.cos(angle)));
  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.005;
  noFill();
  stroke(Math.abs(255 * Math.sin(angle)));
  drawFractal({x:0, y:0 }, 3, 100,0.75, 2);
}
