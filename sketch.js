let homePlayer;
let target;
let options = ["START", "HELP", "EXIT"];
let ptr = 0;
let menuMode = 3;
let mode = menuMode;
let resetButton;

function setup() {
    createCanvas(1000, 900);
    setSpaceshipValues();
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
    clear();
    background(0);
    if (mode === 0) {
        drawAndUpdateSpaceships();
        displayCompartments();
        displayHull();
        displayPlayer();
        reset();

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
        menuContent();
    }
    backContent();
}

function drawAndUpdateSpaceships() {
    inGameStyles();
    homePlayer.show();
    target.show();
    homePlayer.update();
    target.update();
}

function reset() {
    button = createButton("reset");
    button.position(475, 920);
    button.mousePressed(setSpaceshipValues);
}

function setSpaceshipValues() {
    homePlayer = new SpaceShip(
        "Home Ship",
        homePlayerCoordinates,
        homePlayerOxygenCompartmentCoordinates,
        homePlayerWeaponsCompartmentCoordinates,
        homePlayerShieldCompartmentCoordinates,
        homePlayerHullCoordinates,
        0
    );
    target = new SpaceShip(
        "Target Ship",
        targetCoordinates,
        targetOxygenCompartmentCoordinates,
        targetWeaponsCompartmentCoordinates,
        targetShieldCompartmentCoordinates,
        targetHullCoordinates,
        0
    );
}