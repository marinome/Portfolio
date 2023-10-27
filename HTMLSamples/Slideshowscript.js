var index = 1;
returnslide(index);
//index = 2;

function nextslide(){
    if(index == 5){
        index = 1
    }
    else{
        index = index + 1
    }
    returnslide(index)
}
function prevslide(){
    if(index == 1){
        index = 5
    }
    else{
        index = index - 1
    }
    returnslide(index)
}
function returnslide(index){
    var slides = document.getElementsByClassName("images")
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    slides[index-1].style.display="block";
}
