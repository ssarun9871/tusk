
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
    localStorage.setItem("moObj",myObj_serialized);
    // localStorage.setItem('Nam', name);
    // localStorage.setItem('Email', email);
    // localStorage.setItem('Phone', phone);
}


