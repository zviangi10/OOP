const {Circle, Square, Triangle} = require("./shapes")

//Circle Shape
describe('Circle', () => {
    test('renders correctly', ()=> {
    const Shape = new Circle();
    var color =('green')
    Shape.SetColor('color');
    expect(shape.render()).toEqual(`<circle r="80" cx="100" height="200" width="200" fill="${this.color}" /> `);
});
});
//Square Shape
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color =('blue')
        shape.SetColor(color);
        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" style="fill:blue;" />`);
    });
});
//Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.SetColor(color);
        expect(shape.render()).toEqual(`<polygon points="100,20 40,180 160,180" style="fill:pink;stroke:black;stroke-width:2" />`);
    });
});
