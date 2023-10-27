function myFunc()
{
    var redval = document.getElementById("redval").value
    var blueval = document.getElementById("blueval").value
    var greenval = document.getElementById("greenval").value
    var pgraph = document.getElementById("pgraph");
    
    if(redval == "" || redval < 0 || redval > 255){
        alert("Please enter a number between 0 and 255 in the 'Red' box!")
    }
    else if(greenval == "" || greenval < 0 || greenval > 255){
        alert("Please enter a number between 0 and 255 in the 'Green' box!")
    }
    else if(blueval == "" || blueval < 0 || blueval > 255){
        alert("Please enter a number between 0 and 255 in the 'Blue' box!")
    }
    else{
        pgraph.style.backgroundColor='rgb('+redval+','+greenval+','+blueval+')';
    }
}
function myFuncborder()
{
    var bredval = document.getElementById("bredval").value
    var bblueval = document.getElementById("bblueval").value
    var bgreenval = document.getElementById("bgreenval").value
    var widthval = document.getElementById("widthval").value
    var pgraph = document.getElementById("pgraph");
    
    if(bredval == "" || bredval < 0 || bredval > 255){
        alert("Please enter a number between 0 and 255 in the 'Red' box!")
    }
    else if(bgreenval == "" || bgreenval < 0 || bgreenval > 255){
        alert("Please enter a number between 0 and 255 in the 'Green' box!")
    }
    else if(bblueval == "" || bblueval < 0 || bblueval > 255){
        alert("Please enter a number between 0 and 255 in the 'Blue' box!")
    }
    else if(widthval == ""){
        alert("Please enter a number in the 'Width' box!")
    }
    else{
        pgraph.style.border=widthval+'px'+' solid rgb('+bredval+','+bgreenval+','+bblueval+')';
    }
}

