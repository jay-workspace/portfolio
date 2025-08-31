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
            <h3 class="interests-title">Education</h3>
            <div class="education-list">
              <div class="education-item" v-for="education in aboutData.education" :key="education.degree">
                <div class="education-content">
                  <h4 class="education-degree">{{ education.degree }}</h4>
                  <p class="education-institution">{{ education.institution }}</p>
                  <span class="education-duration">{{ education.duration }}</span>
                  <span class="education-location">{{ education.location }}</span>
                </div>
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
        whoIAm: `I'm a Senior Software Engineer with a strong foundation in computer science and database systems. Based in Chicago, IL, I have extensive experience in mobile application development, system programming, and database management. My GitHub portfolio showcases projects ranging from Android applications to low-level database systems and algorithmic implementations.`,
        whatIDo: `I specialize in building robust software solutions across multiple domains - from Android mobile applications with real-time data integration to core database management systems. My expertise includes developing buffer managers, storage systems, and record management components that form the backbone of database engines. I'm passionate about clean code, efficient algorithms, and scalable system design.`,
        highlights: [
          {
            icon: '📱',
            title: 'Mobile Development',
            description: 'Android applications with real-time data, SQLite integration, and intuitive UI/UX'
          },
          {
            icon: '🛢️',
            title: 'Database Systems',
            description: 'Low-level database components including buffer management and storage systems'
          },
          {
            icon: '🧮',
            title: 'Algorithm Design',
            description: 'Efficient algorithms, data structures, and performance optimization techniques'
          }
        ],
        quickInfo: [
          { label: 'Location', value: 'Chicago, IL' },
          { label: 'GitHub', value: 'github.com/jayavijay29' },
          { label: 'LinkedIn', value: 'linkedin.com/in/jayavijay-jayavelu-79774099' },
          { label: 'Specialization', value: 'Mobile Dev, Systems Programming' },
          { label: 'Languages', value: 'Java, C, Android' },
          { label: 'Repositories', value: '10+ Open Source Projects' }
        ],
        interests: [
          'Android Development',
          'Database Management Systems',
          'Algorithm Implementation',
          'System Programming',
          'Mobile User Experience',
          'Performance Optimization'
        ],
        education: [
          {
            degree: 'Master\'s in Computer Science',
            institution: 'Illinois Institute of Technology, Chicago',
            duration: 'August 2016 – May 2018',
            location: 'Chicago, IL'
          },
          {
            degree: 'Bachelor of Technology in Information Technology',
            institution: 'Anna University, Chennai',
            duration: 'August 2009 – May 2013',
            location: 'Chennai, India'
          }
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

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.education-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.education-degree {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.education-institution {
  font-size: 0.95rem;
  color: #667eea;
  margin-bottom: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
}

.education-duration {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 0.25rem;
}

.education-location {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
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
