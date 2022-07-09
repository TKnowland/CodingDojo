new_team = []

players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33,
        "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32,
        "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

class Player:
    new_team = []
    
    def __init__(self, player_info):
        self.player_info = player_info

    def __repr__(self):
        return repr(self.player_info["name"])
    
    def print_info(self):
        print(self.player_info["name"])
    
    @classmethod
    def get_team(cls, team_list):
        for i in range(0,len(team_list)):
            new_team.append(Player(team_list[i]))
            print(new_team[i])
        return new_team

kevin_durant = Player(players[0])
jason_tatum = Player(players[1])
kyrie_irving = Player(players[2])


for i in range(0,len(players)):
    new_team.append(Player(players[i]))
    print(new_team[i])

Player.get_team(players)


