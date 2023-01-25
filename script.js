var mail = document.getElementById("email");
mail.addEventListener(onclick, function () {
    mail.style.position = relative;
    mail.getAttribute('placeholder').position = relative;
    mail.getAttribute('placeholder').top = 10;
};