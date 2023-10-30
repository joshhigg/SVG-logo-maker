const shapes = require('../lib/shapes');

describe('Circle', () => {
    it('should correctly create Circle object', () => {
        const cx = 150;
        const cy = 100;
        const r = 80;
        const fill = 'red';
        const circle = new shapes.Circle(cx, cy, r, fill);
        
        expect(circle.cx).toBe(cx);
        expect(circle.cy).toBe(cy);
        expect(circle.r).toBe(r);
        expect(circle.fill).toBe(fill);
    })
});

describe('Triangle', () => {
    it('should correctly create Triangle object', () => {
        const points = '150,0 20,200 280,200';
        const fill = 'red';
        const triangle = new shapes.Triangle(points, fill);
        
        expect(triangle.points).toBe(points);
        expect(triangle.fill).toBe(fill);
    })
});

describe('Square', () => {
    it('should correctly create Square object', () => {
        const x = 50;
        const y = 10;
        const width = 200;
        const height = 200;
        const fill = 'red';
        const square = new shapes.Square(x, y, width, height, fill);
        
        expect(square.x).toBe(x);
        expect(square.y).toBe(y);
        expect(square.width).toBe(width);
        expect(square.height).toBe(height);
        expect(square.fill).toBe(fill);
    })
});