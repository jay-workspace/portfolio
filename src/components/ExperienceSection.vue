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
          title: 'Senior Software Engineer',
          company: 'ShipBob, Inc.',
          location: 'Chennai, Tamil Nadu, India',
          type: 'Full-time',
          duration: 'December 2022 – Present',
          description: 'Leading development of scalable microservices and micro frontend applications for ecommerce fulfillment and logistics. Specialized in Section 321 compliance infrastructure and transportation domain solutions.',
          achievements: [
            'Developed new infrastructure for mid market merchants leveraging Section 321 regulations',
            'Created micro frontend application for transportation domain handling labeling and carrier services',
            'Architected scalable solutions for order management and fulfillment processes',
            'Led technical decisions and mentored development teams'
          ],
          technologies: ['Vue.js', 'C#', '.NET Core', 'Azure Services', 'Microservices', 'Micro Frontends']
        },
        {
          title: 'Software Engineer III',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Full-time',
          duration: 'August 2021 – December 2022',
          description: 'Developed infrastructure for B2B vendor integrations and revamped order creation processes. Led migration from monolith to microservices architecture.',
          achievements: [
            'Built new infrastructure for B2B vendor integration using third-party EDI connector',
            'Revamped B2B order creation by breaking monolith into micro frontend service',
            'Successfully migrated legacy systems to Vue.js 3',
            'Improved system maintainability and scalability'
          ],
          technologies: ['Vue.js 3', '.NET Core', 'EDI', 'Microservices', 'Azure Functions']
        },
        {
          title: 'Interim Engineering Manager',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Management',
          duration: 'May 2021 – July 2021',
          description: 'Managed engineering team and led the deprecation of legacy inbound receiving process while implementing new label features.',
          achievements: [
            'Managed development team during critical system migration',
            'Successfully deprecated old receiving flow',
            'Implemented new label features improving operational efficiency',
            'Coordinated cross-functional teams for seamless transition'
          ],
          technologies: ['Team Management', 'Vue.js', '.NET Core', 'Azure Services']
        },
        {
          title: 'Software Engineer II',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Full-time',
          duration: 'December 2018 – April 2021',
          description: 'Developed solutions for external fulfillment centers and created Azure functions for order management. Led UI modernization initiatives.',
          achievements: [
            'Integrated external fulfillment centers with identity server claims validation',
            'Created Azure function for estimated arrival date calculation',
            'Proposed new architecture for ShipBob Fulfillment Network',
            'Migrated warehouse portal UI from AngularJS to Vue.js'
          ],
          technologies: ['Vue.js', 'Azure Functions', 'Identity Server', 'AngularJS', '.NET Framework']
        },
        {
          title: 'Software Engineer Intern',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Internship',
          duration: 'January 2018 – May 2018',
          description: 'Enhanced inventory management system and developed warehouse optimization algorithms during graduate studies.',
          achievements: [
            'Enhanced inventory management system maintainability',
            'Developed shortest path algorithm for warehouse order fulfillment',
            'Improved bin formula optimization for efficient picking',
            'Contributed to core business logic improvements'
          ],
          technologies: ['Vue.js', 'JavaScript', '.NET Entity Framework', 'Algorithm Design']
        },
        {
          title: 'Software Developer',
          company: 'Wipro Technologies',
          location: 'Chennai, India',
          type: 'Full-time',
          duration: 'January 2014 – March 2016',
          description: 'Developed enterprise applications for major clients including ANZ Bank and CITI. Worked on web applications, server migrations, and administrative tools.',
          achievements: [
            'Developed attendance tracking application for Free Pool employees',
            'Led ANZ Bank server migration from Windows 2000 to Windows 2012',
            'Upgraded JAVA applications from version 1.5 to 1.7',
            'Built admin application for CITI underwriter policy management'
          ],
          technologies: ['AngularJS', 'Java', 'Struts 2.x', 'Oracle 11g', 'REST APIs', 'Spring Security']
        }
      ],
      careerHighlights: [
        {
          icon: '🏗️',
          title: 'Microservices Architecture',
          description: 'Led migration from monolith to microservices and micro frontends at ShipBob'
        },
        {
          icon: '👥',
          title: 'Engineering Management',
          description: 'Successfully managed engineering teams and led technical architecture decisions'
        },
        {
          icon: '☁️',
          title: 'Azure Cloud Expertise',
          description: 'Extensive experience with Azure Functions, App Services, and cloud architecture'
        },
        {
          icon: '🎯',
          title: 'System Modernization',
          description: 'Led multiple migrations from legacy systems to modern Vue.js and .NET Core'
        }
      ]
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
  background: linear-gradient(45deg, #3182ce, #2b77cb);
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
  background: linear-gradient(45deg, #3182ce, #2b77cb);
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
  color: #3182ce;
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
