
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

    axios.post('https://crudcrud.com/api/0ac2bdeff0054dc987b4aeca8347eb3d/data',obj)

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/0ac2bdeff0054dc987b4aeca8347eb3d/data')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            dataName = res.data[i].name;
            dataEmail = res.data[i].email;
            var li = `<li id="${dataEmail}">${dataName} <button  onClick="deleteuser('${dataEmail}')">delete</button>
            <button onClick="updateUser('${dataEmail}')">edit</button></li>`;
            let target = document.querySelector('.usersList');
            target.innerHTML = target.innerHTML + li;
        }
    })
})



 