var c = document.getElementById('screen');
var b = document.getElementById('btn');
var rst = document.getElementById('rst');

var a,T,v; // Variables for holding wave parameters
var t = 0,flag = 1,loop;
var fun = sin; // Wave function

var scr = c.getContext('2d');
var maxx = c.width;
var maxy = c.height;

/* Initialises the screen with the axes and the wave */
function initscr() {
    /* Initial styles */
    scr.font = '20px sans-serif';
    scr.textAlign = 'center';
    scr.strokeStyle = '#000000';
    scr.fillStyle = '#000000';

    /* y-axis */
    scr.beginPath();
    scr.moveTo(50,maxy/6);
    scr.lineTo(50,maxy*5/6);
    scr.stroke();
    scr.fillText('y',50,maxy/6 - 15);

    /* x-axis */
    scr.beginPath();
    scr.moveTo(50,maxy/2);
    scr.lineTo(maxx-50,maxy/2);
    scr.stroke();
    scr.fillText('x',maxx-35,maxy/2 + 6);
    scr.fillText('S',20,maxy/2 + 7); // Source label
    
    /* Draw the arrow tips at ends of each axes */
                                    // axis: y = 1 || x = -1.
    drawArrow(50,maxy/6,1,1);       // ori = 1 for upright(in y) and
    drawArrow(50,maxy*5/6,1,-1);    // right-pointing(in x) arrows.
    drawArrow(maxx-50,maxy/2,-1,1); // ori = -1 for upside-down(in y)
                                    // and left-pointing(in x) arrows
    /* Axes values */
    scr.font = '14px sans-serif';
    scr.fillStyle = '#666666';
    scr.strokeStyle = '#666666';

    for (i=1; i<=(maxx-120)/50; i++) {
        scr.fillText(i*50,i*50+50,maxy/2 + 20);
        scr.moveTo(i*50+50, maxy/2 - 5);
        scr.lineTo(i*50+50, maxy/2 + 5);
        scr.stroke();
    }
    scr.textAlign = 'right';
    for (i=-2; i<=2; i++) {
        scr.fillText(i*50,40,maxy/2 - i*50 + 5);
        scr.moveTo(45, maxy/2 - i*50);
        scr.lineTo(55, maxy/2 - i*50);
        scr.stroke();
    }
    scr.moveTo(50,maxy/2); // Move cursor to the origin of the axes
}

/* Function to draw an arrow-tip in given axis and orientation */
function drawArrow(xPos,yPos,axis,ori) {
    scr.beginPath();
    
    scr.moveTo(xPos - ori*8, yPos + ori*axis*8);
    scr.lineTo(xPos,yPos);
    scr.lineTo(xPos + ori*axis*8, yPos + ori*8);
    
    scr.stroke();
}

/* Function to update the values of a,T and v */ 
function updateParameters () {
    a = parseFloat(document.getElementById('amp').value);
    T = parseFloat(document.getElementById('prd').value);
    v = parseFloat(document.getElementById('vel').value);
    document.getElementById('amp-val').innerHTML = a.toFixed(0)
    document.getElementById('prd-val').innerHTML = T.toFixed(2)
    document.getElementById('vel-val').innerHTML = v.toFixed(0)
}

/* Function to draw the full wave at a given instance of time */
function drawWave(time, d) {
    var x,y;
    updateParameters();
    
    scr.strokeStyle = '#203681'; // Set color for drawing the wave
    scr.beginPath();             // Begins the wave

    for(x=0; x < maxx-100 && x < d; x++) {       
        y = fun(x, time);
        scr.lineTo(50+x,maxy/2-y);
    }
    
    scr.stroke(); // Stroke the wave on the screen

    // Draw oscillating source point
    scr.fillStyle = '#203681'; // Set color for drawing the wave
    scr.beginPath();             // Begins the wave
    scr.arc(50, maxy/2-fun(0, time), 3, 0, 2*Math.PI);
    scr.fill();

    // Display global time
    scr.font = '16px monospace';
    scr.textAlign = 'left';
    scr.fillText('Time: ' + t.toFixed(2) + 's', 45, maxy-20);
}

/* Function to clear the screen */
function clrscr() {
    scr.fillStyle = "#ffffff";
    scr.fillRect(0,0,maxx,maxy);
    scr.fillStyle = "#f24200"; // Resets the fill color
}

/* Update the wave on changing the parameter-inputs */
function updateWave() {
    clrscr();
    initscr();
    if (t) {
        drawWave(t, v*t);
    } else {
        drawWave(t, 150);
    }
}
for(i=0; i<3; i++) {
    document.querySelectorAll('input')[i].oninput = updateWave;
}
document.getElementById('fun').onchange = function() {
    switch (this.value) {
        case 'Saw Tooth':
            fun = saw;
            break;
        case 'Triangular':
            fun = tri;
            break;
        case 'Square':
            fun = sqr;
            break;
        case 'Sine':
        default:
            fun = sin;
            break;
    }
    updateWave();
}

/* Function to Start/Pause the wave */
function startWave() {
    if(flag) {
        loop = setInterval(function() {
            clrscr();
            initscr();
            drawWave(t, v*t);
            t = t+0.02; // Frame rate = 50fps; 1s/50 = 0.02s
        }, 20); // 50fps x 20ms = 1000ms = 1s
        
        b.innerHTML = 'Pause';
        flag = 0;
    }
    else {
        clearInterval(loop);
        b.innerHTML = 'Start';
        flag = 1;
    }
}

/* Initialise the screen for the first time */
function reset() {
    if (!flag) {
        startWave(); // Pause the wave
    }
    t = 0;
    clrscr();
    initscr();

    document.getElementById('amp').value = 50;
    document.getElementById('prd').value = 1;
    document.getElementById('vel').value = 150;
    document.getElementById('fun').selectedIndex = 0;
    fun = sin;
    drawWave(1, 150);
}
rst.onclick = reset;
reset();

/* Start the wave when user clicks the 'Start' button */
b.onclick = function() {
    startWave();
};



/* Various wave functions */
function sin(x, t) {
    return a * Math.sin(2*Math.PI * (t-x/v)/T); // Standard eq of a sine wave
}
function saw(x, t) {
    return 2*a * ((t-x/v)/T - Math.floor((t-x/v)/T) - 1/2);
}
function sqr(x, t) {
    return a * Math.pow(-1, Math.floor((t-x/v) / T));
}
function tri(x, t) {
    return -2 * (Math.abs(saw(x,t)) - a/2);
}


