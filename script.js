const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: form.querySelector('input[placeholder="Your Name"]').value,
    email: form.querySelector('input[placeholder="Your Email"]').value,
    phone: form.querySelector('input[placeholder="Your Contact"]').value,
    message: form.querySelector('textarea').value
  };

  fetch("https://script.google.com/macros/s/AKfycbwNbQlmcTUJFlJ7ir5epKKbYPZecZ9Fm41hY18haR3cuGW9QhO_IP93Gpaohepw60C5/exec", {
    method: "POST",
    body: new URLSearchParams(data)
  })
  .then(res => res.text())   
  .then(response => {
    console.log("Server response:", response);
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(err => {
    console.error("Error:", err);
    alert("Something went wrong!");
  });
});



