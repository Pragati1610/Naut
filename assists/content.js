function displayHull() {
    fill(255);
    text("HULL", 100, 200);
}

function displayPlayer() {
    fill(255);
    text("SPACESHIPS", 100, 250);
}

function displayHelpInstructions(xstart, ystart) {
    fill(255);
    menuStyles();
    stroke(200, 25, 50);
    text("Help - ", 200, 250);
    instructionStyles();
    let instructions = [
        "> Your spaceship is under attack captain!",
        "   The target spaceship is set and your crew is waiting for your command",
        "",
        "> As a captain you get to choose which compartment of the target ship to finish first",
        "> Click on the compartment that you want to hit to try to destroy it",
        "   Each compartment can take a specific number of hits before it gets destroyed",
        "",
        "> Destroy all comparments of the target ship BEFORE IT DESTROYS YOURS!",
        "",
        "> Press esc to get back to menu!",
    ];
    for (let i = 0; i < instructions.length; i++) {
        text(instructions[i], xstart, ystart + 25 * i);
    }
}

function menuContent() {
    let content = [
        "   Use up and down arrows to select",
        "   Press enter to select",
        "   Press esc to get back to menu!",
        "   Refer to help for further instructions",
    ];
    for (let i = 0; i < content.length; i++) {
        text(content[i], 350, 700 + 25 * i);
    }
}