

static void randomArray(){
    Random rand = new Random();
    int[] randomArr = new int[10];
    randomArr[0] = rand.Next(5, 25);
    int minVal = randomArr[0];
    int maxVal = randomArr[0];
    int sum = 0;
    for (int i = 0; i < randomArr.Length; i++) {
        randomArr[i] = rand.Next(5, 25);
        sum += randomArr[i];
        if (randomArr[i] > maxVal) {
            maxVal = randomArr[i];
        }
        if (randomArr[i] < minVal) {
            minVal = randomArr[i];
        }
    }

    Console.WriteLine($"Min: {minVal} Max: {maxVal} Sum: {sum}");
}

randomArray();


static int TossCoin() {
    Random rand = new Random();
    int result = rand.Next(0,2);
    Console.WriteLine("Tossing a coin!");
    if (result == 1) {
        Console.WriteLine("Heads!");
    }
    if (result == 0) {
        Console.WriteLine("Tails!");
    }
    return result;
}

static double TossMultipleCoins(int num){
    int i = 0;
    double numHeads = 0;
    while (i < num) {
        int coinToss = TossCoin();
        if (coinToss == 1) {
            numHeads += 1;
        }
        ++i;
    }
    Console.WriteLine(numHeads);
    double ratio = numHeads/num;
    return ratio;
}

Console.WriteLine(TossMultipleCoins(10));


static List<string> Name(){
    List<string> names = new List<string>();
    List<string> newNames = new List<string>();
    names.Add("Todd");
    names.Add("Tiffany");
    names.Add("Charlie");
    names.Add("Geneva");
    names.Add("Sydney");
    foreach (string name in names) {
        if (name.Length > 5) {
            newNames.Add(name);
        }
    }
    foreach (string name in newNames) {
        Console.WriteLine(name);
    }

    return newNames;
}

Name();