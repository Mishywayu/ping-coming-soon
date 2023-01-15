function required(){
    var empt = document.forms["form"]["email"].value;
    
    // var msg = document.getElementById('p1');
    // var textToAdd = document.createTextNode('Please enter a valid email address');
  
    if (empt == "") {
        document.getElementById('input').style.border = "1px solid red";
        document.getElementById('p1').innerHTML = "Please enter a valid email address";
        return false;
    }
    else{
        // document.getElementById('p1').innerHTML = "Email sent successfully."
        return true;
    }
}