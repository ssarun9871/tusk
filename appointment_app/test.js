
var submit = document.getElementById('submit');
submit.addEventListener('click', addData);

function addData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    let obj ={
        name : name,
        email : email,
        phone : phone
    };
    
    let myObj_serialized = JSON.stringify(obj);
    localStorage.setItem(email,myObj_serialized);
    // localStorage.setItem('Nam', name);
    // localStorage.setItem('Email', email);
    // localStorage.setItem('Phone', phone);
}

 
 for(let i=0;i<localStorage.length;i++){
    let key=localStorage.key(i);
    let data = localStorage.getItem(key);
    let dataName = JSON.parse(data).name;

    var user = document.createElement('li');
    var text = document.createTextNode(dataName);

    user.appendChild(text);
    console.log(user);
    let target = document.querySelector('.usersList');
    
    target.appendChild(user);

 }
  




