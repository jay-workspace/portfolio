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
          <div class="hero-avatar">
            <div class="avatar-placeholder">
              <!-- TODO: Replace with your actual photo -->
              <div class="avatar-icon pacman">🟡</div>
              <div class="ghost ghost-1">�</div>
              <div class="ghost ghost-2">👻</div>
              <div class="ghost ghost-3">�</div>
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
        name: 'Jayavijay Jayavelu',
        title: 'Senior Software Engineer',
        description: 'Full-stack developer with expertise in Android development, system programming, and database management. Experienced in building robust mobile applications, low-level database systems, and algorithmic solutions using Java, C, and modern development practices.',
        experience: 10,
        projects: 50,
        clients: 25
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

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #ffff00;
  text-shadow: 
    2px 2px 0 #ff0080,
    4px 4px 0 #00ffff,
    6px 6px 0 #ff8000,
    8px 8px 0 #8000ff,
    10px 10px 20px rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Courier New', monospace;
  word-wrap: break-word;
  hyphens: auto;
}

@media (min-width: 768px) {
  .hero-title {
    letter-spacing: 0.1em;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    letter-spacing: 0.15em;
  }
}

.hero-title {
  animation: titlePulse 2s ease-in-out infinite alternate;
}

@keyframes titlePulse {
  0% { 
    transform: scale(1);
    text-shadow: 2px 2px 0 #ff0080, 4px 4px 0 #00ffff, 6px 6px 0 #ff8000, 8px 8px 0 #8000ff, 10px 10px 20px rgba(0, 0, 0, 0.8);
  }
  100% { 
    transform: scale(1.02);
    text-shadow: 2px 2px 0 #00ffff, 4px 4px 0 #ff8000, 6px 6px 0 #8000ff, 8px 8px 0 #ff0080, 10px 10px 30px rgba(255, 255, 0, 0.8);
  }
}

.hero-subtitle {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  word-wrap: break-word;
}

.hero-description {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  word-wrap: break-word;
  max-width: 100%;
}

@media (min-width: 768px) {
  .hero-description {
    margin-bottom: 2.5rem;
  }
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
}

@media (min-width: 480px) {
  .hero-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .hero-buttons {
    justify-content: flex-start;
    margin-bottom: 3rem;
  }
}

.hero-btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  white-space: nowrap;
  text-align: center;
  min-width: fit-content;
}

.hero-btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
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
  font-size: 6rem;
  position: relative;
  z-index: 2;
}

.pacman {
  animation: pacmanMove 3s ease-in-out infinite;
  filter: drop-shadow(0 0 20px #ffff00);
}

@keyframes pacmanMove {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(10deg) scale(1.1); }
  50% { transform: rotate(-10deg) scale(0.9); }
  75% { transform: rotate(5deg) scale(1.05); }
}

.ghost {
  position: absolute;
  font-size: 2rem;
  animation: ghostFloat 4s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
}

.ghost-1 {
  top: 20%;
  left: 80%;
  animation-delay: 0s;
  color: #ff0080;
}

.ghost-2 {
  top: 60%;
  left: 10%;
  animation-delay: 1.3s;
  color: #00ffff;
}

.ghost-3 {
  top: 80%;
  left: 70%;
  animation-delay: 2.6s;
  color: #ff8000;
}

@keyframes ghostFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
  33% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
  66% { transform: translateY(10px) rotate(-5deg); opacity: 0.6; }
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: 
    radial-gradient(circle at 30% 30%, #ffff00, transparent 70%),
    radial-gradient(circle at 70% 70%, #ff0080, transparent 70%),
    linear-gradient(45deg, #ffff00, #ff0080, #00ffff, #ff8000);
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(25px);
  animation: avatarPulse 3s ease-in-out infinite;
}

@keyframes avatarPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.4;
  }
  50% { 
    transform: scale(1.2);
    opacity: 0.7;
  }
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
  
  .hero-avatar {
    width: 200px;
    height: 200px;
  }
  
  .avatar-icon {
    font-size: 3rem;
  }
}
</style>
