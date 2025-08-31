<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-content">
        <div class="about-text">
          <div class="about-card card">
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
        whoIAm: `I'm a passionate Senior Full Stack Developer with over 8 years of experience in creating robust, scalable web applications. I love turning complex problems into simple, beautiful solutions. My journey in tech started with curiosity and has evolved into a career dedicated to building amazing digital experiences.`, // TODO: Replace with your actual story
        whatIDo: `I specialize in full-stack development using modern technologies like React, Vue.js, Node.js, and Python. I work with both startups and enterprise clients to deliver high-quality software solutions. From concept to deployment, I handle every aspect of the development lifecycle with attention to detail and performance optimization.`, // TODO: Replace with your actual work description
        highlights: [
          {
            icon: '🚀',
            title: 'Performance Optimization',
            description: 'Expertise in optimizing applications for speed and scalability'
          },
          {
            icon: '🔧',
            title: 'Full Stack Development',
            description: 'End-to-end development from database to user interface'
          },
          {
            icon: '☁️',
            title: 'Cloud Architecture',
            description: 'Experience with AWS, Azure, and modern DevOps practices'
          },
          {
            icon: '👥',
            title: 'Team Leadership',
            description: 'Leading development teams and mentoring junior developers'
          }
        ], // TODO: Replace with your actual highlights
        quickInfo: [
          { label: 'Location', value: 'San Francisco, CA' }, // TODO: Replace with your actual location
          { label: 'Experience', value: '8+ Years' }, // TODO: Replace with your actual experience
          { label: 'Availability', value: 'Open to Opportunities' }, // TODO: Replace with your actual availability
          { label: 'Education', value: 'BS Computer Science' }, // TODO: Replace with your actual education
          { label: 'Languages', value: 'English, Spanish' }, // TODO: Replace with your actual languages
          { label: 'Remote Work', value: 'Available' } // TODO: Replace with your actual remote work preference
        ],
        interests: [
          'Open Source Contributing',
          'Tech Blogging',
          'Mountain Hiking',
          'Photography',
          'Chess',
          'Machine Learning'
        ] // TODO: Replace with your actual interests
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
}

.about-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  margin-top: 2rem;
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
