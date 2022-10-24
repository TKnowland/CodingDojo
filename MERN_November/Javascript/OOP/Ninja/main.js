
class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        let stats = ["Name: " + this.name, "Health: " + this.health, "Speed: " + this.speed, "Strength: " + this.strength];
        for(let i = 0; i < stats.length; i++){
            console.log(stats[i]);
        }
    }

    drinkSake() {
        this.health += 10;
    }
}

let ninja1 = new Ninja("BWEEE", 10)

ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()