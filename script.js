document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("response").innerText = "Thank you! Your message has been sent.";
});
