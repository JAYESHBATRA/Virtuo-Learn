var pendulum;
let D = 0.994;
let G = 1;
let R = 48.0;
let isFirst = true;
let text_d, text_g, text_r;
let width=window.innerWidth,height=window.innerHeight;


function setup() {

  if (windowWidth > 1010) {

    createCanvas(windowWidth, windowHeight);

    slider_d = createSlider(0, 1, D, 0.001);
    slider_d.position(width * (0.05), height * (0.468));

    slider_g = createSlider(0, 10, G, 0.1);
    slider_g.position(width * (0.05), height * (0.518));

    slider_r = createSlider(0, 200, R, 1);
    slider_r.position(width * (0.05), height * (0.568));
  }
  else {
    createCanvas(windowWidth, windowHeight);

    slider_d = createSlider(0, 1, D, 0.001);
    slider_d.position(width * (0.3), height * (1.22));

    slider_g = createSlider(0, 10, G, 0.1);
    slider_g.position(width * (0.3), height * (1.265));

    slider_r = createSlider(0, 200, R, 1);
    slider_r.position(width * (0.3), height * (1.315));
  }
  pendulum = new Pendulum(createVector(width / 2, 0), 400);

  if (isFirst) {


    text_d = createP("d").position(width * (0.14), height * 0.458);
    text_g = createP("g").position(width * (0.14), height * 0.508);
    text_r = createP("r").position(width * (0.14), height * 0.558);

    value_g = createP();
    value_r = createP();
    value_d = createP();
  }
  // else{
  //   text_d.position(width * (0.14), height * 0.458)
  //   text_g.position(width * (0.14), height * 0.508)
  //   text_r.position(width * (0.14), height * 0.558)
  // }

  isFirst = false
}

function draw() {
  background(250);
  textSize(24);


  if (windowWidth > 1010) {
    fill(1);
    text("Damping = " + D, width / 4, 40);
    textSize(14);

    value_g.position(width * (0.03), height * 0.508);
    value_g.html(slider_g.value());
    value_g.style('font-size', '12pt'); // Set the desired font size

    value_r.position(width * (0.025), height * 0.558);
    value_r.html(slider_r.value());
    value_r.style('font-size', '12pt'); // Set the desired font size

    value_d.position(width * (0.015), height * 0.458);
    value_d.html(slider_d.value());
    value_d.style('font-size', '12pt'); // Set the desired font size
  }
  else {
    fill(1);
    // text("Damping = " + D, width/16, 20);
    textSize(14);

    value_g.position(width * (0.23), height * 1.255);
    value_g.html(slider_g.value());
    value_g.style('font-size', '12pt'); // Set the desired font size

    value_r.position(width * (0.21), height * 1.305);
    value_r.html(slider_r.value());
    value_r.style('font-size', '12pt'); // Set the desired font size

    value_d.position(width * (0.18), height * 1.21);
    value_d.html(slider_d.value());
    value_d.style('font-size', '12pt'); // Set the desired font size

  }
  pendulum.go();
}

function changeD0() {
  D = 0;
  slider_g.remove();
  slider_r.remove();
  slider_d.remove();
  setup();
}

function changeD1() {
  D = 1;
  slider_g.remove();
  slider_r.remove();
  slider_d.remove();
  setup();
}

function changeD2() {
  D = slider_d.value();
  slider_g.remove();
  slider_r.remove();
  slider_d.remove();
  setup();
}

function changeD3() {
  D = slider_d.value();
  G = slider_g.value();
  R = slider_r.value();
  slider_g.remove();
  slider_r.remove();
  slider_d.remove();
  setup();
}


function Pendulum(origin_, r_) {
  // Fill all variables
  this.origin = origin_.copy();
  this.position = createVector();
  this.R = r_;
  if (windowWidth > 1010)
    this.angle = PI / 3;
  else
    this.angle = PI / 8;

  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  this.damping = D;
  this.ballr = R;

  this.go = function () {
    this.update();
    this.display();
  };


  // Function to update position
  this.update = function () {
    var gravity = G;
    this.aAcceleration = (-1 * gravity / this.R) * sin(this.angle);
    this.aVelocity += this.aAcceleration;
    this.aVelocity *= this.damping;
    this.angle += this.aVelocity;
  };

  this.display = function () {
    this.position.set(this.R * sin(this.angle), this.R * cos(this.angle), 0);
    this.position.add(this.origin);

    stroke(0);
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill("#9AACEA");

    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  };
}