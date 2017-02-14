var osc1;
var osc2;
var osc3;
var osc4;
var osc5;
var osc6;
var osc7;
var osc8;

var amp1;
var amp2;
var amp3;
var amp4;
var amp5;
var amp6;
var amp7;
var amp8;

function setup() {
  createCanvas(500, 500, WEBGL); 
  background(100);
  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  osc1.freq(50);
  osc1.amp(0);
  osc1.start();
  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  osc2.freq(100);
  osc2.amp(0);
  osc2.start();
  osc3 = new p5.Oscillator();
  osc3.setType('sine');
  osc3.freq(200);
  osc3.amp(0);
  osc3.start();
  osc4 = new p5.Oscillator();
  osc4.setType('sine');
  osc4.freq(400);
  osc4.amp(0);
  osc4.start(); 
  osc5 = new p5.Oscillator();
  osc5.setType('sine');
  osc5.freq(800);
  osc5.amp(0);
  osc5.start(); 
  osc6 = new p5.Oscillator();
  osc6.setType('sine');
  osc6.freq(1600);
  osc6.amp(0);
  osc6.start();
  osc7 = new p5.Oscillator();
  osc7.setType('sine');
  osc7.freq(3200);
  osc7.amp(0);
  osc7.start(); 
  osc8 = new p5.Oscillator();
  osc8.setType('sine');
  osc8.freq(6400);
  osc8.amp(0);
  osc8.start(); 
  
    
    
} 

function draw() {
    
    var diag = 50 * 1.41;
    var a = int(dist(mouseX, mouseY, 350, 250));
    var az = map(a, 0, diag, 150, 0);
    var b = int(dist(mouseX, mouseY, 150, 250));
    var bz = map(b, 0, diag, 150, 0);
    var c = int(dist(mouseX, mouseY, 150, 350));
    var cz = map(c, 0, diag, 150, 0);
    var d = int(dist(mouseX, mouseY, 250, 350));
    var dz = map(d, 0, diag, 150, 0);
    var e = int(dist(mouseX, mouseY, 350, 350));
    var ez = map(e, 0, diag, 150, 0);
    var f = int(dist(mouseX, mouseY, 350, 150));
    var fz = map(f, 0, diag, 150, 0);
    var g = int(dist(mouseX, mouseY, 250, 150));
    var gz = map(g, 0, diag, 150, 0);
    var h = int(dist(mouseX, mouseY, 150, 150));
    var hz = map(h, 0, diag, 150, 0);
    
    if (mouseX>450 || mouseY>450 || mouseX<50 || mouseY<50)
        {
            osc1.amp(0, 0.05);
            osc2.amp(0, 0.05);
            osc3.amp(0, 0.05);
            osc4.amp(0, 0.05);
            osc5.amp(0, 0.05);
            osc6.amp(0, 0.05);
            osc7.amp(0, 0.05);
            osc8.amp(0, 0.05);
        } else {
            
    var amp1 = map(az, 150, 0, 0, 0.2);
    osc1.amp(amp1, 0.05);
    var amp2 = map(bz, 150, 0, 0, 0.1);
    osc2.amp(amp2, 0.05);
    var amp3 = map(cz, 150, 0, 0, 0.05);
    osc3.amp(amp3, 0.05);
    var amp4 = map(dz, 150, 0, 0, 0.05);
    osc4.amp(amp4, 0.05);
    var amp5 = map(ez, 150, 0, 0, 0.05);
    osc5.amp(amp5, 0.05);
    var amp6 = map(fz, 150, 0, 0, 0.05);
    osc6.amp(amp6, 0.05);
    var amp7 = map(gz, 150, 0, 0, 0.05);
    osc7.amp(amp7, 0.05);
    var amp8 = map(hz, 150, 0, 0, 0.01);
    osc8.amp(amp8, 0.05);
    
    }
    
    translate(100,0,az);
    box(100);
    translate(-200,0,-az + bz);
    box(100);
    translate(0,100,-bz + cz);
    box(100);
    translate(100,0,-cz + dz);
    box(100);
    translate(100,0,-dz + ez);
    box(100);
    translate(0,-200,-ez + fz);
    box(100);
    translate(-100,0,-fz + gz);
    box(100);
    translate(-100,0,-gz + hz);
    box(100);
    }