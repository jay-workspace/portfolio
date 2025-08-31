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
          company: 'ShipBob, Inc. – Ecommerce Fulfillment & Logistics Company',
          location: 'Chennai, Tamil Nadu, India',
          type: 'Full-time',
          duration: 'December 2022 – Present',
          description: 'Leading development of scalable infrastructure and micro frontend applications for ecommerce fulfillment and logistics operations.',
          achievements: [
            'Developed new infrastructure for mid market merchants leveraging Section 321 regulations',
            'Created a new micro frontend application for the entire transportation domain managing labeling and carrier services',
            'Architected scalable solutions for order management and fulfillment processes',
            'Led technical decisions and mentored development teams on modern architecture patterns'
          ],
          technologies: ['Vue.js', 'C#', '.NET Core', 'Azure Services', 'Microservices', 'Micro Frontends', 'Section 321 Compliance']
        },
        {
          title: 'Software Engineer III',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Full-time',
          duration: 'August 2021 – December 2022',
          description: 'Developed infrastructure for B2B vendor integrations and revamped order creation processes through microservices architecture.',
          achievements: [
            'Built new infrastructure for integrating and syncing orders from B2B vendors using third-party EDI connector service',
            'Revamped B2B order creation process by breaking the old monolith and moving it to micro frontend service',
            'Successfully migrated legacy systems to Vue.js 3 for improved maintenance and performance',
            'Implemented scalable integration patterns for external vendor systems'
          ],
          technologies: ['Vue.js 3', 'EDI Integration', 'Microservices', 'Micro Frontend', 'B2B Systems', '.NET Core']
        },
        {
          title: 'Interim Engineering Manager',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Management',
          duration: 'May 2021 – July 2021',
          description: 'Managed engineering teams and led infrastructure updates for inbound receiving processes.',
          achievements: [
            'Managed and updated existing inbound receiving process to deprecate legacy workflows',
            'Successfully added new label features to the receiving system',
            'Led cross-functional team coordination during critical system transitions',
            'Maintained development velocity while implementing major architectural changes'
          ],
          technologies: ['Team Management', 'System Architecture', 'Process Optimization', 'Legacy System Migration']
        },
        {
          title: 'Software Engineer II',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Full-time',
          duration: 'December 2018 – April 2021',
          description: 'Developed core fulfillment center integrations and modernized warehouse management systems.',
          achievements: [
            'Added logic to accommodate external fulfillment centers by validating endpoints through identity server claims',
            'Created Azure function to calculate estimated arrival dates using queue triggers and web jobs',
            'Proposed new architecture design for ShipBob Fulfillment Network with User Account Management integration',
            'Updated warehouse receiving portal UI and backend by removing dependencies and refreshing with Vue.js',
            'Upgraded customer portal from AngularJS to Vue.js improving overall application stability'
          ],
          technologies: ['Vue.js', 'Azure Functions', 'Identity Server', 'AngularJS Migration', 'Queue Processing', 'Web Jobs', 'JavaScript', '.NET Entity Framework']
        },
        {
          title: 'Software Engineer Intern',
          company: 'ShipBob, Inc.',
          location: 'Chicago, Illinois, U.S.A',
          type: 'Internship',
          duration: 'January 2018 – May 2018',
          description: 'Enhanced inventory management systems and developed warehouse optimization algorithms.',
          achievements: [
            'Enhanced inventory management system improving application maintainability',
            'Developed algorithm to determine shortest path for warehouse order fulfillment using bin formula',
            'Implemented solutions using Vue.js, JavaScript and .NET Entity Framework',
            'Contributed to core warehouse efficiency improvements'
          ],
          technologies: ['Vue.js', 'JavaScript', '.NET Entity Framework', 'Algorithm Development', 'Inventory Management']
        },
        {
          title: 'Software Engineer',
          company: 'Wipro Technologies - Indian Multinational IT Services & Consulting Firm',
          location: 'India',
          type: 'Full-time',
          duration: 'January 2014 – March 2016',
          description: 'Developed enterprise web applications and led server migration projects for major banking clients.',
          achievements: [
            'Developed web application for tracking attendance and efforts of Free Pool employees using Struts 2.x, JSP, and Oracle 11g',
            'Worked with ANZ Bank on Server Migration Project upgrading from Windows 2000 to Windows 2012',
            'Upgraded Java version from 1.5 to 1.7 and migrated security module from Spring Security to SPNEGO',
            'Developed admin application for CITI to maintain underwriter policies using modern frontend technologies'
          ],
          technologies: ['Struts 2.x', 'JSP', 'Tiles Framework', 'Oracle 11g', 'AngularJS', 'REST', 'HTML5', 'jQuery', 'CSS3', 'JavaScript', 'Spring Security', 'SPNEGO', 'Java']
        }
      ],
      careerHighlights: [
        {
          icon: '🏗️',
          title: 'Architecture Leadership',
          description: 'Led migration from monolith to microservices and micro frontends, designing scalable systems for enterprise-level ecommerce'
        },
        {
          icon: '☁️',
          title: 'Azure Expertise',
          description: 'Extensive experience with Azure services including Functions, App Service, SQL DB, and cloud-native architectures'
        },
        {
          icon: '🔄',
          title: 'Legacy Modernization',
          description: 'Successfully modernized multiple legacy systems, migrating from AngularJS to Vue.js and Windows 2000 to 2012'
        },
        {
          icon: '🌐',
          title: 'Full-Stack Mastery',
          description: 'Comprehensive experience across frontend, backend, cloud services, and database management spanning 10+ years'
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
}

@media (max-width: 768px) {
  .timeline-item {
    margin-bottom: 1.5rem;
  }
}

.timeline-marker {
  position: relative;
  flex-shrink: 0;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .timeline-marker {
    margin-right: 1rem;
  }
}

.marker-dot {
  width: 1rem;
  height: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
  flex-shrink: 0;
}

.marker-line {
  width: 2px;
  background: linear-gradient(to bottom, #667eea 0%, #764ba2 100%);
  flex-grow: 1;
  margin-top: 0.5rem;
  opacity: 0.6;
}

.timeline-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

@media (max-width: 640px) {
  .timeline-content {
    padding: 1rem;
  }
}

.timeline-content:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

@media (max-width: 640px) {
  .job-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}

.job-info {
  flex: 1;
}

.job-title {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
}

.company-name {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 500;
  color: #667eea;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;
}

.job-details {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .job-details {
    flex-direction: column;
    gap: 0.25rem;
  }
}

.job-location,
.job-type {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.job-duration {
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .job-duration {
    align-self: flex-start;
  }
}

.duration-badge {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #fff;
  padding: 0.375rem 0.875rem;
  border-radius: 1.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.job-description {
  margin-top: 1rem;
}

.description-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: clamp(0.875rem, 2vw, 0.95rem);
  word-wrap: break-word;
  hyphens: auto;
}

.achievements {
  margin-bottom: 1.5rem;
}

.achievements-title,
.tech-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements-list li {
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.8rem, 1.8vw, 0.85rem);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  word-wrap: break-word;
  hyphens: auto;
}

.achievements-list li::before {
  content: '•';
  color: #667eea;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
}

.experience-summary {
  margin-top: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
}

@media (max-width: 640px) {
  .experience-summary {
    padding: 1.5rem;
    margin-top: 2rem;
  }
}

.summary-title {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.highlights-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .highlights-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.highlight-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

@media (max-width: 480px) {
  .highlight-card {
    padding: 1rem;
    gap: 0.75rem;
  }
}

.highlight-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.highlight-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.highlight-info {
  flex: 1;
}

.highlight-title {
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
}

.highlight-desc {
  font-size: clamp(0.8rem, 1.8vw, 0.85rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  word-wrap: break-word;
  hyphens: auto;
}
</style>
