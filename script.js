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