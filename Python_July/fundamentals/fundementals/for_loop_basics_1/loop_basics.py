#basic
for i in range(1, 151):
    print(i)

#multiples of five
for i in range(5, 1001, 5):
    print(i)

#counting, the dojo way
for i in range(1,101):
    if i%10 == 0:
        print("Coding Dojo")
    elif i%5 == 0:
        print("Coding")
    else:
        print(i)

#whoa. that sucker's huge
sum = 0
for i in range(1, 500000, 2):
    sum += i
print(sum)

#countdown by fours
for i in range(2018, 0, -4):
    print(i)

#flexible counter
def mult(low_num, high_num, mult):
    for i in range(low_num, high_num + 1):
        if i % mult == 0:
            print(i)

mult(2, 9, 3)