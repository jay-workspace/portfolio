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
          :class="{ active: activeFilter === 'mobile' }"
          @click="setFilter('mobile')"
        >
          Mobile Apps
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'systems' }"
          @click="setFilter('systems')"
        >
          System Programming
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'algorithms' }"
          @click="setFilter('algorithms')"
        >
          Algorithms
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
            
            <div class="project-links" v-if="project.githubUrl">
              <a :href="project.githubUrl" target="_blank" class="project-link github-link">
                <span>🔗</span> View on GitHub
              </a>
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
          title: 'StockWatch',
          category: 'mobile',
          icon: '📈',
          status: 'completed',
          description: 'Android application for real-time stock market tracking with portfolio management and financial analytics. Features dynamic color coding for gains/losses and integration with financial APIs.',
          features: [
            'Real-time stock price monitoring',
            'Interactive stock symbol search',
            'Dynamic color-coded price changes',
            'SQLite database for persistent storage',
            'Stock portfolio management',
            'Network connectivity validation'
          ],
          technologies: ['Android', 'Java', 'SQLite', 'JSON APIs', 'RecyclerView', 'AsyncTask'],
          githubUrl: 'https://github.com/jayavijay29/StockWatch'
        },
        {
          id: 2,
          title: 'MultipleQuickNotes',
          category: 'mobile',
          icon: '📝',
          status: 'completed',
          description: 'Android note-taking application with card-based UI for creating, editing, and managing multiple notes. Features JSON-based data persistence and intuitive user interface.',
          features: [
            'Card-based note interface',
            'Create, edit, and delete notes',
            'JSON file data persistence',
            'Timestamp tracking for notes',
            'Note content preview with truncation',
            'Confirmation dialogs for actions'
          ],
          technologies: ['Android', 'Java', 'JSON', 'CardView', 'RecyclerView', 'Material Design'],
          githubUrl: 'https://github.com/jayavijay29/MultipleQuickNotes'
        },
        {
          id: 3,
          title: 'Buffer Manager',
          category: 'systems',
          icon: '🗃️',
          status: 'completed',
          description: 'Database buffer management system implementing FIFO and LRU page replacement strategies. Core component for database management systems with efficient memory management.',
          features: [
            'FIFO and LRU page replacement algorithms',
            'Buffer pool initialization and management',
            'Page pinning and unpinning mechanisms',
            'Dirty page tracking and force writes',
            'Statistics tracking for I/O operations',
            'Comprehensive test suite'
          ],
          technologies: ['C', 'Database Systems', 'Memory Management', 'Data Structures', 'Makefile'],
          githubUrl: 'https://github.com/jayavijay29/Buffer_Manager'
        },
        {
          id: 4,
          title: 'Storage Manager',
          category: 'systems',
          icon: '💾',
          status: 'completed',
          description: 'Low-level storage management system for database operations providing file-based page storage with read/write capabilities and page management functionality.',
          features: [
            'Page file creation and management',
            'Block-level read/write operations',
            'File handle management',
            'Page capacity management',
            'Sequential and random page access',
            'Error handling and validation'
          ],
          technologies: ['C', 'File Systems', 'Database Storage', 'System Programming'],
          githubUrl: 'https://github.com/jayavijay29/Storage_Manager'
        },
        {
          id: 5,
          title: 'Record Manager',
          category: 'systems',
          icon: '📊',
          status: 'completed',
          description: 'Database record management system handling tuple operations, table schemas, and record organization. Provides high-level interface for database record manipulation.',
          features: [
            'Table and schema management',
            'Record insertion and deletion',
            'Tuple scanning and retrieval',
            'Attribute value management',
            'Record serialization/deserialization',
            'Integration with storage layer'
          ],
          technologies: ['C', 'Database Systems', 'Data Structures', 'Schema Management'],
          githubUrl: 'https://github.com/jayavijay29/Record_Manager'
        },
        {
          id: 6,
          title: 'Algorithm Project',
          category: 'algorithms',
          icon: '🧮',
          status: 'completed',
          description: 'Collection of algorithmic implementations and data structure solutions covering various computer science fundamentals and optimization techniques.',
          features: [
            'Classic algorithm implementations',
            'Data structure demonstrations',
            'Time and space complexity analysis',
            'Optimization techniques',
            'Educational code examples',
            'Performance benchmarking'
          ],
          technologies: ['Java', 'Algorithms', 'Data Structures', 'Performance Analysis'],
          githubUrl: 'https://github.com/jayavijay29/Algorithm_Project'
        }
      ]
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
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .filter-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  color: #fff;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.project-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-image {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  border: 2px dashed rgba(255, 255, 255, 0.3);
}

.project-icon {
  font-size: 2.5rem;
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
}

.project-status {
  flex-shrink: 0;
}

.status-badge {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: clamp(0.875rem, 2vw, 0.95rem);
  word-wrap: break-word;
  hyphens: auto;
}

.project-features {
  margin-bottom: 1.5rem;
}

.features-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;
  word-wrap: break-word;
  hyphens: auto;
}

.features-list li::before {
  content: '•';
  color: #667eea;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.project-tech {
  margin-bottom: 1.5rem;
}

.tech-stack {
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

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
}

.github-link {
  background: linear-gradient(135deg, #333 0%, #555 100%);
}

.github-link:hover {
  background: linear-gradient(135deg, #444 0%, #666 100%);
}

.projects-cta {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  word-wrap: break-word;
  hyphens: auto;
}

.cta-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 0.875rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  cursor: pointer;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

@media (max-width: 479px) {
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .project-status {
    align-self: flex-start;
  }
  
  .tech-stack {
    gap: 0.375rem;
  }
  
  .tech-tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .project-link {
    justify-content: center;
  }
}
</style>
