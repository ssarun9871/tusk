
var submit = document.getElementById('submit');
submit.addEventListener('click', addData);

function addData(e) {
   e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if(localStorage.getItem(email)!==null){
        alert("This email id already registered !");
        return;
    }

    let obj ={
        name : name,
        email : email,
        phone : phone
    };
    console.log(obj);
    axios.post('https://crudcrud.com/api/0ac2bdeff0054dc987b4aeca8347eb3d/data',obj)

}
