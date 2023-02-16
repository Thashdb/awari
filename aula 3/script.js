function formValidation(){
    var PersonName = document.forms["contactUs"]["name"].value;
    var pEmail = document.forms["contactUs"]["email"].value;
    var pMensage = document.forms["contactUs"]["comt"].value;

    alert("Hello, " + PersonName + "!\nThe provided e-mail was: '" +pEmail+"', and your mensage was:\n'"+pMensage+"'");
    

    return true;

}