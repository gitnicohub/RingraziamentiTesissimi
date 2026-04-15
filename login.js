// Il nostro "database" statico
const utenti = {
    "genitori": { pass: "cuore", url: "pagine/gen.html" },
    "sorella": { pass: "sorellamigliore", url: "pagine/sorella.html" },
    "nonni": { pass: "nonniamati", url: "pagine/nonni.html" },
    "amici": { pass: "compagni", url: "pagine/amici.html" },
    "casapescuma": { pass: "pescuma", url: "pagine/casapescuma.html" },
    "zii": { pass: "sempreinsieme", url: "pagine/zii.html" },
    "pix": { pass: "pix", url: "pagine/pix.html" },
    // IL TUO ACCESSO DA AMMINISTRATORE
    "admin": { pass: "porcodio", url: "pagine/admin.html" } 
};

function controllaLogin() {
    let user = document.getElementById("username").value.toLowerCase();
    let pass = document.getElementById("password").value;
    let msgErrore = document.getElementById("errore");

    // Controlla se l'utente esiste e se la password combacia
    if (utenti[user] && utenti[user].pass === pass) {
        // Login corretto: reindirizza alla pagina specifica
        window.location.href = utenti[user].url;
    } else {
        // Errore
        msgErrore.style.display = "block";
    }
}
