let homePlayer;
let target;
let homePlayerCoordinates = new Coordinates(300, 500, 450, 300);
let targetCoordinates = new Coordinates(800, 500, 200, 400);

function setup() {
    createCanvas(1000, 1000);
    homePlayer = new SpaceShip(homePlayerCoordinates);
    target = new SpaceShip(targetCoordinates, 200);
}

function draw() {
    background(51);
    homePlayer.show();
    target.show();
}

// function hit(aimer, target) {}