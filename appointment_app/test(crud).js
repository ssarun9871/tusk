
var submit = document.getElementById('submit');
submit.addEventListener('click', addData);
var flag = false;
var id = "";

function addData(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let obj = {
        name: name,
        email: email,
        phone: phone
    };

    if (flag == false) {
        axios.post('https://crudcrud.com/api/8b97b1dc7e56472ebfbcf1f616f3fa1c/data', obj)
    }
    else {
        axios.put(`https://crudcrud.com/api/8b97b1dc7e56472ebfbcf1f616f3fa1c/data/${id}`, obj);
    }

    displayOnScreen(id,name);
    flag = false;
    id = "";
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/8b97b1dc7e56472ebfbcf1f616f3fa1c/data')
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                dataName = res.data[i].name;
                dataEmail = res.data[i].email;
                id = res.data[i]._id;
                displayOnScreen(id,dataName);
            }
        })
})

function displayOnScreen(id, name) {
    let li = `<li id="${id}">${name} <button  onClick="deleteuser('${id}')">delete</button>
    <button onClick="editUser('${id}')">edit</button></li>`;
    let target = document.querySelector('.usersList');
    target.innerHTML = target.innerHTML + li;
}


function deleteuser(id) {
    let element = document.getElementById(id);

    element.remove()
    axios.delete(`https://crudcrud.com/api/8b97b1dc7e56472ebfbcf1f616f3fa1c/data/${id}`)
}


function editUser(id) {
    flag = true;
    id = id;
    let name;
    let email;
    let phone;
    let obj = {};
    let elementToRemove = document.getElementById(id);
    elementToRemove.remove();

    axios.get(`https://crudcrud.com/api/8b97b1dc7e56472ebfbcf1f616f3fa1c/data/${id}`).then((res) => {
        console.log(res.data);
        name = res.data.name
        email = res.data.email
        phone = res.data.phone
        document.getElementById("name").value = name;
        document.getElementById("email").value = email
        document.getElementById("phone").value = phone
        obj = {
            name: name,
            email: email,
            phone: phone
        };
    })

}

