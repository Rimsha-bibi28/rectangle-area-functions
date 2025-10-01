const areaArrow = (length, width) => length * width;

function areaNamed(length, width) {
    return length * width;
}

const areaAnonymous = function(length, width) {
    return length * width;
};


let length = 20;
let width = 7;

console.log("Using Fat Arrow Function: " + areaArrow(length, width));
console.log("Using Named Function: " + areaNamed(length, width));
console.log("Using Anonymous Function: " + areaAnonymous(length, width));
