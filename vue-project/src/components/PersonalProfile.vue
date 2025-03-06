<template>
  <div class="body">
    <!-- Header -->
    <header class="sticky-header">
      <div class="header-content">
    <img src="./pics/favicon.svg" alt="Kyla Amor's Portfolio Icon" class="header-icon">
  </div>
      <nav class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="home">
      <div class="home-content">
        <img src="./pics/profile.svg" alt="Profile Photo" class="profile-photo">
        <h2>Hi, I'm Kyla Amor Pantino!</h2>
        <p>
          I'm a 20-year-old third-year student at Asia Pacific College, 
          pursuing a Bachelor of Science in Information Technology with a 
          specialization in Mobile and Internet Technology. Currently, 
          I'm diving into the world of web development through my Website Programming class, 
          where I'm learning how to bring creative ideas online. Thanks for stopping by, 
          and feel free to explore!
        </p>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="about-me">
      <div class="about-section">
        <div class="about-card">
          <img src="./pics/Educ.svg" alt="Education Icon" class="about-icon">
          <h3 class="about-title">Education</h3>
          <p><strong>2010–2016:</strong> St. Scholastica's Academy</p>
          <p><strong>2016–2022:</strong> Information and Communication Technology High School</p>
          <p><strong>2022–Present:</strong> Asia Pacific College</p>
        </div>

        <div class="about-card">
          <img src="./pics/Hobby.svg" alt="Hobbies Icon" class="about-icon">
          <h3 class="about-title">Hobbies & Interests</h3>
          <p>Volleyball</p>
          <p>Genshin Impact</p>
          <p>Binge-watching Movies & Series</p>
        </div>

        <div class="about-card">
          <img src="./pics/Web.svg" alt="IT Icon" class="about-icon">
          <h3 class="about-title">IT Experience</h3>
          <p>HTML, CSS, JavaScript, PHP, MySQL</p>
          <p>PowerBI, Tableau, Laravel, Frappe</p>
        </div>
      </div>
    </section>

    <!-- Picture Gallery -->
    <section id="gallery" class="gallery">
      <h2>Picture Gallery</h2>
      <div class="line"></div>
      <div class="gallery-scroll">
        <div class="gallery-track">
          <img src="./pics/kylapic1.jpg" alt="Gallery Pic 1">
          <img src="./pics/kylapic2.jpg" alt="Gallery Pic 2">
          <img src="./pics/kylapic3.jpg" alt="Gallery Pic 3">
          <img src="./pics/kylapic4.jpg" alt="Gallery Pic 4">
          <img src="./pics/kylapic5.jpg" alt="Gallery Pic 5">
          <img src="./pics/kylapic6.JPG" alt="Gallery Pic 6">
          <img src="./pics/kylapic7.jpg" alt="Gallery Pic 7">
          <img src="./pics/kylapic8.jpg" alt="Gallery Pic 8">
          <img src="./pics/kylapic9.JPG" alt="Gallery Pic 9">
          <img src="./pics/kylapic10.JPG" alt="Gallery Pic 10">
          
        </div>
      </div>
      <div class="line"></div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h2>Contact Me!</h2>
      <p>Email: <a href="mailto:kppantino@student.apc.edu.ph">kppantino@student.apc.edu.ph</a></p>
      <p>Facebook: <a href="https://www.facebook.com/kyla.pantino/">Kyla Pantino</a></p>
      <p>Instagram: <a href="https://www.instagram.com/kylapantino/">@kylapantino</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/kyla-amor-pantino-630755248/">Kyla Amor Pantino</a></p>
    </section>
  </div>
</template>

<style scoped>
/* General Styles */
.body-content {
  font-family: 'Poppins', sans-serif;
  background-color: #121212; /* Dark background */
  color: #EEDBBF; /* Your text color */
  margin: 0;
  padding: 0;
  text-align: center;
}

/* Sticky Header */
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Ensure full width */
  background: #451616; /* Your header background color */
  padding: 15px 20px; /* Increase padding for more height */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.45);
  z-index: 1000; /* Ensure it stays on top */
  color: #EEDBBF; /* Light text color for better contrast */
}

.header-content {
  display: flex;
  align-items: center;
}

.header-icon {
  width: 50px; /* Adjust the size of the icon */
  height: 50px; /* Adjust the size of the icon */
  margin-right: 20px; /* Add some space between the icon and nav links */
}

.header-content h1 {
  font-size: 1.5em; /* Reduce font size */
  margin: 0;
  margin-right: 20px; /* Add some space between the title and nav links */
  color: #EEDBBF; /* Light text color for better contrast */
}

.sticky-header a {
  font-family: 'Poppins', sans-serif;
  color: #EEDBBF; /* Light text color for better contrast */
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-links a {
  color: #EEDBBF; /* Light text color for better contrast */
  margin: 0 10px; /* Reduce margin */
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #AB3130; /* Your hover color */
}

@media (max-width: 768px) {
  .sticky-header {
    flex-direction: column;
    align-items: center;
    padding: 10px 15px; /* Adjust padding for smaller devices */
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
  }

  .nav-links a {
    margin: 5px 0; /* Adjust margin for better spacing */
  }
}

/* Home Section */
.home {
  padding: 150px 20px 50px; /* Add padding to the top to account for the header */
  background-color: #1E1E1E; /* Darker background for home section */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Inner shadow */
  color: #EEDBBF; /* Light text color for better contrast */
}

.home-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.home-content img.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.home-content h2 {
  font-family: 'Playfair Display', serif;
  color: #EEDBBF; /* Light text color for better contrast */
}

.home-content p {
  color: #EEDBBF; /* Light text color for better contrast */
  font-family: 'Poppins', sans-serif;
}

/* About Me Section */
.about-me {
  padding: 70px 20px 20px; /* Add padding to the top to account for the header */
  background-color: #5E1d1d; /* Darker background for about section */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Inner shadow */
  color: #EEDBBF; /* Your text color */
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.about-card {
  font-family: 'Poppins', sans-serif;
  background-color: #451616; /* Your card background color */
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6);
  margin: 10px;
  padding: 20px;
  flex: 1 1 300px;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.about-icon {
  width: 110px;
  height: 110px;
  margin-bottom: 10px;
}

.about-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5em;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    align-items: center;
  }

  .about-card {
    max-width: 90%;
  }
}

/* Gallery Section */
.gallery {
  padding: 70px 20px 20px; /* Add padding to the top to account for the header */
  background-color: #2C2C2C; /* Darker background for gallery section */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Inner shadow */
  color: #EEDBBF; /* Light text color for better contrast */
}

.gallery h2 {
  color: #EEDBBF; /* Light text color for better contrast */
  text-align: center; /* Center the title */
  margin: 0 auto; /* Center the title */
  font-size: 2rem;
  margin-bottom: 40px;
}

.gallery-scroll {
  overflow-x: auto; 
  white-space: nowrap;
  padding: 20px 30px;
}

/* Hide scrollbar for WebKit browsers */
.gallery-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.gallery-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.gallery-track {
  display: inline-flex;
  gap: 20px;
}

.gallery-track img {
  width: 200px;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  margin: 10px;
}

.gallery-track img:hover {
  transform: scale(1.2);
}

/* Contact Section */
.contact {
  padding: 50px 20px 20px; /* Add padding to the top to account for the header */
  background-color: #451616; /* Red background for contact section */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Inner shadow */
  color: #EEDBBF; /* Light text color for better contrast */
  text-align: center;
}

.contact h2 {
  font-family: 'Playfair Display', serif;
  color: #EEDBBF; /* Light text color for better contrast */
}

.contact p {
  color: #EEDBBF; /* Light text color for better contrast */
  font-family: 'Poppins', sans-serif;
}

.contact a {
  color: #AB3130; /* Your link color */
  text-decoration: none;
  transition: color 0.3s;
}

.contact a:hover {
  color: #EEDBBF; /* Your hover color */
}

.line {
  width: 50px; /* Adjust width as needed */
  height: 3px; /* Adjust thickness */
  background-color: #EEDBBF; /* Your line color */
  margin: 10px auto; /* Center the line */
}
</style>
