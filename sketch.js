
function setup() {
  // alert("DMA 101")
  createCanvas(400, 400);
 // background(26, 123, 142);
  //angleMode(DEGREES);
  // mic = new p5.Audioin()
  //mic.start();


}

function mousePressed() {
  if (mouseX > 0 && mouseX < 0 && mouseY > 0 && mouseY < 0) {
    console.log("mouse beep");
    eyeBrow = -eyeBrow;
  }
 
}

    function drawEyes() {

      //eyes
      fill(245, 245, 245);
      ellipse(152, 167, 39, 26);
      ellipse(237, 167, 39, 26);

      //iris
      fill(92, 59, 2);
      ellipse(152, 167, 16, 16);
      ellipse(237, 167, 16, 16);

      //pupils
      fill(8, 8, 8);
      ellipse(152, 167, 8, 8);
      ellipse(237, 167, 8, 8);

      //highlight
      fill(247, 242, 242);
      ellipse(156, 164, 6, 6);
      ellipse(241, 164, 6, 6);


    }
    function drawFace(){
beginShape();
      stroke(10, 10, 10);
      fill(8, 8, 8);
      ellipse(201, 115, 202, 195);
      endShape();

      //face 
      beginShape();
      stroke(230, 205, 129);
      fill(230, 207, 145);
      ellipse(201, 200, 197, 285);
      ellipse(310, 182, 34, 53);
      ellipse(89, 182, 34, 53);
      ellipse(93, 200, 23, 41);
      ellipse(305, 200, 23, 41);
      endShape();

      //hairline
      beginShape();
      stroke(3, 3, 3);
      fill(10, 10, 10);
      rect(125, 78, 146, -29);
      endShape();



      //beard
      beginShape();
      stroke(10, 10, 10);
      fill(0, 0, 0);
      bezier(103, 210, 73, 483, 355, 417, 298, 213);
      triangle(119, 229, 103, 221, 102, 100);
      triangle(297, 111, 243, 298, 301, 284);
      endShape();

      //nose
      beginShape();
      stroke(230, 205, 129);
      fill(230, 205, 129);
      rect(181, 137, 29, 93);
      ellipse(214, 224, 19, 28);
      ellipse(182, 224, 19, 28);
      ellipse(199, 224, 34, 53);
      endShape();}
    function drawMouth() {
      //mouth
      beginShape();
      fill(230, 205, 129);
      ellipse(198, 275, 68, 35);
      endShape();

      //lips
      fill(219, 183, 92);
      arc(198, 275, 68, 35, -9.5, 119.40);
    }
    function drawBrows(){ push();
      translate(0, 0);
      fill(3, 3, 3);
      arc(240, 150, 49, 8, -5, 1);
      arc(148, 150, 49, 8, -5, 1);
      pop();
}
    function draw() {
      // console.log("mouse x is:" + mouseX);
      //console.log("mouse y is:" + mouseY);
      drawFace();
      drawEyes();
      drawMouth();
      drawBrows();

  if (mouseIsPressed) {
    translate(p5.Vector.fromAngle(millis() / 190, 50));
    stroke(238,4,175);
    fill(154,10,115);
    ellipse(mouseX, mouseX,mouseY,mouseX);
  } else {
    translate(p5.Vector.fromAngle(millis() / 200, 84));
    stroke(39,167,192);
    fill(26, 123, 142);
    ellipse(mouseY, mouseY,mouseX,mouseX);
  }
 // ellipse(mouseY, mouseX,mouseX,mouseX);
  
      
}

  
