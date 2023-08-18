let nameHandle = document.getElementById('name');
let emailHandle = document.getElementById('email');
let instagramHandle = document.getElementById('instagram');
let  phoneNumber= document.getElementById('phone-number');

let button = document.getElementById('btn');
let id = 0;
//listening for the button click
button.addEventListener("click", () => {
    let mainTable = document.getElementById('main-table');
    
    let row =  mainTable.insertRow(2);
//creating new row with new cells to fill row   
    row.setAttribute('id', `customer-${id}`);
    row.insertCell(0).innerHTML = '';
    row.insertCell(1).innerHTML = nameHandle.value;
    row.insertCell(2).innerHTML = emailHandle.value;
    row.insertCell(3).innerHTML = instagramHandle.value;
    row.insertCell(4).innerHTML = phoneNumber.value;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
//reseting values
    nameHandle.value='';
    emailHandle.value='';
    instagramHandle.value='';
    phoneNumber.value='';


});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = 'delButton-' + id;
    btn.innerHTML = 'Delete';
    btn.onclick= () =>{
        let element = document.getElementById(`customer-${id}`)
        element.parentNode.removeChild(element)
    }
    return btn;
}
//deletes the table listing
