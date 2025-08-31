<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3 class="brand-name">{{ portfolioData.name }}</h3>
            <p class="brand-tagline">{{ portfolioData.tagline }}</p>
          </div>
          
          <div class="footer-links">
            <div class="links-section">
              <h4 class="links-title">Quick Links</h4>
              <ul class="links-list">
                <li><a href="#about" @click="scrollToSection('about')">About</a></li>
                <li><a href="#skills" @click="scrollToSection('skills')">Skills</a></li>
                <li><a href="#experience" @click="scrollToSection('experience')">Experience</a></li>
                <li><a href="#projects" @click="scrollToSection('projects')">Projects</a></li>
                <li><a href="#contact" @click="scrollToSection('contact')">Contact</a></li>
              </ul>
            </div>
            
            <div class="links-section">
              <h4 class="links-title">Services</h4>
              <ul class="links-list">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Consulting</a></li>
                <li><a href="#">Code Review</a></li>
              </ul>
            </div>
            
            <div class="links-section">
              <h4 class="links-title">Connect</h4>
              <div class="social-links">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.platform"
                  :href="social.url"
                  class="social-link"
                  target="_blank"
                  rel="noopener"
                  :title="social.platform"
                >
                  <span class="social-icon">{{ social.icon }}</span>
                </a>
              </div>
              <div class="contact-info">
                <p class="contact-item">
                  <span class="contact-icon">📧</span>
                  {{ portfolioData.email }}
                </p>
                <p class="contact-item">
                  <span class="contact-icon">📱</span>
                  {{ portfolioData.phone }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-meta">
            <div class="copyright">
              <p>&copy; {{ currentYear }} {{ portfolioData.name }}. All rights reserved.</p>
              <p class="built-with">Built with ❤️ using Vue.js & modern CSS</p>
            </div>
            
            <div class="footer-stats">
              <div class="stat-item">
                <span class="stat-value">{{ portfolioData.experience }}+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ portfolioData.projects }}+</span>
                <span class="stat-label">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="back-to-top" @click="scrollToTop" :class="{ visible: showBackToTop }">
        <span class="back-to-top-icon">↑</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      showBackToTop: false,
      portfolioData: {
        name: 'Jayavijay Jayavelu', // TODO: Replace with your actual name
        tagline: 'Crafting digital experiences with passion and precision', // TODO: Replace with your actual tagline
        email: 'j.vijay92@icloud.com',
        phone: '+91 8056125039', // TODO: Replace with your actual phone
        experience: 9, // TODO: Replace with your actual years of experience
        projects: 10, // TODO: Replace with your actual number of projects
      },
      socialLinks: [
        {
          platform: 'LinkedIn',
          icon: '💼',
          url: 'https://www.linkedin.com/in/jayavijay-jayavelu-79774099/' // TODO: Replace with your actual LinkedIn
        },
        {
          platform: 'GitHub',
          icon: '👨‍💻',
          url: 'https://github.com/jay-workspace' // TODO: Replace with your actual GitHub
        },
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    }
  }
}
</script>

<style scoped>
.footer {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  text-align: left;
}

.brand-name {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 1.1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.links-section {
  text-align: left;
}

.links-title {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.links-list {
  list-style: none;
  padding: 0;
}

.links-list li {
  margin-bottom: 0.8rem;
}

.links-list a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.links-list a:hover {
  color: white;
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(49, 130, 206, 0.4);
}

.social-icon {
  font-size: 1.2rem;
}

.contact-info {
  margin-top: 1rem;
}

.contact-item {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.contact-icon {
  font-size: 1rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin-bottom: 2rem;
}

.footer-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.built-with {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
}

.stat-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  z-index: 1000;
  border: 3px solid #1e40af;
  box-shadow: 
    0 4px 0 #1e40af,
    0 8px 15px rgba(0, 0, 0, 0.3);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 8px 0 #1e40af,
    0 16px 25px rgba(0, 0, 0, 0.4);
}

.back-to-top-icon {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 0 #1e40af;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 2rem;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-meta {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-stats {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
  
  .back-to-top-icon {
    font-size: 1.3rem;
  }
}
</style>
