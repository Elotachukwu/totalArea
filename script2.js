var values = {
    a: 8,
    b: 2,
    c: 3.14,
    d: 4,
    e: 5,
    f: ""
    }

function totalArea() {
    let pi =  values.c;
    let radius = values.d;
    let length = values.e;
    let breadth = values.a;

    // Area of a circle
    const circleArea = pi * radius**2;
        
    // Area of a rectangle
    const rectArea = length * breadth;
    
    let Area = circleArea + rectArea;

    return Area;
}

// let finalArea = totalArea();
values.f = totalArea();

// console.log("The total area as calculated by Chiagoziem is " + totalArea + "mm squared");
console.log(values)