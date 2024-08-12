document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been received.`);
    // Here you can add code to send form data to your server

    // Reset the form
    document.getElementById("contact-form").reset();
  });
