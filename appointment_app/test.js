
var submit = document.getElementById('submit');
submit.addEventListener('click', addData);

function addData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
}


