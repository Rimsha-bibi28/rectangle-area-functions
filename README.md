# 📐 Rectangle Area - JavaScript Functions

This project demonstrates how to calculate the **area of a rectangle** using three different types of functions in JavaScript:

1. **Fat Arrow Function**
2. **Named Function**
3. **Anonymous Function**

---

## 🚀 Code Example

```javascript
// 1. Fat Arrow Function
const areaArrow = (length, width) => length * width;

// 2. Named Function
function areaNamed(length, width) {
    return length * width;
}

// 3. Anonymous Function
const areaAnonymous = function(length, width) {
    return length * width;
};

// Example
let length = 10;
let width = 5;

console.log("Using Fat Arrow Function: " + areaArrow(length, width));
console.log("Using Named Function: " + areaNamed(length, width));
console.log("Using Anonymous Function: " + areaAnonymous(length, width));

🖥 Output
Using Fat Arrow Function: 50
Using Named Function: 50
Using Anonymous Function: 50

📚 Learning Outcome

Difference between fat arrow, named, and anonymous functions

Applying them to a real-world mini-task (area of rectangle)

Practicing clean code structure

🤝 Contribute

Want to add more shapes (circle, triangle, square) using the same methods? Fork this repo and contribute!

⭐ Don’t forget to star this repo if you found it useful!
```
