function validateForm() {
    var form = document.forms["contactForm"];
    var email = form["email"].value;
    var emailRe = /([a-zA-Z0-9\.])+@([a-z\.])+/;

    var match = email.match(emailRe);

    console.log(match);

    return true;
}