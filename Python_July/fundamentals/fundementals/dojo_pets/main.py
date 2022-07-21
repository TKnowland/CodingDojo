
class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    
    def walk(self):
        self.pet.play()
        return self
    
    def feed(self):
        self.pet.eat()
        return self
    
    def bathe(self):
        self.pet.noise()
        return self

class Pet:
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy
    
    def sleep(self):
        print(f"{self.name} is taking a nap")
        self.energy += 25
        return self
    
    def eat(self):
        print(f"feeding {self.name}")
        self.energy += 5
        self.health += 10
        return self
    
    def play(self):
        print(f"{self.name} is being taken for a walk")
        self.health += 5
        self.energy -= 25
        return self

    def noise(self):
        print("PET NOISES!!!")
        return self

dog = Pet("bungo", "dog", "kickflip", 100, 100)
ninja = Ninja("ungo", "quanker", "bone", "flavorless sustinance", dog)

ninja.feed().walk().bathe()