//strict rules

'use strict'

//define array for shopping list items

const shoppingList = [
    'proteine',
    'creatina',
    'pollo',
];

//define variable for getting item from user input

const shoppingListItem = document.getElementById("input-item");
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', 
    
    function() {
        shoppingListItemValue = shoppingListItem.value;
        shoppingList.push(shoppingListItemValue);
});


//define variable for html item

const toBuyList = document.querySelector('.unstyled-list');

//define i variable for index usage

let i=0;

//cycle troughevery item and append in ul list

while  (i<shoppingList.length) {
    console.log(shoppingList[i])
    const toBuyListItem = document.createElement('li');
    toBuyListItem.append (shoppingList[i]);
    toBuyList.append(toBuyListItem);
    i++;
}

