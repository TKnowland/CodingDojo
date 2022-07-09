class BankAccount:
    # don't forget to add some default values for these parameters!
    list_of_accounts = []
    
    def __init__(self, int_rate, balance, account_type): 
        self.int_rate = int_rate
        self.balance = balance
        self.account_type = account_type
        BankAccount.list_of_accounts.append(self)
    
    
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
        print(f"Your balance: ${self.balance}")
        return self
    
    
    def yield_interest(self):
        if self.balance > 0:
            self.balance *= 1 + self.int_rate
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = []
    
    def make_deposit(self):
        if User.has_account(self.account):
            if User.deposit_check():
                #accounts are reffered to as the index the correspond with in the account list e.g 0, 1, 2 etc.
                account_num = int(input("Which account would you like to deposit too?: "))
                amount = int(input("How much would you like to deposit?: "))
                self.account[account_num].deposit(amount)
            else:
                self.make_withdrawl(self)
        return self
    
    def make_withdrawl(self):
        if User.withdrawl_check():
            account_num = int(input("Which account would you like to withdraw from?: "))
            amount = int(input("How much would you like to withdraw?: "))
            self.account[account_num].withdraw(amount)
        return self
    
    def new_account(self):
        int_rate = 0.01
        if input("Would you like to make a new account?(y/n): ").lower() == 'y':
            account_type = input("Would you like to open a savings or checking account?: ")
            self.account.append(BankAccount(int_rate, 0, account_type))
            User.make_deposit(self)
        else:
            print("You have no accounts")
            self.new_account()
        return self

    def display_balance(self):
        for i in range(0, len(self.account)):
            print(f"User: {self.name} - Your {self.account[i].account_type} balance: ${self.account[i].balance}")
        return self
    
    @staticmethod
    def deposit_check():
        y_n = input("Would you like to make a deposit into your account?(y/n): ")
        if y_n.lower() == 'y':
            return True
        else:
            return False
    
    @staticmethod
    def withdrawl_check():
        y_n = input("Would you like to make a withdrawl from your account?(y/n): ")
        if y_n.lower() == 'y':
            return True
        else:
            return False
    
    @staticmethod
    def has_account(arr):
        if len(arr) > 0:
            return True
        else:
            return False
     
tre = User("Tre knowland", "treknow@gmail")
tre.new_account().new_account().display_balance()


