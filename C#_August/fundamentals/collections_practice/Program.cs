// See https://aka.ms/new-console-template for more information
Random rand = new Random();

int[] oneToFive = {1,2,3,4,5};

string[] names = {"Tim", "Martin", "Nikki", "Sora"};

bool[] alternate = {true, false, true, false, true, false, true, false, true, false};



List<string> iceCreamFlavors = new List<string>();
iceCreamFlavors.Add("Vanilla");
iceCreamFlavors.Add("Neopolitan");
iceCreamFlavors.Add("Cookies n' Cream");
iceCreamFlavors.Add("pistachio");
iceCreamFlavors.Add("Peanut Butter and Jelly");

Console.WriteLine(iceCreamFlavors.Count);
Console.WriteLine(iceCreamFlavors[2]);
iceCreamFlavors.Remove(iceCreamFlavors[3]);
Console.WriteLine(iceCreamFlavors.Count);


Dictionary<string, string> people = new Dictionary<string, string>();

for (int i = 0; i < names.Length; i++) {
    people.Add(names[i], iceCreamFlavors[rand.Next(0, iceCreamFlavors.Count-1)]);
} 

foreach (KeyValuePair<string, string> person in people) {
    Console.WriteLine(person.Key + " - " + person.Value);
}

