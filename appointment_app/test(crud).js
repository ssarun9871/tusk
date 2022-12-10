
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

    axios.post('https://crudcrud.com/api/1a66192cf86e4b8d917962c8dc086bef/data',obj)

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/1a66192cf86e4b8d917962c8dc086bef/data')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            dataName = res.data[i].name;
            dataEmail = res.data[i].email;
            id = res.data[i]._id;
            var li = `<li id="${id}">${dataName} <button  onClick="deleteuser('${id}')">delete</button>
            <button onClick="updateUser('${id}')">edit</button></li>`;
            let target = document.querySelector('.usersList');
            target.innerHTML = target.innerHTML + li;
        }
    })
})


function deleteuser(em){
    let element = document.getElementById(em);
         
    axios.delete(`https://crudcrud.com/api/1a66192cf86e4b8d917962c8dc086bef/data/${em}`)
    .then(element.remove());

 }
 function deleteUserFromScreen(em){
    let parentNode = document.querySelector('.usersList');
    let childNode = document.getElementById(em);
    parentNode.removeChild(childNode);
 }
 