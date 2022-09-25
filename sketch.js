let homePlayer;
let target;
let options = ["START", "HELP", "EXIT"];
let ptr = 0;
let menuMode = 3;
let mode = menuMode;

function setup() {
    createCanvas(1000, 900);
    homePlayer = new SpaceShip(
        "Home Ship",
        homePlayerCoordinates,
        homePlayerOxygenCompartmentCoordinates,
        homePlayerWeaponsCompartmentCoordinates,
        homePlayerShieldCompartmentCoordinates,
        homePlayerHullCoordinates,
        250
    );
    target = new SpaceShip(
        "Target Ship",
        targetCoordinates,
        targetOxygenCompartmentCoordinates,
        targetWeaponsCompartmentCoordinates,
        targetShieldCompartmentCoordinates,
        targetHullCoordinates,
        200
    );
    frameRate(10);
}

function mousePressed() {
    if (homePlayer.hull) {
        target.clickedCompartment();
    }
}

function keyPressed() {
    if (keyCode === DOWN_ARROW && ptr < options.length - 1) ptr++;
    else if (keyCode === UP_ARROW && ptr > 0) ptr--;
    else if (keyCode === ENTER) mode = ptr;
    if (keyCode === ESCAPE) {
        mode = menuMode;
        ptr = 0;
    }
}

function draw() {
    background(0);
    if (mode === 0) {
        drawAndUpdateSpaceships();
        displayHull();
        displayPlayer();

        if (target.hull) {
            target.autoPilot(homePlayer);
        }

        endGameStyles();
        if (!target.hull) {
            text("YOU WON!", 350, 500);
        } else if (!homePlayer.hull) {
            text("GAME OVER!", 350, 500);
        }
    } else if (mode === 1) {
        displayHelpInstructions(200, 300);
    } else if (mode === 2) {
        menuStyles();
        text("Bye!", 475, 300);
    } else if (mode === 3) {
        for (let i = 0; i < options.length; i++) {
            if (i === ptr) {
                menuSelectedStyles();
            } else {
                menuStyles();
            }
            text(options[i], 450, 300 + i * 100);
        }
        instructionStyles();
        menuContent();
    }
}

function drawAndUpdateSpaceships() {
    inGameStyles();
    homePlayer.show();
    target.show();
    homePlayer.update();
    target.update();
}