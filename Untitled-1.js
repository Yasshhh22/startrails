function toggleNav() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show-nav');
}

function saveBooking(e) {
  e.preventDefault();
  const booking = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    date: document.getElementById('date').value,
    message: document.getElementById('message').value
  };
  localStorage.setItem('bookingInfo', JSON.stringify(booking));
  alert('Your booking has been saved locally!');
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  const schoolInput = document.getElementById('schoolImageInput');
  if (schoolInput) {
    schoolInput.addEventListener('change', function(event) {
      const preview = document.getElementById('schoolImagePreview');
      preview.innerHTML = '';
      const file = event.target.files[0];
      if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = () => URL.revokeObjectURL(img.src);
        preview.appendChild(img);
      }
    });
  }
});
