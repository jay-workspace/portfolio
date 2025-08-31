<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      
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
            <div class="project-overlay">
              <div class="overlay-buttons">
                <a :href="project.liveUrl" class="btn btn-small" target="_blank" rel="noopener">
                  🚀 Live Demo
                </a>
                <a :href="project.githubUrl" class="btn btn-small btn-outline" target="_blank" rel="noopener">
                  📁 Code
                </a>
              </div>
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
            
            <div class="project-metrics">
              <div class="metric-item" v-for="metric in project.metrics" :key="metric.label">
                <span class="metric-value">{{ metric.value }}</span>
                <span class="metric-label">{{ metric.label }}</span>
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
          technologies: ['Vue.js', '.NET Core', 'Azure Services', 'Microservices', 'OAuth 2.0'],
          liveUrl: '#',
          githubUrl: '#',
          metrics: [
            { label: 'Orders', value: '100K+' },
            { label: 'Performance', value: '98%' },
            { label: 'Carriers', value: '50+' }
          ]
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
          technologies: ['Vue.js', '.NET Core', 'Azure Functions', 'SQL Server', 'API Management'],
          liveUrl: '#',
          githubUrl: '#',
          metrics: [
            { label: 'Merchants', value: '500+' },
            { label: 'Compliance', value: '100%' },
            { label: 'Processing', value: '<1s' }
          ]
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
          technologies: ['Android', 'Java', 'REST APIs', 'SQLite', 'Material Design'],
          liveUrl: '#',
          githubUrl: '#',
          metrics: [
            { label: 'Downloads', value: '1K+' },
            { label: 'Sources', value: '20+' },
            { label: 'Rating', value: '4.5/5' }
          ]
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
          technologies: ['Android', 'Java', 'Financial APIs', 'Charts', 'Firebase'],
          liveUrl: '#',
          githubUrl: '#',
          metrics: [
            { label: 'Stocks', value: '500+' },
            { label: 'Users', value: '800+' },
            { label: 'Updates', value: 'Real-time' }
          ]
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
          technologies: ['Vue.js', '.NET Core', 'EDI', 'SQL Server', 'Azure Services'],
          liveUrl: '#',
          githubUrl: '#',
          metrics: [
            { label: 'Security', value: 'A+' },
            { label: 'Speed', value: '<2s' },
            { label: 'Rating', value: '4.9/5' }
          ]
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
          technologies: ['Next.js', 'D3.js', 'Python', 'FastAPI', 'TimescaleDB'],
          liveUrl: '#', // TODO: Replace with actual project URL
          githubUrl: '#', // TODO: Replace with actual GitHub URL
          metrics: [
            { label: 'Data Points', value: '1M+' },
            { label: 'Charts', value: '25+' },
            { label: 'Load Time', value: '<1s' }
          ]
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
          technologies: ['Vue.js', 'Node.js', 'GraphQL', 'MongoDB', 'Socket.io'],
          liveUrl: '#', // TODO: Replace with actual project URL
          githubUrl: '#', // TODO: Replace with actual GitHub URL
          metrics: [
            { label: 'Users', value: '8K+' },
            { label: 'Posts', value: '50K+' },
            { label: 'Engagement', value: '78%' }
          ]
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
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 
    0 4px 0 rgba(49, 130, 206, 0.5),
    0 8px 15px rgba(0, 0, 0, 0.2);
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
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

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 1rem;
}

.btn-small {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
}

.btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
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
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
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
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-metrics {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.metric-item {
  text-align: center;
}

.metric-value {
  display: block;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.metric-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}

.projects-cta {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.cta-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-btn {
  font-size: 1.1rem;
  padding: 1rem 2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .overlay-buttons {
    flex-direction: column;
  }
  
  .project-metrics {
    flex-direction: column;
    gap: 1rem;
  }
  
  .projects-filter {
    flex-direction: column;
    align-items: center;
  }
}
</style>
