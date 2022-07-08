class BankAccount:
    # don't forget to add some default values for these parameters!
    list_of_accounts = []
    
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
    
    
    def deposit(self, amount):
        self.balance += amount
        return self
    
    
    def withdraw(self, amount):
        if self.balance - amount < 0:
            print("Insufficient funds: charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self
    
    
    def display_account_info(self):
        print(f"Your balance: {self.balance}")
        return self
    
    
    def yield_interest(self):
        if self.balance > 0:
            self.balance *= 1 + self.int_rate
        return self


account1 = BankAccount(.05, 0)
account2 = BankAccount(.02, 120)

account1.deposit(2000).deposit(536).deposit(56.24).withdraw(600).yield_interest().display_account_info()
account2.deposit(40).deposit(1000).withdraw(150).withdraw(120).withdraw(6.68).withdraw(200).yield_interest().display_account_info()
