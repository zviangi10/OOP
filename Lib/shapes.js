class Shape{

    constructor(){
        this.color=''
    }
    SetColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle r="80" cx="100" height="200" width="200" fill="${this.color}" /> `
    }
}

class Square extends Shape{
    render(){
        return `<rect width="200" height"200" x="150" y="125"  fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    render(){
        return `polygon points="100,20 40,180 160,180" 
        style="fill:${this.color};stroke:black;stroke-width:2" />`
    }
};

module.exports = {Circle, Square, Triangle}