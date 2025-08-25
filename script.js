
  
// /assests/script.js

// Initialize EmailJS (v4 syntax)
(function () {
    if (!window.emailjs) {
      console.error("EmailJS failed to load");
      return;
    }
    emailjs.init({ publicKey: "wfKL74b7J-n86TLgR" }); // <-- put your Public Key
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (!form) return;
  
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : "";
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending...";
        }
  
        // v4 sendForm usage — you can pass the form element directly
        await emailjs.sendForm("service_q08vsrc", "template_pxbammm", form);
  
        alert("✅ Message sent successfully!");
        form.reset();
      } catch (err) {
        console.error("EmailJS sendForm error:", err);
        alert("❌ Failed to send. Please try again.");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  });
  