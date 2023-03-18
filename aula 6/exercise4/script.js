
function isPrime(n){
    let dividers=0;
    // if(n==1){
    //     return true;
    // }
    for(let i=0; i<=n; i++){
        if(n%i===0){
            dividers++;
        }
    }
    if(dividers===2){
        return true;
    }else{
        return false;
    }

}

var num=0;
let text = "";

for(num; num<=100 ;num++ ){
    if(isPrime(num)){
        text+= "x = " + num + "<br>"
    }
}

document.getElementById("answer").innerHTML=text;
