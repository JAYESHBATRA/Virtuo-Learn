var p;
let d=0.994;
let g = 1;
let r = 48.0;
function setup()  {
  if(windowWidth>1010){
    createCanvas(windowWidth, windowHeight);

    slider = createSlider(0, 1, d, 0.001);
    slider.position(30,height*(0.42));
  
    slider_g = createSlider(0, 10, g, 0.1);
    slider_g.position(width*(0.05),height*(0.518));
  
    slider_r = createSlider(0, 200, r, 1);
    slider_r.position(width*(0.05),height*(0.568));
  }
  else{
    createCanvas(windowWidth, windowHeight);

    slider = createSlider(0, 1, d, 0.001);
    slider.position(30,height*(1.2));
  
    slider_g = createSlider(0, 10, g, 0.1);
    slider_g.position(width*(0.15),height*(1.265));
  
    slider_r = createSlider(0, 200, r, 1);
    slider_r.position(width*(0.15),height*(1.315));
  }
  p = new Pendulum(createVector(width/2,0),400);
}

function draw() {
  background(250);
  textSize(24);
  if(windowWidth>1010){
    fill(1);
    text("Damping = " + d, width/4, 40);
    textSize(14);
    text("g", width*(0.16), height*(0.258));
    text("r", width*(0.16), height*(0.308));
    text(slider_g.value(), width*(0.03),height*(0.258));
    text(slider_r.value(), width*(0.03),height*(0.308));
  }
  else{
    fill(1);
    text("Damping = " + d, width/16, 20);
    textSize(14);
    text("g", width*(0.56), height*(0.948));
    text("r", width*(0.56), height*(1.00));
    text(slider_g.value(), width*(0.09),height*(0.953));
    text(slider_r.value(), width*(0.09),height*(1.000));
  }
  p.go();
}

function changeD0() {
	d = 0;
	slider_g.remove();
	slider_r.remove();
	slider.remove();
	setup();
}

function changeD1() {
	d = 1;
	slider_g.remove();
	slider_r.remove();
	slider.remove();
	setup();
}

function changeD2() {
	d = slider.value();
	slider_g.remove();
	slider_r.remove();
	slider.remove();
	setup();
}

function changeD3() {
	g = slider_g.value();
	r = slider_r.value();
	slider_g.remove();
	slider_r.remove();
	slider.remove();
	setup();
}


function Pendulum(origin_, r_) {
  // Fill all variables
  this.origin = origin_.copy();
  this.position = createVector();
  this.r = r_;
    if(windowWidth>1010)
        this.angle = PI/3;
    else   
    this.angle = PI/8;

  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  this.damping = d;
  this.ballr = r;    

  this.go = function() {
    this.update();
    this.display();
  };


  // Function to update position
  this.update = function() {
    var gravity = g;                                               
    this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);  
    this.aVelocity += this.aAcceleration;                           
    this.aVelocity *= this.damping;                                  
    this.angle += this.aVelocity;                              
  };

  this.display = function() {
    this.position.set(this.r*sin(this.angle), this.r*cos(this.angle), 0);       
    this.position.add(this.origin);                                               

    stroke(0);
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill("#9AACEA");

    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  };
}