// declare class
class Shape {
    constructor() {
        this.color = "blue";
    }
    
    drawShape(){
        console.log(this.color);
    };
    calculateArea(){

    };
};
module.exports = Shape;
// export class using module.exports