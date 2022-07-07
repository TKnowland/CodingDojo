from . import card
import random

class Deck:
    total = 0
    cpu_total = 0

    def __init__( self ):
        suits = [ "spades" , "hearts" , "clubs" , "diamonds" ]
        self.cards = []
        point_val = 0

        for s in suits:
            for i in range(1,14):
                str_val = ""
                if i == 1:
                    point_val = 1
                    str_val = "Ace"
                elif i == 11:
                    str_val = "Jack"
                    point_val = 10
                elif i == 12:
                    str_val = "Queen"
                    point_val = 10
                elif i == 13:
                    str_val = "King"
                    point_val = 10
                else:
                    point_val = i
                    str_val = str(i)
                self.cards.append( card.Card( s , point_val , str_val ) )

    def show_cards(self):
        for card in self.cards:
            card.card_info()

    def draw_card(self):
        new_card = random.choice(self.cards)
        new_card.card_info()
        self.cards.remove(new_card)
        if new_card.string_val == "Ace":
            val = input("Is your card worth 1 or 11 point?: ")
            if val == '11':
                new_card.point_val = 11
                new_card.card_info()
            elif val == '1':
                new_card.point_val = 1
                new_card.card_info()
            else:
                print("stupid")
                new_card.point_val = 100
                new_card.card_info
        self.total += new_card.point_val
        if self.total > 21:
            print("BUST")
        elif self.total == 21:
            print("------------")
            print("WIN")
        else:
            print("------TOTAL------")
            print(self.total)
    
    def draw_cpu_card(self):
        new_card = random.choice(self.cards)
        self.cards.remove(new_card)
        self.cpu_total += new_card.point_val
        if self.cpu_total == 21:
            print("------------")
            print("LOSE")
        elif self.cpu_total > 21:
            print("------------")
            print("WIN")
        
        
                
                
        
