function submitCheck(form){
    console.log(form.password1.value);
    console.log(form.password2.value);
    if(form.password1.value != form.password2.value){
        alert("Password and Confirm Password do not match.");
        return false;
    }else{
        return true;
    }


}