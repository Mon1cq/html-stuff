const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Message sent successfully!";
  status.style.color = "green";

  form.reset(); // clear form
});
