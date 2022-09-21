function Compartment(compartmentName, hitsRequired, coordinates, color) {
    this.hitsRequired = hitsRequired;
    this.hits = 0;
    this.compartmentName = compartmentName;

    this.show = function() {
        fill(color);
        ellipse(
            coordinates.xcenter,
            coordinates.ycenter,
            coordinates.xradius,
            coordinates.yradius
        );
    };
}