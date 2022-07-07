from classes.deck import Deck
import random

bicycle = Deck()
game_over = False
hit_options = ['y', 'n']


def hit():
    print("------------")
    hit = input("Hit? (y/n): ")
    if hit.lower() == 'y':
        bicycle.draw_card()
        if bicycle.total > 21:
            game_over = True
        if bicycle.cpu_total > 21:
            game_over = True
    elif hit.lower() == 'n':
        print("------------")
        print(f"cpu total: {bicycle.cpu_total}")
        print(f"Your total: {bicycle.total}")
        if bicycle.cpu_total > bicycle.total:
            print("------------")
            print("LOSE")
            game_over = True
        elif bicycle.cpu_total == bicycle.total:
            print("------------")
            print("TIE")
            game_over = True
        else:
            print("------------")
            print("WIN")
            game_over = True



def cpu_hit():
    hit = random.choice(hit_options)
    if hit == 'y':
        bicycle.draw_cpu_card()



def game_loop():
    bicycle.draw_card()
    bicycle.draw_card()
    bicycle.draw_cpu_card()
    bicycle.draw_cpu_card()
    while game_over == False:
        game_over = True
        hit()

game_loop()

