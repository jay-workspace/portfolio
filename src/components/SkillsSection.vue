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
          
          <div class="certification-section">
            <h4 class="cert-title">Certifications & Achievements</h4>
            <div class="cert-list">
              <div class="cert-item" v-for="cert in certifications" :key="cert.name">
                <div class="cert-icon">🏆</div>
                <div class="cert-info">
                  <div class="cert-name">{{ cert.name }}</div>
                  <div class="cert-year">{{ cert.year }}</div>
                </div>
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
  name: 'SkillsSection',
  data() {
    return {
      skillsData: [
        {
          name: 'Frontend Development',
          icon: '🎨',
          skills: [
            { name: 'JavaScript/TypeScript', level: 95 },
            { name: 'React.js', level: 90 },
            { name: 'Vue.js', level: 85 },
            { name: 'HTML5/CSS3', level: 95 },
            { name: 'Tailwind CSS', level: 80 },
            { name: 'Next.js', level: 85 }
          ]
        },
        {
          name: 'Backend Development',
          icon: '⚙️',
          skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'Express.js', level: 88 },
            { name: 'Django/FastAPI', level: 80 },
            { name: 'GraphQL', level: 75 },
            { name: 'REST APIs', level: 95 }
          ]
        },
        {
          name: 'Database & Cloud',
          icon: '☁️',
          skills: [
            { name: 'MongoDB', level: 85 },
            { name: 'PostgreSQL', level: 90 },
            { name: 'Redis', level: 75 },
            { name: 'AWS', level: 80 },
            { name: 'Docker', level: 85 },
            { name: 'Kubernetes', level: 70 }
          ]
        },
        {
          name: 'Tools & Methodologies',
          icon: '🛠️',
          skills: [
            { name: 'Git/GitHub', level: 95 },
            { name: 'CI/CD', level: 85 },
            { name: 'Agile/Scrum', level: 90 },
            { name: 'Testing (Jest/Cypress)', level: 80 },
            { name: 'Webpack/Vite', level: 85 },
            { name: 'Linux/Unix', level: 80 }
          ]
        }
      ], // TODO: Replace with your actual skills and proficiency levels
      expertiseTags: [
        'Full Stack Development',
        'Microservices Architecture',
        'RESTful APIs',
        'Database Design',
        'Performance Optimization',
        'DevOps Practices',
        'Team Leadership',
        'Code Review',
        'Agile Methodologies',
        'Problem Solving'
      ], // TODO: Replace with your actual expertise areas
      certifications: [
        { name: 'AWS Certified Solutions Architect', year: '2023' },
        { name: 'React Advanced Certification', year: '2022' },
        { name: 'MongoDB Certified Developer', year: '2022' },
        { name: 'Scrum Master Certification', year: '2021' }
      ] // TODO: Replace with your actual certifications
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
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  border-radius: 4px;
  transition: width 1s ease-in-out;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

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

.certification-section {
  margin-top: 2rem;
}

.cert-title {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.cert-list {
  display: grid;
  gap: 1rem;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cert-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.cert-icon {
  font-size: 1.5rem;
}

.cert-name {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
}

.cert-year {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
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
  
  .cert-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
