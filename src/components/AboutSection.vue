<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-content">
        <div class="about-text">
          <div class="about-card card comic-bubble">
            <h3 class="about-subtitle">Who I Am</h3>
            <p class="about-description">
              {{ aboutData.whoIAm }}
            </p>
            
            <h3 class="about-subtitle">What I Do</h3>
            <p class="about-description">
              {{ aboutData.whatIDo }}
            </p>
            
            <div class="about-highlights">
              <div class="highlight-item" v-for="highlight in aboutData.highlights" :key="highlight.title">
                <div class="highlight-icon">{{ highlight.icon }}</div>
                <div class="highlight-content">
                  <h4 class="highlight-title">{{ highlight.title }}</h4>
                  <p class="highlight-description">{{ highlight.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-info">
          <div class="info-card card">
            <h3 class="info-title">Quick Info</h3>
            <div class="info-grid">
              <div class="info-item" v-for="info in aboutData.quickInfo" :key="info.label">
                <span class="info-label">{{ info.label }}:</span>
                <span class="info-value">{{ info.value }}</span>
              </div>
            </div>
          </div>
          
          <div class="interests-card card">
            <h3 class="interests-title">Interests & Hobbies</h3>
            <div class="interests-grid">
              <div class="interest-item" v-for="interest in aboutData.interests" :key="interest">
                <span class="interest-icon">🎯</span>
                <span class="interest-text">{{ interest }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      aboutData: {
        whoIAm: `I'm a Senior Software Engineer with over 10 years of experience in full-stack development. I hold a Master's in Computer Science from Illinois Institute of Technology, Chicago, and have worked with leading companies like ShipBob Inc. and Wipro Technologies. My journey spans from developing enterprise applications to architecting microservices and micro frontends.`,
        whatIDo: `I specialize in building scalable web applications using .NET Core, Vue.js, and Azure Cloud services. At ShipBob, I've led the development of micro frontend architectures, implemented Section 321 compliance infrastructure, and managed engineering teams. I'm passionate about modernizing legacy systems and creating efficient, maintainable solutions.`,
        highlights: [
          {
            icon: '🏗️',
            title: 'Microservices Architecture',
            description: 'Designed and implemented scalable microservices and micro frontends'
          },
          {
            icon: '☁️',
            title: 'Azure Cloud Expert',
            description: 'Extensive experience with Azure Services, Functions, and DevOps'
          },
          {
            icon: '👥',
            title: 'Engineering Leadership',
            description: 'Managed engineering teams and led technical architecture decisions'
          }
        ],
        quickInfo: [
          { label: 'Location', value: 'Chennai, Tamil Nadu' },
          { label: 'Experience', value: '10+ Years' },
          { label: 'Education', value: 'MS Computer Science - IIT Chicago' },
          { label: 'Specialization', value: '.NET Core, Vue.js, Azure' },
          { label: 'Languages', value: 'English, Tamil' },
          { label: 'Remote Work', value: 'Available' }
        ],
        interests: [
          'Microservices Architecture',
          'Cloud Computing',
          'Frontend Technologies',
          'Mobile Development',
          'Algorithm Design'
        ]
      }
    }
  }
}
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-card {
  text-align: left;
  position: relative;
}

/* Comic-style speech bubble */
.comic-bubble {
  border-radius: 20px;
  position: relative;
}

.comic-bubble::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 30px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid rgba(255, 255, 255, 0.1);
  filter: drop-shadow(0 3px 0 rgba(49, 130, 206, 0.3));
}

.about-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #1e40af;
}

.about-subtitle:first-child {
  margin-top: 0;
}

.about-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.about-highlights {
  margin-top: 2rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.highlight-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.highlight-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.highlight-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.info-card,
.interests-card {
  text-align: left;
  margin-bottom: 2rem;
}

.info-title,
.interests-title {
  color: white;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-label {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.info-value {
  color: white;
  font-weight: 600;
}

.interests-grid {
  display: grid;
  gap: 0.8rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.interest-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.interest-icon {
  font-size: 1.2rem;
}

.interest-text {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-subtitle {
    font-size: 1.3rem;
  }
  
  .highlight-item {
    flex-direction: column;
    text-align: center;
  }
  
  .highlight-icon {
    min-width: auto;
  }
}
</style>
