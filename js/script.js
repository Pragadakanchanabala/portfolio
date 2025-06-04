document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio site loaded.");

  // Toggle certificate gallery visibility
  const toggleBtn = document.getElementById('toggleCertificatesBtn');
  const gallery = document.getElementById('certificateGallery');

  if (toggleBtn && gallery) {
    toggleBtn.addEventListener('click', () => {
      if (gallery.style.display === 'none' || gallery.style.display === '') {
        gallery.style.display = 'flex'; // or 'block'
      } else {
        gallery.style.display = 'none';
      }
    });
  }

  // If contact form is present (currently not in HTML)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('response').textContent = "Thanks for reaching out!";
      this.reset();
    });
  }
});
