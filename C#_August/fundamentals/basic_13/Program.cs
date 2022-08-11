static void PrintNumbers()
{
    for (int i = 1; i <= 255; i++) {
        Console.WriteLine(i);
    }
}

PrintNumbers();

static void PrintOdds()
{
    for (int i = 1; i <= 255; i++) {
        if (i %2 != 0) {
            Console.WriteLine(i);
        }
    }
}

PrintOdds();

static void PrintSum()
{
    int sum = 0;
    for (int i = 1; i <= 255; i++) {
        sum += i;
        Console.WriteLine($"New number: {i} Sum: {sum}" );
    }
}

PrintSum();

static void LoopArray(int[] numbers)
{
    foreach (int num in numbers) {
        Console.WriteLine(num);
    }
}

int[] nums = {1,2,3,4,5,6,7,8,9,10};

LoopArray(nums);

static int FindMax(int[] numbers)
{
    int maxValue = numbers[0];
    foreach (int num in numbers) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return maxValue;
}

int[] nums2 = {-1,12,13,-27,36,10};

Console.WriteLine(FindMax(nums2));

static void GetAverage(int[] numbers)
{
    int sum= 0;
    foreach (int num in numbers) {
        sum += num;
    }
    int avg = sum/numbers.Length;
    Console.WriteLine(avg);
}

int[] nums3 = {2,10,3};

GetAverage(nums3);

static int[] OddArray()
{
    int idx = 0;
    int[] odds = new int[255/2 + 1];
    for (int i = 1; i <= 255; i++) {
        if (i %2 != 0) {
            odds[idx] = i;
            ++idx;
        }
    }

    return odds;
}

OddArray();

static int GreaterThanY(int[] numbers, int y)
{
    int count = 0;
    foreach (int num in numbers) {
        if (num > y){
            ++count;
        }
    }

    return count;
}

int[] nums4 = {1,3,5,7};

Console.WriteLine(GreaterThanY(nums4, 3));

static void SquareArrayValues(int[] numbers)
{
    for (int i = 0; i < numbers.Length; i++) {
        numbers[i] *= numbers[i];
    }
}

int[] nums5 = {1,5,10,-10};
SquareArrayValues(nums5);

static void EliminateNegatives(int[] numbers)
{
    for (int i = 0; i < numbers.Length; i++) {
        if (numbers[i] < 0) {
            numbers[i] = 0;
        }
    }
}

int[] nums6 = {1,5,10,-2};
EliminateNegatives(nums6);

static void MinMaxAverage(int[] numbers)
{
    int minValue = numbers[0];
    int maxValue = numbers[0];
    int sum = 0;
    foreach (int num in numbers) {
        if (num > maxValue) {
            maxValue = num;
        }
        if (num < minValue) {
            minValue = num;
        }
        sum += num;
    }
    int avg = sum/numbers.Length;
    Console.WriteLine($"Max: {maxValue} Min: {minValue} Average: {avg}");

    // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array, 
    // the minimum value in the array, and the average of the values in the array.
}

int[] nums7 = {1,5,10,-2};
MinMaxAverage(nums7);

static void ShiftValues(int[] numbers)
{
    for (int i = 0; i < numbers.Length; i++) {
        if (i == numbers.Length - 1) {
            numbers[i] = 0;
        }
        else {
            numbers[i] = numbers[i + 1];
        }
    }
}

int[] nums8 = {1,5,10,7,-2};
ShiftValues(nums8);

static object[] NumToString(int[] numbers)
{
    object[] arrString = new object[numbers.Length];
    for (int i = 0; i < numbers.Length; i++) {
        if (numbers[i] < 0) {
            arrString[i] = "Dojo";
        }
        else {
            arrString[i] = numbers[i];
        }
    }
    return arrString;
}

int[] nums9 = {-1,-3,-2, 123};
NumToString(nums9);