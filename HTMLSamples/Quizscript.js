function MyFunc(){
    var a1 = document.getElementsByName("q1")[0].checked;
    var a2 = document.getElementsByName("q2")[1].checked;
    var a3 = document.getElementsByName("q3")[1].checked;
    var a4 = document.getElementsByName("q4")[0].checked;
    var a5 = document.getElementsByName("q5")[3].checked;
    var q1 = "Incorrect";
    var q2 = "Incorrect";
    var q3 = "Incorrect";
    var q4 = "Incorrect";
    var q5 = "Incorrect";
    var cor = 0;
    if(a1){
        cor++;
        q1 = "Correct";
    }
    if(a2){
        cor++;
        q2 = "Correct";
    }
    if(a3){
        cor++;
        q3 = "Correct";
    }
    if(a4){
        cor++;
        q4 = "Correct";
    }
    if(a5){
        cor++;
        q5 = "Correct";
    }
    cor=cor*20;
    alert("Results: \n\nQ1: "+q1+"\nQ2: "+q2+"\nQ3: "+q3+"\nQ4: "+q4+"\nQ5: "+q5+"\n\nScore: "+cor+"%\n");
}
