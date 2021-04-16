let success = true;

function checkPhoneNumber(){
    let number=document.getElementById("phoneNo").value;
    let good = true;
    if(number.startsWith("0") && number.length !== 11)
        good=false;
    else if(number.startsWith("91") && number.length !== 12)
        good=false;
    else if(number.startsWith("+") && number.length !== 14 && number.contains("-"))
        good=false;
    else if (number.length!==10 && !number.startsWith("0") && !number.startsWith("+") && !number.startsWith("91"))
        good=false;
    else if(number.startsWith("+") && number.length !== 13 && !number.contains("-"))
        good=false;


    if(!(number.match(/\+?(?:0|91)?-?[6-9][0-9]{9}/)) || !good ){
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("phoneNo").style.border="2px solid red";
        let err = document.createElement("li");
        let checker=document.getElementById("phoneError");

        if(checker==null){
            err.setAttribute("id","phoneError");

            err.appendChild(document.createTextNode("The phone number entered is not valid."));
            listOfErrors.appendChild(err);
        }


        success=false;
    }else{
        let err = document.getElementById("phoneError");
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("phoneNo").style.border="1px solid gray";
        success = true;
    }

}

function checkEmail(){
    let email = document.getElementById("email").value;

    if(!(email.match(/[\w\d\._]+@[\w\d]+\.[\w]+/))){
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("email").style.border="2px solid red";
        let err = document.createElement("li");

        let checker=document.getElementById("phoneError");

        if(checker==null){
            err.setAttribute("id","emailError");

            err.appendChild(document.createTextNode("The email address entered is not valid."));
            listOfErrors.appendChild(err);
        }

        success=false;
    }else{
        let err = document.getElementById("emailError");
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("email").style.border="1px solid gray";
        success = true;
    }
}

function checkPassword(){
    let password=document.getElementById("pass").value;

    let finalCheck=true;

    if(password.match(/[A-Z]/))
        document.getElementById("upperCase").style.color="Green";
    else
        finalCheck=false;

    if(password.match(/[a-z]/))
        document.getElementById("lowerCase").style.color="Green";
    else
        finalCheck=false;
    if(password.match(/[0-9]/))
        document.getElementById("number").style.color="Green";
    else
        finalCheck=false;

    if(password.length>=8)
        document.getElementById("length").style.color="Green";
    else
        finalCheck=false;

    if(password.match(/\W|_/))
        document.getElementById("spec").style.color="Green";
    else
        finalCheck=false;

    if(!finalCheck){
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("pass").style.border="2px solid red";
        let err = document.createElement("li");
        let checker=document.getElementById("passError");

        if(checker==null){
            err.setAttribute("id","passError");


            err.appendChild(document.createTextNode("The password entered is not valid."));
            listOfErrors.appendChild(err);
        }

        success=false;
    }else{
        let err = document.getElementById("passError");
        success = true;
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("pass").style.border="1px solid gray";
    }
}

function checkPassword2(){
    let password=document.getElementById("pass").value;
    let password2=document.getElementById("pass2").value;

    if(password !== password2){
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("pass2").style.border="2px solid red";
        let err = document.createElement("li");

        let checker=document.getElementById("pass2Error");

        if(checker==null){
            err.setAttribute("id","pass2Error");

            err.appendChild(document.createTextNode("The confirm password and password do not match"));
            listOfErrors.appendChild(err);
        }

        success=false;
    }else{
        let err = document.getElementById("pass2Error");
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("pass2").style.border="1px solid gray";
        success = true;
    }
}

function checkName(){
    let name = document.getElementById("name").value;

    if(!name.match(/[^\w\s\d'-]/)){
        let err = document.getElementById("nameError");
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("name").style.border="1px solid gray";
        success = true;
    }else{
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("name").style.border="2px solid red";
        let err = document.createElement("li");

        let checker=document.getElementById("nameError");

        if(checker==null){
            err.setAttribute("id","nameError");

            err.appendChild(document.createTextNode("The name entered is invalid"));
            listOfErrors.appendChild(err);
        }
    }
}

function checkAge(){
    let age=document.getElementById("age").value;

    if(age>0){
        let err = document.getElementById("ageError");
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("age").style.border="1px solid gray";
        success = true;
    }else{
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("age").style.border="2px solid red";
        let err = document.createElement("li");

        let checker=document.getElementById("ageError");

        if(checker==null){
            err.setAttribute("id","ageError");

            err.appendChild(document.createTextNode("The age entered is invalid"));
            listOfErrors.appendChild(err);
        }
    }
}

function checkCity(){
    let city=document.getElementById("city").value;

    if(city.match(/[^\w\s\d'-]/)){
        let listOfErrors = document.getElementById("errorList");
        document.getElementById("city").style.border="2px solid red";
        let err = document.createElement("li");

        let checker=document.getElementById("cityError");

        if(checker==null){
            err.setAttribute("id","cityError");

            err.appendChild(document.createTextNode("The city entered is invalid"));
            listOfErrors.appendChild(err);
        }


    }else{
        let err = document.getElementById("cityError");
        if(err!==null)err.parentNode.removeChild(err);
        document.getElementById("city").style.border="1px solid gray";
        success = true;
    }
}

function finalSubmit(){
    return success;
}