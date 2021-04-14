function submitCheck(form){
    console.log(form.password1.value);
    console.log(form.password2.value);

    let checked = false;

    if(form.password1.value != form.password2.value){
        alert("Password and Confirm Password do not match.");
        return false;
    }else{
        checked=true;
    }

    if(form.email.value.match(/[\w\d\._]+@[\w\d]+\.[\w]+/)){
        checked=true;
    }else{
        alert("Invalid Email");
        return false;
    }

    if(checked){
        alert("Signup Successful");
        return true;
    }


}