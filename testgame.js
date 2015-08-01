var game_text = {};

game_text.start_descrip = new TextBlock(
	// description
	"So, I’m standing here in front of what seems to be a creepy yet mysteriously elegant mansion. Exactly, 7 sharp in the evening. The place has its own land so there weren’t any neighboring houses- mansions. Don’t get me wrong, it’s not my house. I could never afford this.<br/>A couple of weeks back I’d been given an invitation to a house party from someone named Meera. I had never met anyone named meera so I didn’t understand why I’d been invited at all. Though the letter was addressed to me. No typos, misspellings, nada. I’d debated whether to come but overall knew I had to because there must’ve been a reason.<br/>There had to be a reason an anonymous person had called out to me. I don’t know how the found me but it was intentional.",
	// now the options
	{
		'Enter House Party': function(){
			changeRoom('Main Hall');
			addTextBlock(game_text.mainhall);
		}
	}
);
game_text.mainhall = new TextBlock(
	// description
	"Once I enter, I find myself in the main hall. There are also three other people; two guys and a girl. The girl is standing off to the side as if to isolate herself. She has purple hair and piercings. While the two guys are speaking animatedly to each other. One of them is blonde with an average build and the other is huge! He’s taller than the blonde male and you could obviously tell that he’s some kind of body builder. It’s kinda scary.",
	// now the options
	{
		'Approach The Purple Haired Girl': function(){
            addTextBlock(game_text.elena1);
			addTextBlock(game_text.evonnie1);
		},
        'Go Over To The Two Guys': function(){
            addTextBlock(game_text.introguys);
		}
	}
);

game_text.elena1 = new TextBlock(
    // description
    "Hi...", false,"Elena"
    );
    
game_text.evonnie1 = new TextBlock(
    // description
    "....", 
    {
		'Introduce Yourself': function(){
            addTextBlock(game_text.elena2);
		}
	},"Evonnie"
    );

game_text.elena2 = new TextBlock(
    // description
    "... ... Uh, okay. Well, I'm Elena.",false,"Elena"
    );

game_text.evonnie2 = new TextBlock(
    "Cool...I'm..Evonnie.",
    //options
    {
        'Continue Talking To Evonnie': function(){
            addTextBlock(game_text.elena3);
		},
        'Go Over To The Two Guys': function(){
            addTextBlock(game_text.introguys);
		}
    },
    "Evonnie"
);

game_text.elena3 = new TextBlock(
    "",{},"Elena"
);
game_text.introguys = new TextBlock(
    "you see the guys",
    {}
);




game_text.obscenties = new TextBlock(
	"@#$! &^#%$. ... $#!^!!!",
	// no options here
	false,
	'You (the player)' // added speaker
);

game_text.vault_locked = new TextBlock(
	"The vault is locked :(",
	// no options here
	false
);
game_text.vault_opened = new TextBlock(
	"You unlocked the vault! You are a winner!",
	// no options here
	false
);
game_text.room2 = new TextBlock(
	// description
	"This room is full of keys.",
	// now the options
	{
		'Take a key': function(){
            if (checkInventory("mysterious key")) {
                console.log("already have mysterious key");
            }
            else {
                addInventory('mysterious key');
            }
		},
		'Go back': function(){
			changeRoom('Vault Room');
			addTextBlock(game_text.start_descrip);
		}
	}
);