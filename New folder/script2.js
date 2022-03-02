const name1 = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form2');
const errorElement = document.getElementById('error2');
let radios = document.getElementsByName('fav_language');
const check = document.getElementsByName("vehicle")

form.addEventListener('submit', (e) => {
    let msg = [];
    if(name1.value == '' || name1.value == null){
        msg.push('Please Enter the valid Information');
    }
    else if(email.value == '' || email.value == null){
        msg.push("Email is required")
    }

    else if(!(radios[0].checked || radios[1].checked || radios[2].checked)){
        msg.push("please select the radion button")
    }

    else if(!(check[0].checked || check[1].checked || check[2].checked)){
        msg.push("please select the checkbox")
    }
    else {
        msg.push("login successs")
    }
  
 
   
  

    if(msg.length > 0) {
        e.preventDefault();
        errorElement.innerText = msg;

    }
})