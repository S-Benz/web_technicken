function validateForm() {
    var form = document.forms["contactForm"];
    var name = form["name"].value;
    var prename = form["prename"].value;
    //Regex for checking input
    var nameRe = /([^a-zA-ZäüöÄÜÖ])/;
    var res;

    /**
     * Validate name and prename against regex
     * If one matches the regex then display an error message
     * Else display a passed message
     */
    if (nameRe.test(name) || nameRe.test(prename)) {
        res = false;
        alert("Bitte keine Sonderzeichen im Namen/Vornamen verwenden!");
    } else {
        res = true;
        alert("Kontaktformular wurde erfolgreich abgeschickt!");
    }

    return res;
}