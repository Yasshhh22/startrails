<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Startrails Astronomical Experience</title>
  <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
    body {
      font-family: 'Orbitron', sans-serif;
      background: black;
      color: white;
      overflow-x: hidden;
    }

    header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      padding: 15px 20px;
      background: lch(39.16% 0.42 18.72 / 0);
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-img { height: 80px; }
    .center-title { flex: 1; text-align: center; color: #ffdf00; font-weight: bold; font-size: 1.8rem; }

    .hamburger {
      width: 30px;
      height: 20px;
      cursor: pointer;
      position: relative;
      margin-left: 20px;
    }

    .hamburger span {
      position: absolute;
      height: 4px;
      width: 100%;
      background: white;
      left: 0;
      transition: all 0.3s ease;
    }

    .hamburger span:nth-child(1) { top: 0; }
    .hamburger span:nth-child(2) { top: 8px; }
    .hamburger span:nth-child(3) { top: 16px; }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg); top: 8px;
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg); top: 8px;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: -500px;
      width: 500px;
      height: 100%;
      background: rgba(0, 0, 0, 0.98);
      padding-top: 80px;
      flex-direction: column;
      transition: left 0.4s ease;
      z-index: 999;
    }

    .sidebar.active { left: 0; }
    .sidebar a {
      padding: 15px 20px;
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      display: block;
    }

    .sidebar a:hover {
      background: #ffdf00;
      color: black;
    }

    .page-section {
      padding: 100px 20px;
      min-height: 100vh;
      text-align: center;
    }

    h1, h2, h3 {
      color: #ffdf00;
      margin-bottom: 20px;
    }

    .content-box {
      background: rgba(255,255,255,0.05);
      padding: 30px;
      border-radius: 12px;
      max-width: 800px;
      margin: 40px auto 20px;
      text-align: left;
    }

    .book-button {
      padding: 15px 30px;
      background-color: #ffdf00;
      color: black;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 18px;
      transition: transform 0.3s ease;
    }

    .book-button:hover { transform: scale(1.1); }

    .button-container {
      text-align: center;
      margin-top: 30px;
    }

    #bookingFormContainer {
      display: none;
      margin-top: 50px;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    form {
      background: rgba(255,255,255,0.05);
      padding: 20px;
      border-radius: 10px;
    }

    form label {
      display: block;
      color: #ffdf00;
      margin: 10px 0 5px;
      text-align: left;
    }

    form input, form select {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
    }

    #thankYouMessage {
      margin-top: 20px;
      font-size: 1.2rem;
      color: lightgreen;
    }

    /* Small Image Carousel */
    .carousel-container {
      width: 90%;
      margin: 40px auto;
      overflow: hidden;
    }

    .carousel-track {
      display: flex;
      gap: 10px;
      animation: scrollImages 15s linear infinite;
    }

    .carousel-track img {
      width: 262px;
      height: 180px;
      object-fit: cover;
      border-radius: 10px;
    }

    @keyframes scrollImages {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    footer {
      background: rgba(0,0,0,0.8);
      padding: 40px 20px;
      color: white;
      text-align: center;
    }

    footer h4 {
      margin-bottom: 10px;
      color: #ffdf00;
    }

    footer p {
      margin-bottom: 15px;
    }
  </style>
</head>

<body>
  

<!-- Sidebar & Header -->
<div class="sidebar" id="sidebar">
  <a href="javascript:void(0)" onclick="showPage('home')">Home</a>
  <a href="#">Astronomy Club</a>
  <a href="#">Products</a>
  <a href="#">Expeditions</a>
  <a href="#">Our Mission</a>
</div>

<header>
  <div class="hamburger" onclick="toggleSidebar(this)">
    <span></span><span></span><span></span>
  </div>
  <div class="center-title"></div>
  <img src="logo.png" class="logo-img" alt="Logo" />
</header>

<!-- Page Section -->
<section id="home" class="page-section">
  <h1>Welcome to Startrails Astronomical Experiences</h1>
  <p>Explore the Universe Like Never Before</p>

  <div class="content-box">
    <h3>STARGAZING</h3>
    <p>At Startrails, we offer more than just a night of stargazing. Our experiences are crafted to provide you with an unforgettable adventure into the cosmos. With expert guides, top-notch equipment, and exclusive locations, we bring the beauty of the universe closer to you.</p>
    <p>Whether you're a seasoned astronomer or a curious beginner, our range of packages caters to all. Join us for a magical journey through the stars!</p>
  </div>

  <div class="button-container">
    <button class="book-button" onclick="toggleBookingForm()">Book Now</button>
  </div>

  <!-- Carousel Section -->
  <div class="carousel-container">
    <div class="carousel-track">
      <img src="one.jpg" alt="Image 1">
      <img src="tow.jpg" alt="Image 2">
      <img src="three.jpg" alt="Image 3">
      <img src="four.jpg" alt="Image 4">
      <img src="five.jpg" alt="Image 5">
      <!-- Repeat to make it seamless -->
      <img src="one.jpg" alt="Image 1">
      <img src="tow.jpg" alt="Image 2">
      <img src="three.jpg" alt="Image 3">
    </div>
  </div>

  <!-- Booking Form -->
  <div id="bookingFormContainer">
    <form id="bookingForm">
      <label>Name:</label>
      <input type="text" id="name" required />

      <label>Date:</label>
      <input type="date" id="date" required />

      <label>Slot Timing:</label>
      <select id="slot" required>
        <option value="">Select Slot</option>
        <option>6:00 PM - 8:00 PM</option>
        <option>8:00 PM - 10:00 PM</option>
        <option>10:00 PM - 12:00 AM</option>
      </select>

      <label>Property Name:</label>
      <input type="text" id="property" required />

      <label>Contact Number:</label>
      <input type="tel" id="contact" required pattern="[0-9]{10}"/>

      <button type="submit">Submit</button>
    </form>
    <div id="thankYouMessage"></div>
  </div>
</section>

<!-- Footer -->
<footer>
  <h4>Contact Us</h4>
  <p>Email: info@startrails.com</p>
  <p>Phone: +91 98765 43210</p>

  <h4>About Us</h4>
  <p>Startrails is dedicated to bringing people closer to the cosmos through immersive stargazing experiences, equipment, and community events.</p>
</footer>

<script>
  function toggleSidebar(element) {
    document.getElementById("sidebar").classList.toggle("active");
    element.classList.toggle("active");
  }

  function showPage(page) {
    document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(page).style.display = 'block';
  }

  function toggleBookingForm() {
    const form = document.getElementById("bookingFormContainer");
    form.style.display = form.style.display === "block" ? "none" : "block";
    if (form.style.display === "block") {
      form.scrollIntoView({ behavior: "smooth" });
    }
  }

  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("thankYouMessage").textContent = "Thank you for booking! We’ll contact you shortly.";
    this.reset();
  });
</script>

</body>
</html>
