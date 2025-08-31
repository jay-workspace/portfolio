<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
        },title">Featured Projects</h2>
      
      <div class="projects-filter">
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          All Projects
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'web' }"
          @click="setFilter('web')"
        >
          Web Apps
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'mobile' }"
          @click="setFilter('mobile')"
        >
          Mobile
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'fullstack' }"
          @click="setFilter('fullstack')"
        >
          Full Stack
        </button>
      </div>
      
      <div class="projects-grid">
        <div 
          class="project-card card"
          v-for="project in filteredProjects"
          :key="project.id"
        >
          <div class="project-image">
            <div class="image-placeholder">
              <span class="project-icon">{{ project.icon }}</span>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-status">
                <span class="status-badge" :class="project.status">{{ project.status }}</span>
              </div>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-features">
              <h4 class="features-title">Key Features:</h4>
              <ul class="features-list">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            
            <div class="project-tech">
              <div class="tech-stack">
                <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="projects-cta">
        <p class="cta-text">Interested in seeing more projects or discussing a collaboration?</p>
        <a href="#contact" class="btn cta-btn" @click="scrollToSection('contact')">
          Let's Work Together
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      activeFilter: 'all',
      projectsData: [
        {
          id: 1,
          title: 'ShipBob Transportation Micro Frontend',
          category: 'fullstack',
          icon: '�',
          status: 'completed',
          description: 'A comprehensive micro frontend application for the transportation domain managing carrier services, labeling, and logistics operations.',
          features: [
            'Micro frontend architecture',
            'Carrier service management',
            'Automated labeling system',
            'Real-time tracking integration',
            'Multi-tenant support'
          ],
          technologies: ['Vue.js', '.NET Core', 'Azure Services', 'Microservices', 'OAuth 2.0']
        },
        {
          id: 2,
          title: 'Section 321 Compliance Infrastructure',
          category: 'fullstack',
          icon: '📋',
          status: 'completed',
          description: 'Infrastructure development for mid-market merchants to leverage Section 321 regulations for international shipping compliance.',
          features: [
            'Regulatory compliance automation',
            'Multi-merchant support',
            'Real-time validation',
            'Integration with existing systems',
            'Audit trail management'
          ],
          technologies: ['Vue.js', '.NET Core', 'Azure Functions', 'SQL Server', 'API Management']
        },
        {
          id: 3,
          title: 'News Gateway Android App',
          category: 'mobile',
          icon: '📱',
          status: 'completed',
          description: 'Android application for aggregating and displaying news from multiple sources with personalized feeds and offline reading.',
          features: [
            'Multi-source news aggregation',
            'Personalized news feeds',
            'Offline reading capability',
            'Social sharing integration',
            'Push notifications'
          ],
          technologies: ['Android', 'Java', 'REST APIs', 'SQLite', 'Material Design']
        },
        {
          id: 4,
          title: 'Stock Watch Android App',
          category: 'mobile',
          icon: '�',
          status: 'completed',
          description: 'Real-time stock market tracking application with portfolio management, alerts, and financial analytics.',
          features: [
            'Real-time stock prices',
            'Portfolio management',
            'Price alerts',
            'Market analytics',
            'Watchlist management'
          ],
          technologies: ['Android', 'Java', 'Financial APIs', 'Charts', 'Firebase']
        },
        {
          id: 5,
          title: 'B2B Order Management System',
          category: 'fullstack',
          icon: '🏢',
          status: 'completed',
          description: 'Enterprise B2B order management system with EDI integration and automated processing workflows.',
          features: [
            'EDI connector integration',
            'Automated order processing',
            'Vendor management',
            'Order tracking',
            'Analytics dashboard'
          ],
          technologies: ['Vue.js', '.NET Core', 'EDI', 'SQL Server', 'Azure Services']
        },
        {
          id: 5,
          title: 'Analytics Dashboard',
          category: 'web',
          icon: '📊',
          status: 'completed',
          description: 'A comprehensive analytics dashboard with real-time data visualization, custom reports, and predictive insights.',
          features: [
            'Real-time data visualization',
            'Custom report builder',
            'Predictive analytics',
            'Export capabilities',
            'Multi-tenant support'
          ],
          technologies: ['Next.js', 'D3.js', 'Python', 'FastAPI', 'TimescaleDB']
        },
        {
          id: 6,
          title: 'Social Media Platform',
          category: 'fullstack',
          icon: '📱',
          status: 'completed',
          description: 'A social media platform with real-time messaging, content sharing, and advanced privacy controls.',
          features: [
            'Real-time messaging',
            'Media sharing',
            'Privacy controls',
            'Content moderation',
            'Social analytics'
          ],
          technologies: ['Vue.js', 'Node.js', 'GraphQL', 'MongoDB', 'Socket.io']
        }
      ] // TODO: Replace with your actual projects
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projectsData
      }
      return this.projectsData.filter(project => project.category === this.activeFilter)
    }
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter
    },
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
.projects-filter {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .projects-filter {
    gap: 1rem;
    margin-bottom: 3rem;
  }
}

.filter-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  min-width: fit-content;
}

@media (min-width: 768px) {
  .filter-btn {
    padding: 0.75rem 1.5rem;
    border-width: 3px;
    letter-spacing: 0.1em;
  }
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 
    0 3px 0 rgba(49, 130, 206, 0.5),
    0 6px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(49, 130, 206, 0.5);
}

.filter-btn.active {
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  border-color: #1e40af;
  box-shadow: 
    0 4px 0 #1e40af,
    0 8px 15px rgba(49, 130, 206, 0.4);
  text-shadow: 1px 1px 0 #1e40af;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    margin-bottom: 4rem;
  }
}

.project-card {
  text-align: left;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  position: relative;
  height: 200px;
  margin: -2rem -2rem 1.5rem -2rem;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-icon {
  font-size: 4rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  color: white;
  font-size: clamp(1.125rem, 3vw, 1.3rem);
  font-weight: 600;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 1.3;
}

.status-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}

.status-badge.completed {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-badge.in-progress {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  hyphens: auto;
}

.features-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.features-list li {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  padding-left: 1.2rem;
  position: relative;
  font-size: 0.9rem;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #3182ce;
  font-weight: bold;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: clamp(0.75rem, 2vw, 0.8rem);
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
}

.projects-cta {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  margin: 0 1rem;
}

@media (min-width: 768px) {
  .projects-cta {
    padding: 3rem 2rem;
    margin: 0;
  }
}

.cta-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  margin-bottom: 1.5rem;
  word-wrap: break-word;
}

@media (min-width: 768px) {
  .cta-text {
    margin-bottom: 2rem;
  }
}

.cta-btn {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  padding: 0.875rem 1.5rem;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .cta-btn {
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .projects-filter {
    gap: 0.25rem;
    margin-bottom: 1.5rem;
  }
  
  .filter-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
  
  .projects-grid {
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
  
  .tech-stack {
    gap: 0.4rem;
  }
  
  .tech-tag {
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
  }
  
  .projects-cta {
    padding: 1.5rem 1rem;
    margin: 0 0.5rem;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .projects-filter {
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 0.5rem;
  }
  
  .projects-filter::-webkit-scrollbar {
    display: none;
  }
}
</style>
