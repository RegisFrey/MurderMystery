$(document).ready(function() {
    // adding inventory
    var key = $('<li>key</li>');
    $('#Inventory').append(key);
    key = $('<li>key 2</li>');
    $('#Inventory').append(key);
    key = $('<li>key 3</li>');
    $('#Inventory').append(key);
    
    // showing text
    $('Main-Text').text("Quick brown fox jumped over the lazy red dog.");
});