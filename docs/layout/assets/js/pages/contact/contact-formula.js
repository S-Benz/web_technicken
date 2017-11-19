function validateForm() {
    var form = document.forms["contactForm"];
    var name = form["name"].value;
    var prename = form["prename"].value;
    var nameRe = /([^a-zA-ZäüöÄÜÖ])/;
    var res;

    if(nameRe.test(name) || nameRe.test(prename)){
        res = false;
        alert("Bitte keine Sonderzeichen im Namen/Vornamen verwenden!");
    }else {
        res = true;
        alert("Kontaktformular wurde erfolgreich abgeschickt!");
    }

    return res;
}