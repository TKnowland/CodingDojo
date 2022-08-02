namespace Humans;

class Ninja : Human
{

    public Ninja(string name) : base(name)
    {
        Dexterity = 175;
    }

    public override int Attack(Human target)
    {
        Random rand = new Random();
        int critChance = rand.Next(0,5);
        int dmg = Dexterity * 5;
        if (critChance == 0)
        {
            dmg += 10;
        }
        target.Health -= dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
        return target.Health;   
    }

    public int Steal(Human target)
    {
        target.Health -= 5;
        Health += 5;
        return target.Health;
    }
}