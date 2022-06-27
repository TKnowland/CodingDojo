function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    console.log(pizza);
    return pizza;

}

var randomPizza = {
    crustType: ["hand tossed", "pan crust", "deep dish", "stuffed"],
    sauceType: ["tomato", "marinara", "alfredo", "rannnnnnnnnnnnch"],
    cheese: ["mozzarella", "cheddar", "gouda", "munster", "provolone"],
    toppings: ["pepperoni", "sausage", "bell pepper", "onions"],
    pizza: function(numOfCheese, numOfTopping) {
        this.cheese = ["mozzarella", "cheddar", "gouda", "munster", "provolone"];
        this.toppings = ["pepperoni", "sausage", "bell pepper", "onions"];
        console.log("NEW PIZZA!!");
        console.log("Crust: " + this.crustType[Math.floor(Math.random() * this.crustType.length)]);
        console.log("Sauce: " + this.sauceType[Math.floor(Math.random() * this.sauceType.length)]);
        for (var i = 1; i <= numOfCheese; i++) {
            var listNum = Math.floor(Math.random() * this.cheese.length);
            var temp = this.cheese[this.cheese.length -1];
            console.log("Cheese" + i + ": " + this.cheese[listNum]);
            this.cheese[this.cheese.length - 1] = this.cheese[listNum];
            this.cheese[listNum] = temp;
            this.cheese.pop()
        }
        for (var i = 1; i <= numOfTopping; i++) {
            var listNum = Math.floor(Math.random() * this.toppings.length)
            var temp = this.toppings[this.toppings.length -1];
            console.log("Topping" + i + ": " + this.toppings[listNum])
            this.toppings[this.toppings.length - 1] = this.toppings[listNum];
            this.toppings[listNum] = temp;
            this.toppings.pop()
        }
    }
}


pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni, sausage");
pizzaOven("hand tossed", "marinara", "mozzarella, feta", "mushrooms, olives, onions");
pizzaOven("bread", "wet", "melted", "meat");
pizzaOven("moldy", "italian dressing", "blue cheese, munster", "an entire ham");
randomPizza.pizza(3, 2)
randomPizza.pizza(2, 1)
randomPizza.pizza(1, 4)
randomPizza.pizza(1, 2)