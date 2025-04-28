let eyeColor;
let catX;

function setup() {
  createCanvas(600, 400);
  eyeColor = color(0);    
  catX = width / 2;       
}

function draw() {
  // Sky
  background(135, 206, 235); // sky blue
  
  // Grass
  fill(34, 139, 34);
  rect(0, height * 0.7, width, height * 0.3);

  // Sun
  fill(255, 223, 0);
  ellipse(80, 80, 80, 80);

  // Body and head
  fill(150, 120, 100);
  ellipse(catX, 300, 140, 151); 
  ellipse(catX, 200, 120, 120); 

  // Left Ear
  push();
  translate(catX - 30, 135);       
  rotate(radians(-30));            
  triangle(-20, -20, 0, 20, -40, 20);
  pop();

  // Right Ear
  push();
  translate(catX + 30, 135);
  rotate(radians(30));             
  triangle(25, -25, 0, 20, 40, 20);
  pop();

  // Eyes
  fill(eyeColor);
  ellipse(catX - 20, 190, 20, 30); 
  ellipse(catX + 20, 190, 20, 30); 

  // Nose
  fill(255, 150, 150);
  triangle(
    catX - 5, 210,
    catX + 5, 210,
    catX,     220
  );

  // Mouth
  noFill();
  stroke(0);
  line(catX, 220, catX, 230);
  arc(catX - 5, 230, 10, 10, 0, PI);
  arc(catX + 5, 230, 10, 10, 0, PI);

  // Whiskers
  line(catX - 40, 215, catX - 80, 210);
  line(catX - 40, 220, catX - 80, 220);
  line(catX - 40, 225, catX - 80, 230);
  line(catX + 40, 215, catX + 80, 210);
  line(catX + 40, 220, catX + 80, 220);
  line(catX + 40, 225, catX + 80, 230);

  textSize(32);
  text('🐁', mouseX-10, mouseY+10);
}

function mousePressed() {
  catX = mouseX;
}
