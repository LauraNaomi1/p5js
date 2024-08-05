function setup() {
    createCanvas(450, 450);
    background("#850ECD");
  }
  
  function draw() {
    stroke("black");
    fill("black");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  