namespace Humans;

class Wizard : Human
{
    public Wizard(string name) : base(name)
    {
        Intelligence = 25;
        Health = 50;
    }

    public override int Attack(Human target)
    {
        int dmg = Intelligence * 5;
        Health += dmg;
        target.Health -= dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
        return target.Health;
    }

    public int Heal(Human target)
    {
        target.Health += 10 * Intelligence;
        return target.Health;
    }
}