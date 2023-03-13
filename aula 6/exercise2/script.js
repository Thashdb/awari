var x=10;
//nao pode ser redeclarada
let text="";

for (x; x>=1 ; x--){
    text+="x = " + x + "<br>";
}

document.getElementById("answer").innerHTML=text;