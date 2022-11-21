var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
 
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

}






function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
 
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

//adding edit button
var itemForEdit = document.querySelectorAll('.list-group-item');

for(let i=0;i<itemForEdit.length;i++){
    var editButton = document.createElement('button');
    editButton.className= 'edit-button';
    var editButtonText = document.createTextNode('Edit');
    editButton.appendChild(editButtonText);
    itemForEdit[i].appendChild(editButton);
 }
