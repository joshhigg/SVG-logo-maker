// Import shapes constructors to test
const shapes = require('../lib/shapes');

// Test Circle constructor to make sure it is functioning properly
describe('Circle', () => {
    it('should correctly create Circle object', () => {
        const circle = new shapes.Circle();
        circle.cx = 150;
        circle.cy = 100;
        circle.r = 80;
        circle.fill = 'red';

        expect(circle.getSvg()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>')
 
    })
});

// Test Triangle constructor to make sure it is functioning properly
describe('Triangle', () => {
    it('should correctly create Triangle object', () => {
        const triangle = new shapes.Triangle();
        triangle.points = '150,0 20,200 280,200';
        triangle.fill = 'red';
        
        expect(triangle.getSvg()).toEqual('<polygon points="150,0 20,200 280,200" fill="red"/>');
    })
});

// Test Square constructor to make sure it is functioning properly
describe('Square', () => {
    it('should correctly create Square object', () => {
        const square = new shapes.Square();
        square.x = 50
        square.y = 10
        square.width = 200
        square.height = 200
        square.fill = 'blue';

        expect(square.getSvg()).toEqual('<rect x="50" y="10" width="200" height="200" fill="blue"/>')
    })
});

