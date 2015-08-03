$(document).ready(function() {
    // adding inventory
    /*
    addInventory("key");
    addInventory("wrench");
    addInventory("spoon");
    removeInventory("wrench");
    checkInventory("spoon");
    checkInventory("cat");
    // showing text
    updateMainText("Quick brown fox jumped over the lazy red dog hi.");
    updateMainText("I dislike turtles");
    */
    changeRoom('In Front of The Mansion');
    addTextBlock(game_text.start_descrip);
});

var inventory = [];

function updateMainText(txt){
    $('#Main-Text').text(txt);
}
function TextBlock(txt, options, speaker){
	// store these values 
	this.txt = txt;
	this.options = options || false;
	
	// make speaker optional 
	// by providing a speaker the text will show as dialogue
	this.speaker = speaker || '';
}

function changeRoom(room){
	// clear all text boxes
    $('#Main-Text').empty();
	// set room name
    $('#Meatballs').text(room);
	// set room background
}

function addTextBlock(textblock){
	// if options is false, do not remove previous options but insert new block above them. 
	
	// create a new text block div and insert
	$('#Main-Text').append($('<p>'+textblock.txt+'</p>'));
	// if style is dialogue
	// then add speaker name and image
	
// if options is false, do not remove previous options but insert new block above them.
    if (textblock.options) {
        $('#Spaghetti-options').empty();
        var opts = Object.keys(textblock.options);
        for (var i = 0; i < opts.length; i++) {
            var link = $('<a href="#">'+opts[i]+'</a>');
            link.bind("click", textblock.options[opts[i]]) // textblock.options['Check the vault']
            $('#Spaghetti-options').append(link);
                // more statements
        }
    }
}

function addInventory(item_name){
    $('#Inventory').append($('<li>'+item_name+'</li>'));
    inventory.push(item_name);
    // show on screen...
    console.log(inventory);
}

function removeInventory(item_name){
    var index = inventory.indexOf(item_name);
    inventory.splice(index, 1);
    
    $('#Inventory li:contains('+item_name+')').remove();
    console.log(inventory);
}

function checkInventory(item_name){
    var is_not_held = inventory.indexOf(item_name) === -1; // true item is not in inventory 
    // 0 or higher = true, -1 = false
    if(is_not_held){
        console.log(item_name+" is NOT in inventory");}
    else{
        console.log(item_name+" is in inventory");}
    return !is_not_held;
}