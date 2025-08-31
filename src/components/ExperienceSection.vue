<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Professional Experience</h2>
      
      <div class="experience-timeline">
        <div class="timeline-item" v-for="(job, index) in experienceData" :key="index">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
            <div class="marker-line" v-if="index < experienceData.length - 1"></div>
          </div>
          
          <div class="timeline-content card">
            <div class="job-header">
              <div class="job-info">
                <h3 class="job-title">{{ job.title }}</h3>
                <h4 class="company-name">{{ job.company }}</h4>
                <div class="job-details">
                  <span class="job-location">📍 {{ job.location }}</span>
                  <span class="job-type">💼 {{ job.type }}</span>
                </div>
              </div>
              <div class="job-duration">
                <span class="duration-badge">{{ job.duration }}</span>
              </div>
            </div>
            
            <div class="job-description">
              <p class="description-text">{{ job.description }}</p>
              
              <div class="achievements">
                <h5 class="achievements-title">Key Achievements:</h5>
                <ul class="achievements-list">
                  <li v-for="achievement in job.achievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
              
              <div class="tech-stack">
                <h5 class="tech-title">Technologies Used:</h5>
                <div class="tech-tags">
                  <span class="tech-tag" v-for="tech in job.technologies" :key="tech">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="experience-summary card">
        <h3 class="summary-title">Career Highlights</h3>
        <div class="highlights-grid">
          <div class="highlight-card" v-for="highlight in careerHighlights" :key="highlight.title">
            <div class="highlight-icon">{{ highlight.icon }}</div>
            <div class="highlight-info">
              <h4 class="highlight-title">{{ highlight.title }}</h4>
              <p class="highlight-desc">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experienceData: [
        {
          title: 'Senior Full Stack Developer',
          company: 'TechCorp Solutions',
          location: 'San Francisco, CA',
          type: 'Full-time',
          duration: '2022 - Present',
          description: 'Leading development of scalable web applications using modern technologies. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
          achievements: [
            'Improved application performance by 40% through optimization',
            'Led a team of 5 developers on critical client projects',
            'Implemented CI/CD pipeline reducing deployment time by 60%',
            'Successfully delivered 15+ projects on time and within budget'
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
        },
        {
          title: 'Full Stack Developer',
          company: 'StartupTech Inc.',
          location: 'Remote',
          type: 'Full-time',
          duration: '2020 - 2022',
          description: 'Developed and maintained multiple web applications from concept to deployment. Worked closely with product teams to deliver user-focused solutions.',
          achievements: [
            'Built 3 major applications from scratch serving 10k+ users',
            'Reduced API response time by 50% through database optimization',
            'Implemented real-time features using WebSocket technology',
            'Mentored 2 junior developers and conducted technical interviews'
          ],
          technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Redis', 'Jest', 'GitHub Actions']
        },
        {
          title: 'Frontend Developer',
          company: 'Digital Agency Pro',
          location: 'New York, NY',
          type: 'Full-time',
          duration: '2018 - 2020',
          description: 'Focused on creating responsive and interactive user interfaces for various client projects. Collaborated with designers and backend developers.',
          achievements: [
            'Delivered 20+ responsive websites with 99% client satisfaction',
            'Improved mobile performance scores by 35% across all projects',
            'Introduced modern build tools improving development workflow',
            'Created reusable component library used across multiple projects'
          ],
          technologies: ['JavaScript', 'React', 'SCSS', 'Webpack', 'jQuery', 'Bootstrap']
        },
        {
          title: 'Junior Web Developer',
          company: 'WebSolutions Ltd.',
          location: 'Boston, MA',
          type: 'Full-time',
          duration: '2017 - 2018',
          description: 'Started my professional journey developing small to medium-scale web applications. Gained experience in both frontend and backend technologies.',
          achievements: [
            'Completed 10+ client projects with excellent feedback',
            'Learned and applied modern development practices',
            'Contributed to team knowledge sharing sessions',
            'Achieved rapid skill development and promotion within 1 year'
          ],
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
        }
      ], // TODO: Replace with your actual work experience
      careerHighlights: [
        {
          icon: '🚀',
          title: 'Project Leadership',
          description: 'Successfully led and delivered 50+ projects with teams of various sizes'
        },
        {
          icon: '👥',
          title: 'Team Mentorship',
          description: 'Mentored 10+ junior developers helping them advance their careers'
        },
        {
          icon: '⚡',
          title: 'Performance Optimization',
          description: 'Consistently improved application performance by 30-50% across projects'
        },
        {
          icon: '🎯',
          title: 'Client Satisfaction',
          description: 'Maintained 98% client satisfaction rate throughout my career'
        }
      ] // TODO: Replace with your actual career highlights
    }
  }
}
</script>

<style scoped>
.experience-timeline {
  position: relative;
  margin-bottom: 4rem;
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-marker {
  position: relative;
  z-index: 2;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 3;
}

.marker-line {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
}

.timeline-content {
  flex: 1;
  text-align: left;
  margin-top: -10px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.job-title {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.company-name {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
}

.job-details {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.duration-badge {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
}

.description-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements {
  margin-bottom: 1.5rem;
}

.achievements-title {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
}

.achievements-list li {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievements-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.tech-stack {
  margin-top: 1.5rem;
}

.tech-title {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.experience-summary {
  text-align: left;
}

.summary-title {
  color: white;
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
}

.highlight-icon {
  font-size: 2rem;
  min-width: 50px;
}

.highlight-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.highlight-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
    gap: 1rem;
  }
  
  .timeline-marker {
    align-self: flex-start;
    margin-left: 1rem;
  }
  
  .marker-line {
    height: 60px;
  }
  
  .job-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .job-details {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .highlight-card {
    flex-direction: column;
    text-align: center;
  }
  
  .tech-tags {
    justify-content: center;
  }
}
</style>
