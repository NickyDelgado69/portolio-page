        // EmailJS initialisieren
        emailjs.init('kbxgl-dlpla8thBim'); // Ersetzen Sie 'YOUR_PUBLIC_KEY' mit Ihrem echten Public Key von EmailJS.

        // Event Listener für das Kontaktformular
        document
          .getElementById("contact-form")
          .addEventListener("submit", function (event) {
            event.preventDefault(); // Verhindert das automatische Neuladen der Seite
         
            // Daten aus den Eingabefeldern abrufen
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

// EmailJS send-Aufruf
emailjs
.send("service_sivw9sf", "template_4fowrum", {
  from_name: name,
  from_email: email,
  message: message,
})
.then(() => {
  // Erfolgsmeldung anzeigen
  const responseMessage = document.createElement("p");
  responseMessage.textContent = "Message sent successfully!";
  responseMessage.style.color = "green";
  responseMessage.id = "response-message"; // ID für zukünftige Manipulationen
  document.getElementById("contact-form").appendChild(responseMessage);
  document.getElementById("contact-form").reset(); // Formular zurücksetzen
})
.catch((error) => {
  // Fehlermeldung anzeigen
  const responseMessage = document.createElement("p");
  responseMessage.textContent =
    "Failed to send message. Please try again.";
  responseMessage.style.color = "red";
  responseMessage.id = "response-message"; // ID für zukünftige Manipulationen
  document.getElementById("contact-form").appendChild(responseMessage);
  console.error("EmailJS error:", error);
});
});

const facts = [
    "I'm more afraid of jellyfish than sharks",
    "My favourite food is sushi",
    "I favour cats over dogs",
    "My dream is to obtain a private pilot's licence (PPL)",
];

let currentFactIndex = 0;

function showNextFact() {
    const factText = document.getElementById("factText");
    factText.classList.remove('slide-in', 'slide-out'); // Entferne vorherige Animationen

    // Setzt den neuen Fakttext
    factText.innerText = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length;

    // Füge die Animationen hinzu
    setTimeout(() => {
        factText.classList.add('slide-in');
    }, 100); // Kurze Verzögerung vor dem Einblenden

    // Entferne die Animation nach einer bestimmten Zeit
    setTimeout(() => {
        factText.classList.remove('slide-in');
        factText.classList.add('slide-out');
    }, 4000); // 4 Sekunden bis zur Ausblendung
}

// Führt die Anzeige alle 5 Sekunden aus
setInterval(showNextFact, 5000);