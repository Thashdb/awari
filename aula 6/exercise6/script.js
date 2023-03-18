

function formValidation(){
    let text="";
    var num = document.forms["numForm"]["number"].value;

    text+= "tabuada de " + num + "<br>"

    for (var x=0; x<=10 ; x++){
        const mult=num*x;
        text+= num + "*"+ x + " = " + mult +"<br>"
    }
    text+="<br>";

    document.getElementById("answer").innerHTML=text;
    return true;
}