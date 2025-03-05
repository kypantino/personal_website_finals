<template>
  <div class="body">
    <!-- Header -->
    <header class="sticky-header">
      <div class="header-content">
        <h1>Kyla Amor's Portfolio</h1>
      </div>
      <nav class="nav-links">
        <router-link to="#home">Home</router-link>
        <router-link to="#about">About Me</router-link>
        <router-link to="#gallery">Picture Gallery</router-link>
        <router-link to="#contact">Contact</router-link>
      </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="home">
      <div class="home-content">
        <div class="intro-text">
          <h2>Hello, I'm Kyla Amor Pantino!</h2>
          <p>
            I'm a 20-year-old third-year student at Asia Pacific College,
            pursuing a Bachelor of Science in Information Technology with a
            specialization in Mobile and Internet Technology. Currently, I'm diving
            into the world of web development through my Website Programming class,
            where I'm learning how to bring creative ideas online. Thanks for stopping by,
            and feel free to explore!
          </p>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="about-me">
      <h2>About Me</h2>
      <div class="about-container">
        <div class="about-item">
          <h3>Education</h3>
          <p>
            <strong>2010-2016:</strong> Elementary School - St. Scholastica's Academy<br />
            <strong>2016-2022:</strong> High School - Information and Communication Technology High School<br />
            <strong>2022 - Present:</strong> College - Asia Pacific College
          </p>
        </div>

        <div class="about-item">
          <h3>Hobbies & Interests</h3>
          <p>
            Volleyball<br />
            Genshin Impact<br />
            Binge Watching Movies & Series
          </p>
        </div>

        <div class="about-item">
          <h3>IT Experience</h3>
          <p>
            HTML, CSS, JavaScript, PHP, MySQL, PowerBI, Tableau, Laravel, Frappe
          </p>
        </div>
      </div>
    </section>

    <!-- Picture Gallery Section -->
    <section id="gallery" class="gallery">
      <h2>Picture Gallery</h2>
      <div class="line"></div>
      <div class="gallery-grid">
        <img src="./pics/kylapic1.jpg" rel = "Gallery Pic 1">
        <img src="./pics/kylapic2.jpg" rel = "Gallery Pic 2">
        <img src="./pics/kylapic3.jpg" rel = "Gallery Pic 3">
        <img src="./pics/kylapic4.jpg" rel = "Gallery Pic 4">
        <img src="./pics/kylapic5.jpg" rel = "Gallery Pic 5">
        <img src="./pics/kylapic6.JPG" rel = "Gallery Pic 6">
        <img src="./pics/kylapic7.jpg" rel = "Gallery Pic 7">
        <img src="./pics/kylapic8.jpg" rel = "Gallery Pic 8">
        <img src="./pics/kylapic9.JPG" rel = "Gallery Pic 9">
        <img src="./pics/kylapic10.JPG" rel = "Gallery Pic 10">
      </div>
      <div class="line"></div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="contact-content">
        <h2>Contact Me!</h2>
        <p>Email: <a href="mailto:kppantino@student.apc.edu.ph">kppantino@student.apc.edu.ph</a></p>
        <p>Facebook: <a href="https://www.facebook.com/kyla.pantino/">Kyla Pantino</a></p>
        <p>Instagram: <a href="https://www.instagram.com/kylapantino/">@kylapantino</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kyla-amor-pantino-630755248/">Kyla Amor Pantino</a></p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.body {
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  color: #EEDBBF;
  margin: 0;
  padding: 0;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #52130c;
  padding: 10px 50px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.45);
}

.about-me {
  padding: 50px 150px;
  background: #52130c;
}

.about-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.about-item {
  flex: 1;
  background: #67191F;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.about-item h3 {
  color: #EEDBBF;
}

.contact {
  background-color: #121212;
  color: #EEDBBF;
  text-align: center;
  padding: 50px 20px;
}

.contact a {
  color: #EEDBBF;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

.gallery {
    padding: 40px;
    text-align: center;
    font-family: 'Playfair Display', serif;
  }
  
  .gallery-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .gallery-grid img {
    width: 200px;
    height: auto; 
    max-height: 300px; 
    object-fit: cover; 
    border-radius: 15px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
    transition: transform 0.3s ease; 
  }
  
  .gallery-grid img:hover {
    transform: scale(1.05); 
  }
  
  .line {
    width: 50px; 
    height: 3px; 
    background-color: #f4a261; 
    margin: 10px auto; 
}
</style>
