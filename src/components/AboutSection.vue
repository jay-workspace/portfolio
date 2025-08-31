<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-content">
        <div class="about-main">
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
        
        <div class="about-sidebar">
          <div class="education-card card">
            <h3 class="education-title">Education</h3>
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
            icon: '🌐',
            title: 'Web App Development',
            description: 'Full-stack web applications with Vue.js, .NET Core, and Azure cloud integration'
          },
          {
            icon: '🧮',
            title: 'Algorithm Design',
            description: 'Efficient algorithms, data structures, and performance optimization techniques'
          }
        ],
        interests: [
          'Android Development',
          'Web Application Development',
          'Algorithm Implementation',
          'System Programming',
          'Mobile User Experience',
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
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: start;
}

.about-main {
  width: 100%;
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Unified card styling */
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
  text-align: left;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
}

.about-card {
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

/* Sidebar card titles */
.info-title,
.education-title,
.interests-title {
  color: #64ffda;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* Info card styles */
.info-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  color: #ccd6f6;
  font-weight: 500;
}

.info-value {
  color: #a8b2d1;
  font-weight: 400;
}

/* Education card styles */
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.education-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border-left: 3px solid #64ffda;
  transition: all 0.3s ease;
}

.education-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(3px);
}

.education-degree {
  font-size: 1rem;
  font-weight: 600;
  color: #ccd6f6;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.education-institution {
  font-size: 0.9rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.4;
}

.education-duration {
  font-size: 0.8rem;
  color: #8892b0;
  display: block;
  margin-bottom: 0.25rem;
}

.education-location {
  font-size: 0.8rem;
  color: #8892b0;
  font-style: italic;
}

/* Interests card styles */
.interests-grid {
  display: grid;
  gap: 0.75rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.interest-item:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateX(5px);
}

.interest-icon {
  font-size: 1.2rem;
  color: #64ffda;
}

.interest-text {
  color: #ccd6f6;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Responsive design */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .about-sidebar {
    order: -1;
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
  
  .card {
    padding: 1rem;
  }
}
</style>
