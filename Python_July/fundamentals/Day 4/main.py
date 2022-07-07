#from package_name import module/variable/function/class
from classes.animal import Animal
from classes.dog import Dog
from classes.cat import Cat
"""
max = Animal("Max", "Bungalo", "undefined")

max.print_info()

jagger = Dog("Jagger", "jingo", "Real", "dog color")
jagger.print_info()
jagger.walk_animal()

chester = Cat("Chester", "porsmellio", "orange", "3")
chester.print_info()
chester.walk_animal()
"""
print("****MENU OPTIONS***")
print("0) Exit this program")
print("1) Add a CAT")
print("2) Add a DOG")
print("3) Print all dogs")
print("4) Print all cats")
option = input("Select an option: ")

while option != '0':
    if option == '1':
        name = input("Name of your cat: ")
        owner = input("Who is the owner?: ")
        breed = input("What's the breed?: ")
        age = input("Age of the cat: ")
        new_cat = Cat(name, owner, breed, age)
    elif option == '2':
        name = input("Name of your dog: ")
        owner = input("Who is the owner?: ")
        breed = input("What's the breed?: ")
        color = input("Color of the dog: ")
        new_dog = Dog(name, owner, breed, color)
    elif option == '3':
        Dog.print_all_dogs()
    elif option == '4':
        Cat.print_all_cats()
    print("****MENU OPTIONS***")
    print("0) Exit this program")
    print("1) Add a CAT")
    print("2) Add a DOG")
    print("3) Print all dogs")
    print("4) Print all cats")
    option = input("Select an option: ")