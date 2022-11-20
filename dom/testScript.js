
// document.title = "Hello";
// console.log(document.title);
// console.log(document.head);
// console.log(document.URL)
// console.log(document.all[10]);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

console.log(headerTitle);
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
//console.log(headerTitle.innerHTML);

headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';

var addItems = document.getElementsByClassName('title')
addItems[0].style.fontWeight = 'bold';
addItems[0].style.color = 'green';


//by ClassName
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// for(let i =0;i<items.length;i++){
//     items[i].style.fontWeight ='bold';
// }

//by TagName
var li = document.getElementsByTagName('li');
li[2].style.backgroundColor = 'green';

for(let i =0;i<li.length;i++){
    li[i].style.fontWeight ='bold';
}
