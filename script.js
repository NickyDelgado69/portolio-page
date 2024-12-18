emailjs.init('kbxgl-dlpla8thBim');
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

emailjs
.send("service_sivw9sf", "template_4fowrum", {
  from_name: name,
  from_email: email,
  message: message,
})
.then(() => {
  const responseMessage = document.createElement("p");
  responseMessage.textContent = "Ihre Nachricht wurde erfolgreich versendet!";
  responseMessage.style.color = "green";
  responseMessage.id = "response-message";
  document.getElementById("contact-form").appendChild(responseMessage);
  document.getElementById("contact-form").reset();
})
.catch((error) => {
  const responseMessage = document.createElement("p");
  responseMessage.textContent =
    "Da ist etwas schief gelaufen... Versuchen Sie es bitte erneut.";
  responseMessage.style.color = "red";
  responseMessage.id = "response-message";
  document.getElementById("contact-form").appendChild(responseMessage);
  console.error("EmailJS error:", error);
});
});

async function getAccessToken() {
  const clientId = '';
  const clientSecret = '';

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