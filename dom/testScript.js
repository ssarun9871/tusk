
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
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';

for(let i =0;i<items.length;i++){
    items[i].style.fontWeight ='bold';
}

//by TagName
var li = document.getElementsByTagName('li');
li[2].style.backgroundColor = 'green';

for(let i =0;i<li.length;i++){
    li[i].style.fontWeight ='bold';
}

//by querySelector
var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor = 'green';

var item3 = document.querySelector('.list-group-item:nth-child(3)');
item3.style.display = 'none';

// //by querySelectorAll
var listGroupItem  = document.querySelectorAll('.list-group-item');
listGroupItem[1].style.color = 'green'; 

for(let i=1;i<listGroupItem.length;i+=2){
    if(i%2==0){
        listGroupItem[i].style.color = 'green';
    }
}
console.log(listGroupItem[0].innerText);