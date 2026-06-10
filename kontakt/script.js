document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("kontaktForma");

    form.addEventListener("invalid", function (e) {
        e.preventDefault();
    }, true);

    const ime = form.querySelector('[name="ime"]');
    const prezime = form.querySelector('[name="prezime"]');
    const email = form.querySelector('[name="email"]');

    ime.addEventListener("invalid", () => {
        if (ime.validity.valueMissing) {
            ime.setCustomValidity("Molimo unesite ime.");
        } else {
            ime.setCustomValidity("Ime ne smije sadržavati brojeve ili posebne znakove.");
        }
    });

    prezime.addEventListener("invalid", () => {
        if (prezime.validity.valueMissing) {
            prezime.setCustomValidity("Molimo unesite prezime.");
        } else {
            prezime.setCustomValidity("Prezime ne smije sadržavati brojeve.");
        }
    });

    email.addEventListener("invalid", () => {
        if (email.validity.valueMissing) {
            email.setCustomValidity("Molimo unesite email adresu.");
        } else {
            email.setCustomValidity("Email nije u ispravnom formatu.");
        }
    });

    [ime, prezime, email].forEach(el => {
        el.addEventListener("input", () => el.setCustomValidity(""));
    });

});