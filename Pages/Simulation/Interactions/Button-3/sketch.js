let b1, b2;
let e = 1;
let button1, button2, button3, slider, button4;
let slider_m1, slider_m2, slider_u1, slider_u2;
let x, y;
let ball_u1 = 10, ball_u2 = 0, ball_m1 = 100, ball_m2 = 100;
let isFirst = true;

let posx = 200;

function setup() {
	createCanvas(windowWidth, windowHeight);

	if (windowWidth < 510) {
		slider = createSlider(0, 1, e, 0.01);
		slider.position(width * (0.07), height * (1.10));
	}
	else {
		slider = createSlider(0, 1, e, 0.01);
		slider.position(width * (0.02), height * (0.42));
	}
	slider_m1 = createSlider(50, 200, ball_m1, 10);
	slider_m1.position(width - posx, height * 0.23);
	
	if (isFirst) {
		
		text_m1 = createP(); // Initialize text_m1
		text_m2 = createP(); // Initialize text_m
		text_u1 = createP(); // Initialize text_m
		text_u2 = createP(); // Initialize text_m
		
		let p = 140;
		
		createP("m1").position(width - posx + p, height * 0.22);
		createP("m2").position(width - posx + p, height * 0.25);
		createP("u1").position(width - posx + p, height * 0.28);
		createP("u2").position(width - posx + p, height * 0.31);

	}

	slider_m2 = createSlider(50, 200, ball_m2, 10);
	slider_m2.position(width - posx, height * 0.26);


	slider_u1 = createSlider(0, 10, ball_u1, 1);
	slider_u1.position(width - posx, height * 0.29);

	slider_u2 = createSlider(0, 5, ball_u2, 1);
	slider_u2.position(width - posx, height * 0.32);

	x = 100;
	y = height / 2;

	ball_m1 = slider_m1.value();
	ball_m2 = slider_m2.value();

	ball_u1 = slider_u1.value();
	ball_u2 = slider_u2.value();

	c1 = color(255, 0, 0);
	c2 = color(51);

	b1 = new Ball(ball_m1 / 5, y, ball_m1, ball_u1, c1);
	if (windowWidth > 500)
		b2 = new Ball(x + 300, y, ball_m2, ball_u2, c2);
	else
		b2 = new Ball(x + 80, y, ball_m2, ball_u2, c2);
	frameRate(27);
	isFirst = false;
}

function draw() {
	background(250);
	text("e = " + slider.value(), width / 2, 200);

	textSize(15);
	// text("m1", width - posx + p, 20);
	// createP("m1").position(width - posx + p, height*0.26);


	text_m1.position(width - posx - 70, height * 0.22);
	text_m2.position(width - posx - 70, height * 0.25);
	text_u1.position(width - posx - 70, height * 0.28);
	text_u2.position(width - posx - 70, height * 0.31);


	// Use the text element to display the slider value
	text_m1.html(slider_m1.value() + " kg");
	text_m2.html(slider_m2.value() + " kg");
	text_u1.html(slider_u1.value() + " m/s");
	text_u2.html(slider_u2.value() + " m/s");





	b1.createParticle();
	b2.createParticle();

	b1.move();
	b2.move();
	b1.collide(b2);

}

function changeE0() {
	changeE3();
	e = 0;
	removeSliders();
	setup();
}
function changeE1() {
	changeE3();
	e = 1;
	removeSliders();
	setup();
}
function changeE2() {
	changeE3();
	e = slider.value();
	removeSliders();
	setup();
}

function changeE3() {
	ball_m1 = slider_m1.value()
	ball_m2 = slider_m2.value()
	ball_u1 = slider_u1.value()
	ball_u2 = slider_u2.value()
	e = slider.value();
	removeSliders();
	setup();
}

function removeSliders() {
	slider_m1.remove();
	slider_m2.remove();
	slider_u1.remove();
	slider_u2.remove();
	slider.remove();
}

class Ball {
	constructor(x, y, m, xSpeed, c) {
		this.x = x,
			this.y = y,
			this.m = m;
		this.r = m / 5;
		this.xSpeed = xSpeed;
		this.c = c;

	}
	createParticle() {
		noStroke();
		fill(this.c);
		ellipse(this.x, this.y, this.r * 2);
		textSize(15);
		text(this.xSpeed + " m/s", this.x - this.r, this.y - this.r - 40);
		text(this.m + " kg", this.x - this.r, this.y + this.r + 40);
		textSize(32);
	}
	move() {
		this.x += this.xSpeed;
	}
	update(newSpeed) {
		this.xSpeed = newSpeed;
	}
	collide(other) {
		if (this.x + this.r >= other.x - other.r) {
			let up1 = this.xSpeed * (this.m - other.m * e) + other.m * other.xSpeed * (1 + e);
			let low1 = this.m + other.m;
			let result1 = up1 / low1;

			let up2 = this.m * this.xSpeed * (1 + e) + other.xSpeed * (other.m - this.m * e);
			let low2 = this.m + other.m;
			let result2 = up2 / low2;

			this.update(result1);
			other.update(result2);
		}
	}
}