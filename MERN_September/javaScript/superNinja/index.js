class Ninja {
    constructor(name, health = 80, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`Name: ${this.name} -- Health: ${this.health} -- Speed: ${this.speed} -- Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const sbeve = new Ninja("Sbeve")
sbeve.drinkSake()
sbeve.showStats()

const splinter = new Sensei("Master Splinter")
splinter.speakWisdom()
splinter.showStats()

