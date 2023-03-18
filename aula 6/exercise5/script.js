let text="";


for(var n=1; n<=10 ;n++ ){
    text+= "tabuada de " + n + "<br>"

    for (var x=0; x<=10 ; x++){
        const mult=n*x;
        text+= n + "*"+ x + " = " + mult +"<br>"
    }
    text+="<br>";
}

document.getElementById("answer").innerHTML=text;