

def countdown(num):
    list = []
    while num >= 0:
        list.append(num)
        num -= 1
    return list

print(countdown(10))


def print_and_return(list):
    print(list[0])
    return list[1]

nums = [1, 2]

print(print_and_return(nums))


def first_plus_length(nums):
    sum = nums[0] + len(nums)
    return sum

nums2 = [1, 2, 3, 4, 5]

print(first_plus_length(nums2))

def greater_than_second(nums):
    new_list = []
    if len(nums) < 2:
        return False
    for i in nums:
        if i > nums[1]:
            new_list.append(i)

    return new_list

nums3 = [5,2,3,2,1,4]
nums4 = [3]

print(greater_than_second(nums3))
print(greater_than_second(nums4))

def length_value(nums):
    new_list = []
    length = nums[0]
    value = nums[1]
    while length > 0:
        new_list.append(value)
        length -= 1
    return new_list

nums5 = [4, 7]
nums6 = [6, 2]

print(length_value(nums5))
print(length_value(nums6))
