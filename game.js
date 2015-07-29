$(document).ready(function() {
    // adding inventory
    addInventory("key");
    addInventory("wrench");
    addInventory("spoon");
    removeInventory("wrench");
    checkInventory("spoon");
    checkInventory("cat");
    // showing text
    updateMainText("Quick brown fox jumped over the lazy red dog hi.");
    updateMainText("I dislike turtles");
});

var inventory = [];

function updateMainText(txt){
    $('#Main-Text').text(txt);
}

function addInventory(item_name){
    $('#Inventory').append($('<li>'+item_name+'</li>'));
    inventory.push(item_name);
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