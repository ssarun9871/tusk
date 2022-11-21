//parentNode
var itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// //console.log(itemList.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
// itemList.elementNode.style.backgroundColor = '#f4f4f4';
// //console.log(itemList.elementNode.elementNode);

//childrenNode
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent ='Hello 1'

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);
 
//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello 1';
newDiv.setAttribute('title','Hello div');


var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
console.log(newDiv.innerText);


//adding hello world before item lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);



//adding hello world before item1
var newItem = document.createElement('li');
newItem.className = 'list-group-item';
var newItemText = document.createTextNode('Hello World');
newItem.appendChild(newItemText);

var itemContainer = document.querySelector('.list-group');
var item1 = document.querySelectorAll('.list-group-item');
itemContainer.insertBefore(newItem,item1[0]);