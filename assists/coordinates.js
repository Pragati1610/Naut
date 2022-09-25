let homePlayerCoordinates = new EllipticalCoordinates(300, 500, 450, 300);
let targetCoordinates = new EllipticalCoordinates(800, 500, 200, 400);

let homePlayerOxygenCompartmentCoordinates = new CircularCoordinates(
    300,
    400,
    50
);
let homePlayerWeaponsCompartmentCoordinates = new CircularCoordinates(
    300,
    500,
    50
);
let homePlayerShieldCompartmentCoordinates = new CircularCoordinates(
    300,
    600,
    50
);

let targetOxygenCompartmentCoordinates = new CircularCoordinates(800, 400, 50);
let targetWeaponsCompartmentCoordinates = new CircularCoordinates(800, 500, 50);
let targetShieldCompartmentCoordinates = new CircularCoordinates(800, 600, 50);

let homePlayerHullCoordinates = new LinearCoordinates(250, 200, 350, 200);
let targetHullCoordinates = new LinearCoordinates(750, 200, 850, 200);

let homePlayerBeamCoordinates = new RectangularCoordinates();
let targetBeamCoordinates = new RectangularCoordinates();