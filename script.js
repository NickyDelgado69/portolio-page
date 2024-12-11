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

async function getAccessToken() {
  const clientId = ''; // Ersetze mit deinem Client ID
  const clientSecret = ''; // Ersetze mit deinem Client Secret

  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret));
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');

  try {
      const response = await fetch(tokenUrl, {
          method: 'POST',
          headers: headers,
          body: body
      });

      if (!response.ok) throw new Error('Token Request Failed');

      const data = await response.json();
      const accessToken = data.access_token;

      console.log('Access Token:', accessToken);
      return accessToken;

  } catch (error) {
      console.error('Error fetching the access token:', error);
  }
}

getAccessToken();