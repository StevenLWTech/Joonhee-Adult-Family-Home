// emailService.js

// Initialize EmailJS
export const initEmailJS = () => {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  script.async = true;

  script.onload = () => {
    window.emailjs.init('spaVV5YNSm2qMxE2b');

  };

  document.body.appendChild(script);
};

// Function to send email
export const sendEmail = (form) => {
  form.contact_number.value = Math.random() * 100000 | 0;

  return window.emailjs.sendForm('service_b8r28pi', 'template_iwhwnhi', form)
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error);
    });
};
