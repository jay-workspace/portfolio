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
          
          <div class="hero-stats">
            <div class="stat-item card">
              <div class="stat-number">{{ portfolioData.experience }}+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item card">
              <div class="stat-number">{{ portfolioData.projects }}+</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item card">
              <div class="stat-number">{{ portfolioData.clients }}+</div>
              <div class="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-avatar">
            <div class="avatar-placeholder">
              <!-- TODO: Replace with your actual photo -->
              <div class="avatar-icon">👨‍💻</div>
            </div>
            <div class="avatar-glow"></div>
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
        name: 'John Developer', // TODO: Replace with your actual name
        title: 'Senior Full Stack Developer', // TODO: Replace with your actual title
        description: 'Passionate about creating innovative web solutions with 8+ years of experience in modern technologies. Specialized in React, Vue.js, Node.js, and cloud architectures.', // TODO: Replace with your actual description
        experience: 8, // TODO: Replace with your actual years of experience
        projects: 50, // TODO: Replace with your actual number of projects
        clients: 25 // TODO: Replace with your actual number of clients
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
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 
    3px 3px 0 #1e40af,
    6px 6px 0 #1e3a8a,
    9px 9px 15px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  min-width: 120px;
  border: 3px solid rgba(49, 130, 206, 0.5);
  border-radius: 12px;
  background: rgba(49, 130, 206, 0.1);
  position: relative;
  overflow: hidden;
}

/* Comic-style burst effect */
.stat-item::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: 
    radial-gradient(circle at 20% 20%, #3182ce 2px, transparent 2px),
    radial-gradient(circle at 80% 20%, #3182ce 2px, transparent 2px),
    radial-gradient(circle at 20% 80%, #3182ce 2px, transparent 2px),
    radial-gradient(circle at 80% 80%, #3182ce 2px, transparent 2px);
  background-size: 20px 20px;
  opacity: 0.3;
  z-index: -1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 #1e40af;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-avatar {
  position: relative;
  width: 300px;
  height: 300px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.avatar-icon {
  font-size: 4rem;
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  animation: pulse 2s ease-in-out infinite;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-arrow:hover {
  border-color: rgba(255, 255, 255, 0.7);
  transform: rotate(45deg) scale(1.1);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(45deg);
  }
  40% {
    transform: translateY(-10px) rotate(45deg);
  }
  60% {
    transform: translateY(-5px) rotate(45deg);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .hero-avatar {
    width: 200px;
    height: 200px;
  }
  
  .avatar-icon {
    font-size: 3rem;
  }
}
</style>
