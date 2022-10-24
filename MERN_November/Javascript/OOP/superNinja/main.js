
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

class Sensei extends Ninja {
    constructor(name, health, speed = 3, strength = 3, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom;
    }

    showStats(){
        super.showStats();
        console.log("Wisdom: " + this.wisdom)
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}



let ninja1 = new Ninja("BWEEE", 10)

// ninja1.showStats()
// ninja1.drinkSake()
// ninja1.showStats()

let sensei1 = new Sensei("BLARG", 10)

sensei1.showStats()
sensei1.speakWisdom()