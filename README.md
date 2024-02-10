# NAME OF PROJECT
by [Henry Zhang]

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Description](#description)
3. [Setup Requirements](#setup-requirements)
4. [Link](#link)
5. [Tests](#tests)
6. [Known Bugs](#known-bugs)
7. [License](#license)

## Technologies used
- HTML5
- JavaScript (Constructors, methods, and bjects, array, loop, if statements, functions)
- VS Code
- Git commands
- Test Driven Development

## Description
- This is an independent project assigned by Epicodus. 
- This project is to review 'Intermediate Javascript' course. 
- This page contains 'Tests' section to practice TDD. 

## Setup Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the directory. 
* Open `index.html` in your browser. 

## Link
https://henryzha1.github.io/4-pizza-parlor/

## Tests
```
Describe: Pizza();  
 
Test: "Returns an object with 6 properties of size, crust, toppings, sauce, special instructions, and price;  
Code: let myPizza = new Pizza("medium", "stuffed", ["pepperoni", "onions", "mushrooms"], "alfredo", "special instructions", 12);
Expected: Pizza { toppings: size: "medium", "stuffed", ["pepperoni", "onions", "mushrooms"], "alfredo", "special instructions", 12}

Describe: Pizza.prototype.getPrice();

Test: "Returns an int of the total cost of pizza with all selected customized options"
Code: pizza.getPrice();
Expected Output: 15 

Describe: handleCartSubmission()

Test: "Creates an object with all the inputed information"
Code: document.getElementById("shop").addEventListener("submit", handleCartSubmission);
Expected Output: myPizza;

Describe: updateTotalPrice()

Test: "Updates total price at bottom dynamically as users change options for their pizza using pizza.getPrice";
Code: updateTotalPrice();
Expected Output: changes myPizza.price and updates the website live

Describe: Pizza.prototype.addToCart();

Test: "Adds current pizza configuration to DOM"
Code: pizza.addToCart();
Expected Output: adds the current pizza configuration to the cart part of the DOM/website.
```
## Known Bugs
- No issues found as of the last update. Feel free to [reach out](mailto:henz51111@gmail.com) if encountered any.
- Last updated: January 26, 2024

## License
[MIT](/LICENSE.txt)
Copyright © 2024 Henry Zhang