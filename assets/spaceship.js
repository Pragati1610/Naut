function SpaceShip(
    name,
    coordinates,
    oxygenCompartmentCoordinates,
    weaponsCompartmentCoordinates,
    shieldCompartmentCoordinates,
    hullCoordinates,
    color
) {
    this.name = name;
    this.compartments = [
        new Compartment("O2", 4, oxygenCompartmentCoordinates, 150),
        new Compartment("weapons", 6, weaponsCompartmentCoordinates, 100),
        new Compartment("shield", 10, shieldCompartmentCoordinates, 175),
    ];
    this.initialHull = 20;
    this.hull = 20;
    this.dodge = 1; // misses initially

    this.show = function() {
        instructionStyles();
        text(this.name, coordinates.xcenter - 50, 250);

        normalTextStyles(color);
        stroke(255);
        ellipse(
            coordinates.xcenter,
            coordinates.ycenter,
            coordinates.xdiameter,
            coordinates.ydiameter
        );
        stroke(0);
        for (let i = 0; i < this.compartments.length; i++) {
            this.compartments[i].show();
        }

        stroke(51);
        line(
            hullCoordinates.x1,
            hullCoordinates.y1,
            hullCoordinates.x2,
            hullCoordinates.y2
        );
        stroke(255);
        line(
            hullCoordinates.x1,
            hullCoordinates.y1,
            hullCoordinates.x1 + (100 / this.initialHull) * this.hull,
            hullCoordinates.y2
        );

        fill(0);
        ellipse();
    };

    this.update = function() {
        this.dodge = Math.random() > 0.3 ? 1 : 0;
    };

    this.autoPilot = function(spaceShip) {
        if (!spaceShip.dodge) {
            let randomNo = Math.floor(Math.random() * spaceShip.compartments.length);
            let compartment = spaceShip.compartments[randomNo];
            if (compartment.hits < compartment.hitsRequired && spaceShip.hull > 0) {
                compartment.hits++;
                spaceShip.hull--;
                let compartmenCoordinates = compartment.coordinates;
                fill(200, 25, 50);
                ellipse(
                    compartmenCoordinates.xcenter,
                    compartmenCoordinates.ycenter,
                    compartmenCoordinates.radius
                );
                line(
                    700,
                    500,
                    compartmenCoordinates.xcenter,
                    compartmenCoordinates.ycenter
                );
            }
        }
    };

    this.clickedCompartment = function() {
        for (const prop in this.compartments) {
            if (this.compartments[prop].clicked()) {
                let compartment = this.compartments[prop];
                if (compartment.hits < compartment.hitsRequired && this.hull > 0) {
                    compartment.hits++;
                    this.hull--;
                    let compartmenCoordinates = compartment.coordinates;
                    fill(200, 25, 50);
                    ellipse(
                        compartmenCoordinates.xcenter,
                        compartmenCoordinates.ycenter,
                        compartmenCoordinates.radius
                    );
                    line(
                        535,
                        500,
                        compartmenCoordinates.xcenter,
                        compartmenCoordinates.ycenter
                    );
                }
            }
        }
    };
}