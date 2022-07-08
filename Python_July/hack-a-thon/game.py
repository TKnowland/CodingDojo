from classes.deck import Deck
import random

bicycle = Deck()
hit_options = ['y', 'n']


def hit():
    print("------------")
    hit = input("Hit? (y/n): ")
    if hit.lower() == 'y':
        bicycle.draw_card()
        if bicycle.total > 21:
            print("------------")
            print("BUST")
            return True
        else:
            print("------TOTAL------")
            print(bicycle.total)
            return False
    elif hit.lower() == 'n':
        print("------------")
        print(f"cpu total: {bicycle.cpu_total}")
        print(f"Your total: {bicycle.total}")
        if bicycle.cpu_total > bicycle.total:
            print("------------")
            print("LOSE")
            return True
        elif bicycle.cpu_total == bicycle.total:
            print("------------")
            print("TIE")
            return True
        elif bicycle.total == 21:
            print("------------")
            print("WIN")
        else:
            print("------------")
            print("WIN")
            return True
    return False



def cpu_hit():
    hit = random.choice(hit_options)
    if hit == 'y':
        bicycle.draw_cpu_card()



def game_loop():
    game_over = False
    bicycle.draw_card()
    bicycle.draw_card()
    bicycle.draw_cpu_card()
    bicycle.draw_cpu_card()
    while game_over == False:
        game_over = hit()

game_loop()

