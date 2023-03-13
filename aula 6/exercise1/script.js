//na tela

        var x=1;
        //nao pode ser redeclarada
        let text="";

        for (x; x<=10 ; x++){
            text+="x = " + x + "<br>";
        }

        document.getElementById("answer").innerHTML=text;

//no console

// for (let x=1; x<=10; x++) {
//     console.log(x);
// }