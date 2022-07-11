// import using require
import {Shape} from "./shape";

// declare class
class Circle extends Shape{
    constructor(){
        super();
    };
    
    calculateArea(){

    };
}

const circle1 = new Circle;
console.log(Circle.color);

module.exports.Circle = Circle;


// export class using module.exports