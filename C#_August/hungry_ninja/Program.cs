Buffet DojoBuffet = new Buffet();
Ninja ninja = new Ninja();

ninja.Eat(DojoBuffet.Serve());
ninja.Eat(DojoBuffet.Serve());
ninja.Eat(DojoBuffet.Serve());

class Food
{
    public string Name;
    public int Calories;
    public bool IsSpicy; 
    public bool IsSweet; 

    public Food(string name, int calories, bool isSpicy, bool isSweet)
    {
        Name = name;
        Calories = calories;
        IsSpicy = isSpicy;
        IsSweet = isSweet;
    }
}

class Buffet
{
    public List<Food> Menu;
    //constructor
    public Buffet()
    {
        Menu = new List<Food>()
        {
            new Food("Example", 1000, false, false),
            new Food("spaghebto", 400, false, false),
            new Food("nuts", 10000, true, true),
            new Food("peanut butter and crack sandwich", 150000, true, false),
            new Food("Gucci belt", 100, false, false)

        };
    }
    public Food Serve()
    {
        Random rand = new Random();
        Food Item = Menu[rand.Next(0, Menu.Count)];
        return Item;
    }
}

class Ninja
{
    private int calorieIntake;
    public List<Food> FoodHistory;
    
    // add a constructor
    public Ninja()
    {
        calorieIntake = 0;
        FoodHistory = new List<Food>();
    }
    // add a public "getter" property called "IsFull"
    public bool IsFull
    {
        get
        {
            return calorieIntake > 1200;
        }
    }   
    
    // build out the Eat method
    public void Eat(Food item)
    {
        if (!IsFull)
        {
            calorieIntake += item.Calories;
            FoodHistory.Add(item);
            Console.WriteLine($"Food: {item.Name} Spicy: {item.IsSpicy} Sweet: {item.IsSweet}");
        }
        else
        {
            Console.WriteLine("WARNING!!: You are FULL. If more food is eaten you wil eXPLOT?!?!");
        }
    }
}