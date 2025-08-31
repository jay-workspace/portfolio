<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text floating">
          <h1 class="hero-title">
            Hi, I'm <span class="text-gradient">{{ portfolioData.name }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ portfolioData.title }}</h2>
          <p class="hero-description">{{ portfolioData.description }}</p>
          
          <div class="hero-buttons">
            <a href="#projects" class="btn hero-btn" @click="scrollToSection('projects')">
              View My Work
            </a>
            <a href="#contact" class="btn hero-btn-outline" @click="scrollToSection('contact')">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="solar-system">
            <!-- Sun (Avatar) -->
            <div class="sun">
              <div class="avatar-placeholder">
                <!-- TODO: Replace with your actual photo -->
                <div class="avatar-icon developer">👨‍💻</div>
              </div>
              <div class="avatar-glow"></div>
            </div>
            
            <!-- Orbital Paths -->
            <div class="orbit orbit-1">
              <div class="planet tech-vue">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
              </div>
            </div>
            
            <div class="orbit orbit-2">
              <div class="planet tech-js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              </div>
            </div>
            
            <div class="orbit orbit-3">
              <div class="planet tech-azure">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
              </div>
            </div>
            
            <div class="orbit orbit-4">
              <div class="planet tech-dotnet">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" />
              </div>
            </div>
            
            <div class="orbit orbit-5">
              <div class="planet tech-java">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              </div>
            </div>
            
            <div class="orbit orbit-6">
              <div class="planet tech-mssql">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="MS SQL" />
              </div>
            </div>
            
            <div class="orbit orbit-7">
              <div class="planet tech-angular">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="AngularJS" />
              </div>
            </div>
            
            <div class="orbit orbit-8">
              <div class="planet tech-android">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" />
              </div>
            </div>
            
            <div class="orbit orbit-9">
              <div class="planet tech-git">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-arrow" @click="scrollToSection('about')"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      portfolioData: {
        name: 'Jayavijay',
        title: 'Senior Software Engineer',
        description: 'Passionate about creating innovative solutions with modern technologies. Specializing in full-stack development, mobile applications, and cloud architecture.'
      }
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 2rem;
}

@media (min-width: 768px) {
  .hero-section {
    padding-bottom: 0;
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .hero-content {
    gap: 4rem;
  }
}

.hero-text {
  order: 2;
}

@media (min-width: 768px) {
  .hero-text {
    order: 1;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-description {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
}

@media (min-width: 768px) {
  .hero-description {
    max-width: none;
  }
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-buttons {
    flex-direction: row;
    align-items: flex-start;
  }
}

.hero-visual {
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-visual {
    order: 2;
  }
}

/* Solar System Styles */
.solar-system {
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sun {
  position: relative;
  width: 120px;
  height: 120px;
  z-index: 10;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(45deg, 
    rgba(255, 215, 0, 0.3), 
    rgba(255, 165, 0, 0.4), 
    rgba(255, 20, 147, 0.3)
  );
  backdrop-filter: blur(15px);
  border: 3px solid rgba(255, 215, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow: 
    0 0 30px rgba(255, 215, 0, 0.8),
    0 0 60px rgba(255, 20, 147, 0.4),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.avatar-icon {
  font-size: 2.5rem;
  position: relative;
  z-index: 3;
}

.developer {
  animation: sunRotate 20s linear infinite;
  filter: drop-shadow(0 0 20px rgba(255, 215, 0, 1));
}

/* Orbital Paths */
.orbit {
  position: absolute;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

.orbit-1 {
  width: 180px;
  height: 180px;
  animation: orbitRotate1 8s linear infinite;
  border-color: rgba(255, 20, 147, 0.4);
  box-shadow: 0 0 10px rgba(255, 20, 147, 0.3);
}

.orbit-2 {
  width: 210px;
  height: 210px;
  animation: orbitRotate2 12s linear infinite;
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.orbit-3 {
  width: 240px;
  height: 240px;
  animation: orbitRotate3 16s linear infinite;
  border-color: rgba(50, 205, 50, 0.4);
  box-shadow: 0 0 10px rgba(50, 205, 50, 0.3);
}

.orbit-4 {
  width: 270px;
  height: 270px;
  animation: orbitRotate4 20s linear infinite;
  border-color: rgba(255, 165, 0, 0.4);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.3);
}

.orbit-5 {
  width: 300px;
  height: 300px;
  animation: orbitRotate5 24s linear infinite;
  border-color: rgba(138, 43, 226, 0.4);
  box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
}

.orbit-6 {
  width: 330px;
  height: 330px;
  animation: orbitRotate6 28s linear infinite;
  border-color: rgba(255, 69, 0, 0.4);
  box-shadow: 0 0 10px rgba(255, 69, 0, 0.3);
}

.orbit-7 {
  width: 360px;
  height: 360px;
  animation: orbitRotate7 32s linear infinite;
  border-color: rgba(30, 144, 255, 0.4);
  box-shadow: 0 0 10px rgba(30, 144, 255, 0.3);
}

.orbit-8 {
  width: 390px;
  height: 390px;
  animation: orbitRotate8 36s linear infinite;
  border-color: rgba(154, 205, 50, 0.4);
  box-shadow: 0 0 10px rgba(154, 205, 50, 0.3);
}

.orbit-9 {
  width: 420px;
  height: 420px;
  animation: orbitRotate9 40s linear infinite;
  border-color: rgba(255, 105, 180, 0.4);
  box-shadow: 0 0 10px rgba(255, 105, 180, 0.3);
}

/* Planets (Tech Icons) */
.planet {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  animation: planetGlow 2s ease-in-out infinite alternate;
}

.planet:hover {
  transform: translateX(-50%) scale(1.4);
  animation-play-state: paused;
}

.planet img {
  width: 32px;
  height: 32px;
  filter: brightness(1.3) saturate(1.2);
  transition: all 0.3s ease;
}

.planet:hover img {
  filter: brightness(1.8) saturate(1.5) drop-shadow(0 0 15px currentColor);
}

/* Individual Planet Styles - Retro Neon Colors */
.tech-vue {
  background: radial-gradient(circle, rgba(79, 192, 141, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #4fc08d;
  box-shadow: 
    0 0 20px rgba(79, 192, 141, 0.8),
    inset 0 0 10px rgba(79, 192, 141, 0.2);
  color: #4fc08d;
}

.tech-js {
  background: radial-gradient(circle, rgba(247, 223, 30, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #f7df1e;
  box-shadow: 
    0 0 20px rgba(247, 223, 30, 0.8),
    inset 0 0 10px rgba(247, 223, 30, 0.2);
  color: #f7df1e;
}

.tech-azure {
  background: radial-gradient(circle, rgba(0, 120, 215, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #0078d7;
  box-shadow: 
    0 0 20px rgba(0, 120, 215, 0.8),
    inset 0 0 10px rgba(0, 120, 215, 0.2);
  color: #0078d7;
}

.tech-dotnet {
  background: radial-gradient(circle, rgba(92, 107, 192, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #5c6bc0;
  box-shadow: 
    0 0 20px rgba(92, 107, 192, 0.8),
    inset 0 0 10px rgba(92, 107, 192, 0.2);
  color: #5c6bc0;
}

.tech-java {
  background: radial-gradient(circle, rgba(237, 94, 73, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #ed5e49;
  box-shadow: 
    0 0 20px rgba(237, 94, 73, 0.8),
    inset 0 0 10px rgba(237, 94, 73, 0.2);
  color: #ed5e49;
}

.tech-mssql {
  background: radial-gradient(circle, rgba(255, 69, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #ff4500;
  box-shadow: 
    0 0 20px rgba(255, 69, 0, 0.8),
    inset 0 0 10px rgba(255, 69, 0, 0.2);
  color: #ff4500;
}

.tech-angular {
  background: radial-gradient(circle, rgba(221, 0, 49, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #dd0031;
  box-shadow: 
    0 0 20px rgba(221, 0, 49, 0.8),
    inset 0 0 10px rgba(221, 0, 49, 0.2);
  color: #dd0031;
}

.tech-android {
  background: radial-gradient(circle, rgba(61, 220, 132, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #3ddc84;
  box-shadow: 
    0 0 20px rgba(61, 220, 132, 0.8),
    inset 0 0 10px rgba(61, 220, 132, 0.2);
  color: #3ddc84;
}

.tech-git {
  background: radial-gradient(circle, rgba(240, 80, 50, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-color: #f05032;
  box-shadow: 
    0 0 20px rgba(240, 80, 50, 0.8),
    inset 0 0 10px rgba(240, 80, 50, 0.2);
  color: #f05032;
}

/* Animation Keyframes */
@keyframes sunRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes planetGlow {
  0% { box-shadow: 0 0 15px currentColor; }
  100% { box-shadow: 0 0 25px currentColor, 0 0 35px currentColor; }
}

@keyframes orbitRotate1 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes orbitRotate2 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
}

@keyframes orbitRotate3 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes orbitRotate4 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
}

@keyframes orbitRotate5 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes orbitRotate6 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
}

@keyframes orbitRotate7 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes orbitRotate8 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
}

@keyframes orbitRotate9 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.avatar-glow {
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(255, 215, 0, 0.6) 0%, 
    rgba(255, 20, 147, 0.4) 30%,
    rgba(0, 255, 255, 0.2) 60%,
    transparent 100%
  );
  animation: pulse 3s ease-in-out infinite, retroGlow 4s ease-in-out infinite alternate;
  z-index: 1;
}

@keyframes pulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes retroGlow {
  0% { 
    background: radial-gradient(circle, 
      rgba(255, 215, 0, 0.6) 0%, 
      rgba(255, 20, 147, 0.4) 30%,
      rgba(0, 255, 255, 0.2) 60%,
      transparent 100%
    );
  }
  100% { 
    background: radial-gradient(circle, 
      rgba(255, 20, 147, 0.6) 0%, 
      rgba(0, 255, 255, 0.4) 30%,
      rgba(255, 215, 0, 0.2) 60%,
      transparent 100%
    );
  }
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  transform: rotate(45deg);
  animation: bounce-arrow 2s infinite;
}

@keyframes bounce-arrow {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(10px); }
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.hero-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.hero-btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.hero-btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

@media (max-width: 767px) {
  .solar-system {
    width: 320px;
    height: 320px;
  }
  
  .sun {
    width: 90px;
    height: 90px;
  }
  
  .avatar-icon {
    font-size: 1.8rem;
  }
  
  .orbit-1 { width: 130px; height: 130px; }
  .orbit-2 { width: 150px; height: 150px; }
  .orbit-3 { width: 170px; height: 170px; }
  .orbit-4 { width: 190px; height: 190px; }
  .orbit-5 { width: 210px; height: 210px; }
  .orbit-6 { width: 230px; height: 230px; }
  .orbit-7 { width: 250px; height: 250px; }
  .orbit-8 { width: 270px; height: 270px; }
  .orbit-9 { width: 290px; height: 290px; }
  
  .planet {
    width: 40px;
    height: 40px;
    top: -20px;
  }
  
  .planet img {
    width: 24px;
    height: 24px;
  }
}
</style>
