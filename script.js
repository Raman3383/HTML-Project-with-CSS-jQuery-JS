const button = document.querySelector("button");
const Name = document.getElementById("text-input1");
const Email = document.getElementById("text-input2");
const ulelement = document.getElementById("list-item");

function OnSubmit(){
    if( Name.value ==='' || Email.value===''){
        alert('Enter Name and Email');
    }
    else{
        var fullName = Name.value;
        var fullemail = Email.value;
        
        var lielement = document.createElement("li")
        lielement.textContent = `Name:${fullName} , Email:${fullemail} `;
        ulelement.appendChild(lielement);
     }
     Name.value='';
    Email.value='';

}