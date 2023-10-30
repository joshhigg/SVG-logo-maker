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

class Triangle {
    constructor(points, fill) {
        this.points = points,
        this.fill = fill;
    }
    getSvg() {
        return `<polygon points="${this.points}" fill="${this.fill}"/>`;
    }
};

class Square {
    constructor(x, y, width, height, fill) {
        this.x = x,
        this.y = y,
        this.width = width,
        this. height = height;
    }
    getSvg() {
        `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}"/>`;
    }
};

module.exports = {
    Circle,
    Triangle,
    Square
};