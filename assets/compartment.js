const compartments = {
    O2: "0",
    weapons: "1",
    shield: "2",
};

function Compartment(compartmentName, hitsRequired, coordinates, color) {
    this.hitsRequired = hitsRequired;
    this.hits = 0;
    this.compartmentName = compartmentName;
    this.coordinates = coordinates;

    this.show = function() {
        fill(color);
        ellipse(coordinates.xcenter, coordinates.ycenter, coordinates.radius);
        fill(0);
        text(
            (this.hitsRequired - this.hits).toString(),
            coordinates.xcenter - 3,
            coordinates.ycenter + 2
        );
    };

    this.clicked = function() {
        let d = dist(mouseX, mouseY, coordinates.xcenter, coordinates.ycenter);
        if (d <= coordinates.radius) {
            return true;
        }
    };
}