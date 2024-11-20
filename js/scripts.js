document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for buttons
  document.getElementById("view-portfolio").addEventListener("click", () => {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("contact-me").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  // Form submission handler
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Your message has been sent. Thank you!");
    form.reset();
  });
});
