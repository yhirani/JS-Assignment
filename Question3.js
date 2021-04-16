

let submit = document.getElementById("submit");

submit.addEventListener('click',function (){
   event.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    const request = new XMLHttpRequest();

   request.onload = function (){

       console.log(request.responseText);
       let response = JSON.parse(request.responseText);


       console.log(response.error);
       if(response.error === "user not found"){
           let checker = document.getElementById("resp");
           if(checker!==null)checker.parentNode.removeChild(checker);

           let p = document.createElement("p");
           p.setAttribute('id','resp');
           let div = document.getElementById("response");
           p.appendChild(document.createTextNode("Username or Password Does Not Match"));

           div.appendChild(p);
       }else if(response.error === "Missing email or username"){
           let checker = document.getElementById("resp");
           if(checker!==null)checker.parentNode.removeChild(checker);
           let p = document.createElement("p");
           p.setAttribute('id','resp');
           let div = document.getElementById("response");
           p.appendChild(document.createTextNode("Username cannot be empty"));

           div.appendChild(p);
       }else if(response.error === "Missing password"){
           let checker = document.getElementById("resp");
           if(checker!==null)checker.parentNode.removeChild(checker);
           let p = document.createElement("p");
           p.setAttribute('id','resp');
           let div = document.getElementById("response");
           p.appendChild(document.createTextNode("Password cannot be empty"));

           div.appendChild(p);
       }else{
           let checker = document.getElementById("resp");
           if(checker!==null)checker.parentNode.removeChild(checker);
           let p = document.createElement("p");
           p.setAttribute('id','resp');
           let div = document.getElementById("response");
           p.appendChild(document.createTextNode("Signin Successful :)"));

           div.appendChild(p);
       }

   };

   let requestData = "email=" + email + "&password=" + pass;

   request.open('POST','https://reqres.in/api/login');
   request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

   request.send(requestData);

});