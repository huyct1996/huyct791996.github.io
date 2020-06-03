var speed;
var Star = function() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
};

Star.prototype.update = function() {
    this.z = this.z - speed;
    if(this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
    }
};

Star.prototype.show = function() {
    fill(255);
    noStroke();
    let sx = map(this.x/this.z, 0, 1, 0, width);
    let sy = map(this.y/this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);

    // ellipse(sx, sy, r, r);
    let px = map(this.x/this.pz, 0, 1, 0, width);
    let py = map(this.y/this.pz, 0, 1, 0, height);
    
    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

};

var stars = new Array(1000);

function setup() {
    createCanvas(displayWidth, displayHeight);
    for(let i = 0; i < stars.length; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0);
    speed = map(mouseX, 0, width, 0, 50);
    translate(width/2, height/2);
    for(let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}
