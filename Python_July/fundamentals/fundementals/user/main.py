from operator import truediv


class User:
    is_rewards_member = False
    gold_card_points = 0
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
    
    def display_info(self):
        print("-------------")
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)
        print("-------------")
    
    def enroll(self):
        self.is_rewards_member = self.is_member()
        
    def spend_points(self, amount):
        if self.gold_card_points - amount < 0:
            print("You don't have the funds!")
        else:
            self.gold_card_points -= amount
        print(f"you have {self.gold_card_points} points")
    
    def is_member(self):
        if self.is_rewards_member:
            return True
        else:
            print("You are not yet a member!!")
            self.member_status = input("Would you like to become a member? (y/n): ")
            if self.member_status == 'y':
                self.gold_card_points += 200
                return True
            else:
                return False
        
    


tre = User("Tre", "Knowland", "treknowland@gmail.com", "17")
landon = User("Landon", "Applebaum", "awesome_email@gmail.com", "18")
hailey = User("Hailey", "Applebaum", "some_email@gmail.com")

tre.spend_points(50)
landon.enroll()
landon.spend_points(80)
landon.display_info()
tre.enroll()
tre.display_info()
hailey.spend_points(40)