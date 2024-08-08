const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./Lib/shapes");
const { writeFile } = require('fs/promises');
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.shapeElement}
  ${this.textElement}
</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="100" y="105" font-family="Arial" font-size="24" fill="${color}" text-anchor="middle" alignment-baseline="middle">${text}</text>`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}
// Array of questions for user input
const question = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];
async function init() {
    console.log("Starting init");
    const svg_file = "logo.svg";
    const answers = await inquirer.prompt(question);
    // Validate user text
    if (answers.text.length < 1 || answers.text.length > 3) {
        console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
    }
    console.log("User text: [" + answers.text + "]");
    const user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");
    const user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");
    const user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]");
    // Determine shape
    let user_shape;
    switch (user_shape_type.toLowerCase()) {
        case "square":
            user_shape = new Square();
            console.log("User selected Square shape");
            break;
        case "circle":
            user_shape = new Circle();
            console.log("User selected Circle shape");
            break;
        case "triangle":
            user_shape = new Triangle();
            console.log("User selected Triangle shape");
            break;
        default:
            console.log("Invalid shape!");
            return;
    }
    user_shape.setColor(user_shape_color);
    // Create a new Svg instance and add the shape and text elements to it
    const svg = new Svg();
    svg.setTextElement(answers.text, user_font_color);
    svg.setShapeElement(user_shape);
    const svgString = svg.render();
    // Print shape to log
    console.log("Displaying shape:\n\n" + svgString);
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    try {
        await writeFile(svg_file, svgString);
        console.log("Data written to file successfully");
    } catch (err) {
        console.error("Error writing to file:", err);
    }
}
init();
