// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
  
    // Initialize EmailJS with the Public API Key
    (function() {
      emailjs.init("unb4fRA6rmTO2lKg0");  // Replace with your actual public key
    })();
  
    // Function to check form validity
    function checkFormValidity() {
      if (contactForm.checkValidity()) {
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled');
      } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
      }
    }
  
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', checkFormValidity);
    });
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const templateParams = {
        from_name: document.getElementById('{{customer_name}}').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
  
      console.log('Sending email with params:', templateParams);
  
      emailjs.send('service_qia3z6j', 'template_nek9uqf', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          formMessage.style.color = 'green';
          formMessage.textContent = 'Your message has been sent successfully!';
          contactForm.reset();
          submitBtn.disabled = true;
          submitBtn.classList.remove('enabled');
        }, function(error) {
          console.error('FAILED...', error);
          formMessage.style.color = 'red';
          formMessage.textContent = 'There was an error sending your message. Please try again later.';
        });
    });
  
    checkFormValidity();
  });
  