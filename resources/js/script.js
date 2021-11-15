function validForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let news = document.getElementById("news").value;

    if (name === none ) {
        alert("please fill the name");
        
    } else if (email === none) {
        alert("please fill the email");
        
    } else if (news === none) {
        alert ("please give a message");
        
    } else {
        alert("successfully submited")
    }
}
