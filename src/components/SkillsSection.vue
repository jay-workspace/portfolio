<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      
      <div class="skills-content">
        <div class="skills-categories">
          <div class="skill-category card" v-for="category in skillsData" :key="category.name">
            <div class="category-header">
              <div class="category-icon">{{ category.icon }}</div>
              <h3 class="category-title">{{ category.name }}</h3>
            </div>
            
            <div class="skills-grid">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-summary card">
          <h3 class="summary-title">Technical Expertise</h3>
          <div class="expertise-tags">
            <span class="tag" v-for="tag in expertiseTags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skillsData: [
        {
          name: 'Frontend Development',
          icon: '🎨',
          skills: [
            { name: 'Vue.js', level: 95 },
            { name: 'JavaScript', level: 95 },
            { name: 'AngularJS', level: 85 },
            { name: 'HTML5/CSS3', level: 90 },
            { name: 'jQuery', level: 85 },
            { name: 'Bootstrap', level: 80 }
          ]
        },
        {
          name: 'Backend Development',
          icon: '⚙️',
          skills: [
            { name: 'C#', level: 95 },
            { name: '.NET Core', level: 95 },
            { name: 'Entity Framework', level: 90 },
            { name: 'OAuth 2.0', level: 85 },
            { name: 'Java', level: 80 },
            { name: 'Microservices', level: 90 }
          ]
        },
        {
          name: 'Azure & Cloud',
          icon: '☁️',
          skills: [
            { name: 'Azure App Service', level: 90 },
            { name: 'Azure Functions', level: 90 },
            { name: 'Azure SQL DB', level: 85 },
            { name: 'Cosmos DB', level: 85 },
            { name: 'API Management', level: 85 },
            { name: 'Blob Storage', level: 80 }
          ]
        },
        {
          name: 'Tools & Architecture',
          icon: '🛠️',
          skills: [
            { name: 'Webpack', level: 85 },
            { name: 'Vue CLI', level: 90 },
            { name: 'Axios', level: 85 },
            { name: 'NUnit/Moq', level: 80 },
            { name: 'Event Driven Architecture', level: 85 },
            { name: 'Micro Frontends', level: 90 }
          ]
        }
      ],
      expertiseTags: [
        'Microservices Architecture',
        'Micro Frontends',
        '.NET Core',
        'Vue.js Development',
        'Azure Cloud Services',
        'Event Driven Architecture',
        'Full Stack Development',
        'Team Leadership',
        'System Migration',
        'Performance Optimization'
      ]
    }
  }
}
</script>

<style scoped>
.skills-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.skills-categories {
  display: grid;
  gap: 2rem;
}

.skill-category {
  text-align: left;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  font-size: 2rem;
}

.category-title {
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  color: white;
  font-weight: 500;
}

.skill-level {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
}

.skill-bar {
  height: 16px;
  background: 
    linear-gradient(90deg, 
      rgba(0, 8, 20, 0.9) 0%, 
      rgba(0, 29, 61, 0.9) 50%, 
      rgba(0, 8, 20, 0.9) 100%);
  border-radius: 25px;
  overflow: hidden;
  border: 3px solid #ffff00;
  position: relative;
  box-shadow: 
    inset 0 2px 5px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(255, 255, 0, 0.3);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #ffff00, #ff0080, #00ffff, #ff8000, #ffff00);
  background-size: 200% 100%;
  border-radius: 22px;
  transition: width 1s ease-in-out;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: pacmanProgress 3s linear infinite;
}

@keyframes pacmanProgress {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

/* Pac-Man dots in progress bar */
.skill-progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 2px, transparent 3px);
  background-size: 20px 16px;
  animation: progressDots 2s linear infinite;
}

@keyframes progressDots {
  0% { background-position: 0 0; }
  100% { background-position: 20px 0; }
}

/* Pac-Man progress bar pattern */
.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(45deg, transparent 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, transparent 50%, transparent 75%, rgba(0, 0, 0, 0.1) 75%);
  background-size: 12px 12px;
  animation: skillStripes 1.5s linear infinite;
}

@keyframes skillStripes {
  0% { background-position: 0 0; }
  100% { background-position: 12px 12px; }
}

/* Remove old shimmer effect - replaced with Pac-Man animation */

.skills-summary {
  text-align: left;
  position: sticky;
  top: 100px;
}

.summary-title {
  color: white;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .skills-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skills-summary {
    position: static;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .category-title {
    font-size: 1.3rem;
  }
  
  .expertise-tags {
    justify-content: center;
  }
}
</style>
