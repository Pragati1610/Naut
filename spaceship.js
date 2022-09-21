let oxygenCompartmentCoordinates = new Coordinates(100, 500, 50, 50);
let weaponsCompartmentCoordinates = new Coordinates(150, 500, 50, 50);
let shieldCompartmentCoordinates = new Coordinates(200, 500, 50, 50);

function SpaceShip(coordinates, color) {
    this.hull = 20;
    this.dodge = 1; // misses initially
    this.oxygenCompartment = new Compartment(
        "O2",
        2,
        oxygenCompartmentCoordinates,
        150
    );
    this.weaponsCompartment = new Compartment(
        "Weapons",
        5,
        weaponsCompartmentCoordinates,
        100
    );
    this.shieldCompartment = new Compartment(
        "Shield",
        6,
        shieldCompartmentCoordinates,
        125
    );

    this.show = function() {
        fill(color);
        ellipse(
            coordinates.xcenter,
            coordinates.ycenter,
            coordinates.xradius,
            coordinates.yradius
        );
        this.oxygenCompartment.show();
        this.weaponsCompartment.show();
        this.shieldCompartment.show();
    };

    this.update = function() {
        this.dodge = Math.random() > 0.5 ? 1 : 0;
    };

    // this.aim = function() {

    // }
}