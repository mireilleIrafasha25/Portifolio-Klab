document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting to a server
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
      alert("Thanks! Your message was received successfully!");
      // Optionally, clear the form fields after the alert
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in both the name and message fields.");
    }
  });
});
