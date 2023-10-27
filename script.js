function myFunc()
{
    var pass1 = document.getElementById("pass1").value
    var pass2 = document.getElementById("pass2").value
    if(pass1.length < 8){
        alert("Your password must be at least 8 characters long!")
    }
    else if(pass1 = pass2){
        alert("Validated.")
    }
    else{
        alert("The passwords entered don't match.")
    }
}
