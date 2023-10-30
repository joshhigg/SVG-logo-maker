// Class constructor for Circle.  Will return SVG code with user inputs
class Circle {
    constructor(cx, cy, r, fill) {
        this.cx = cx,
        this.cy = cy,
        this.r = r,
        this.fill = fill;
    }
    getSvg() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}"/>`
    }
};

// Class constructor for Triangle.  Will return SVG code with user inputs
class Triangle {
    constructor(points, fill) {
        this.points = points,
        this.fill = fill;
    }
    getSvg() {
        return `<polygon points="${this.points}" fill="${this.fill}"/>`;
    }
};

// Class constructor for Square.  Will return SVG code with user inputs
class Square {
    constructor(x, y, width, height, fill) {
        this.x = x,
        this.y = y,
        this.width = width,
        this. height = height,
        this.fill = fill;
    }
    getSvg() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}"/>`;
    }
};

// Export each class constructor
module.exports = {
    Circle,
    Triangle,
    Square
};