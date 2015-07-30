var game_text = {};

game_text.start_descrip = new TextBlock(
	// description
	"An empty and boring room except for a giant locked vault. There is a door to another room.",
	// now the options
	{
		'Check the vault': function(){
			if ( checkInventory('mysterious key') ) {
				removeInventory('mysterious key');
				addTextBlock(game_text.vault_opened);
			} else {
				addTextBlock(game_text.vault_locked);
			}
		},
		'Go to the other room': function(){
			changeRoom('Key Room');
			addTextBlock(game_text.room2);
		},
		'Shout obscenities': function(){
			addTextBlock(game_text.obscenties);
		}
	}
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