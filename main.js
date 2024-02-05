document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var classe = document.querySelector('input[name="classe"]:checked');
    var axePrefere = document.getElementById("destinationPrefere").value;

    if (nom && prenom && email && classe && destinationPrefere) {
        document.getElementById("message").textContent = "Inscription réussie!";
        document.getElementById("message").style.color = "green";
    } else {document.addEventListener("DOMContentLoaded", function() {
    var modeSwitcher = document.querySelector('.mode-switcher');

    modeSwitcher.addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });
});

        document.getElementById("message").textContent = "Veuillez remplir tous les champs.";
        document.getElementById("message").style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var modeSwitcher = document.querySelector('.mode-switcher');

    modeSwitcher.addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });
});

