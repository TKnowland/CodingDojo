
Deck NewDeck = new Deck();
Player Player1 = new Player("Zlimp");

class Card
{
    string Name;
    string Suit;
    int Val;
    public Card(string name, string suit, int val)
    {
        Name = name;
        Suit = suit;
        Val = val;
    }

    public void PrintInfo()
    {
        Console.WriteLine($"Card: {Name} of {Suit} || Value: {Val}");
    }
}

class Deck
{
    List<Card> Cards = new List<Card>();
    List<Card> Temp = new List<Card>();
    string[] Names = {"Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"};
    string[] Suits = {"Hearts","Diamonds","Clubs","Spades"};

    public Deck()
    {
        for (int i = 0; i < Suits.Length; i++)
        {
            for (int j = 0; j < Names.Length; j++)
            {
                Cards.Add(new Card(Names[j], Suits[i], j+1));
                Temp.Add(new Card(Names[j], Suits[i], j+1));
            }
        }
    }
    public void ShowCards()
    {
        for (int i = 0; i < Cards.Count; i++)
        {
            Cards[i].PrintInfo();
        }
    }

    public Card Deal()
    {
        Card TopCard = Cards[Cards.Count - 1];
        Cards.Remove(TopCard);
        return TopCard;
    }
    public void Reset()
    {
        Cards.Clear();
        foreach (Card card in Temp)
        {
            Cards.Add(card);
        }
    }

    public List<Card> Shuffle()
    {
        Random rand = new Random();
        List<Card> ReOrderedCards = new List<Card>();
        while (Cards.Count > 0)
        {
            Card randCard = Cards[rand.Next(0,Cards.Count)];
            Cards.Remove(randCard);
            ReOrderedCards.Add(randCard);
        }
        foreach (Card card in ReOrderedCards)
        {
            Cards.Add(card);
        }
        return Cards;
    }
}

class Player
{
    string Name;
    List<Card> Hand = new List<Card>();

    public Player(string name)
    {
        Name = name;
    }

    public Card Draw(Deck deck)
    {   
        Card TopCard = deck.Deal();
        Hand.Add(TopCard);
        return TopCard;
    }

    public void ShowHand()
    {
        foreach (Card card in Hand)
        {
            card.PrintInfo();
        }
    }

    public Card Discard(int index)
    {
        if (index > Hand.Count || index < 1)
        { 
            return null;
        }
        else
        {
            Card discarded = Hand[index-1];
            Hand.Remove(discarded);
            return discarded;
        }
    }   
}