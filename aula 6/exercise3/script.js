
function formValidation(){
    var num = document.forms["numForm"]["number"].value;
    var x=1;
    let text="";

    for(x ; x<=num ; x++){
        text+="x = " + x + "<br>";
    }
    setTimeout(10000);
    document.getElementById('answer').innerHTML=text;
    return true;
}