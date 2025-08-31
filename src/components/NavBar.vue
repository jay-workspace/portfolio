<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="nav-logo" @click.prevent="scrollToTop">
          <span class="logo-text">{{ portfolioData.name }}</span>
        </div>
        
        <div class="nav-links" :class="{ 'nav-open': isMenuOpen }">
          <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }" @click="scrollToSection('about')">About</a>
          <a href="#skills" class="nav-link" :class="{ active: activeSection === 'skills' }" @click="scrollToSection('skills')">Skills</a>
          <a href="#experience" class="nav-link" :class="{ active: activeSection === 'experience' }" @click="scrollToSection('experience')">Experience</a>
          <a href="#projects" class="nav-link" :class="{ active: activeSection === 'projects' }" @click="scrollToSection('projects')">Projects</a>
          <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }" @click="scrollToSection('contact')">Contact</a>
          <a href="#" class="btn nav-btn" @click="downloadResume">Download CV</a>
        </div>
        
        <div class="nav-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
      activeSection: '',
      portfolioData: {
        name: 'Jay Developer'
      }
    }
  },
  mounted() {
    // Add scroll listener to track active section
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Initial check
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact']
      const scrollPos = window.scrollY + 100 // Offset for navbar
      
      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            this.activeSection = section
            break
          }
        }
      }
      
      // If we're at the top, no section is active
      if (window.scrollY < 300) {
        this.activeSection = ''
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    scrollToTop() {
      // Clear the hash from URL
      if (window.location.hash) {
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      this.activeSection = ''
      this.isMenuOpen = false
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate offset for fixed navbar (80px)
        const navbarHeight = 80
        const elementPosition = element.offsetTop - navbarHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
      this.isMenuOpen = false
    },
    downloadResume() {
      // TODO: Replace with your actual resume download link
      console.log('Download resume functionality - add your resume link here')
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 0, 0.3) 10px, transparent 12px),
    radial-gradient(circle at 80% 50%, rgba(255, 0, 128, 0.3) 8px, transparent 10px),
    linear-gradient(90deg, rgba(0, 8, 20, 0.95), rgba(0, 29, 61, 0.9));
  backdrop-filter: blur(20px);
  border-bottom: 4px solid;
  border-image: linear-gradient(90deg, #ffff00, #ff0080, #00ffff, #ff8000) 1;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 
    0 6px 0 rgba(255, 255, 0, 0.4),
    0 12px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(255, 255, 0, 0.3);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #ffff00;
  text-shadow: 
    2px 2px 0 #ff0080,
    4px 4px 0 #00ffff,
    6px 6px 8px rgba(0, 0, 0, 0.5);
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
  text-transform: uppercase;
  animation: logoGlow 2s ease-in-out infinite alternate;
}

@media (min-width: 768px) {
  .logo-text {
    max-width: none;
    letter-spacing: 0.1em;
  }
}

@keyframes logoGlow {
  0% { text-shadow: 2px 2px 0 #ff0080, 4px 4px 0 #00ffff, 6px 6px 10px rgba(0, 0, 0, 0.8); }
  100% { text-shadow: 2px 2px 0 #00ffff, 4px 4px 0 #ff8000, 6px 6px 20px rgba(255, 255, 0, 0.8); }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav-links::-webkit-scrollbar {
  display: none;
}

@media (min-width: 768px) {
  .nav-links {
    gap: 1.5rem;
    overflow-x: visible;
  }
}

@media (min-width: 1024px) {
  .nav-links {
    gap: 2rem;
  }
}

.nav-link {
  color: #ffff00;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.5rem 0.75rem;
  border-radius: 15px;
  border: 2px solid transparent;
  font-family: 'Courier New', monospace;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  min-width: fit-content;
}

@media (min-width: 768px) {
  .nav-link {
    padding: 0.625rem 1.125rem;
    letter-spacing: 0.1em;
  }
}

.nav-link:hover {
  background: 
    radial-gradient(circle at center, rgba(255, 0, 128, 0.3) 5px, transparent 6px),
    linear-gradient(45deg, rgba(255, 255, 0, 0.2), rgba(0, 255, 255, 0.2));
  border-color: #ff0080;
  color: #ff0080;
  text-shadow: 
    1px 1px 0 #00ffff,
    2px 2px 10px rgba(255, 0, 128, 0.8);
  transform: scale(1.05);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 4px;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #ffff00, #ff0080, #00ffff);
  transition: width 0.3s ease;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(255, 255, 0, 0.6);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #ff0080;
  font-weight: 700;
  background: 
    radial-gradient(circle at center, rgba(255, 255, 0, 0.3) 4px, transparent 5px),
    linear-gradient(45deg, rgba(255, 0, 128, 0.2), rgba(0, 255, 255, 0.2));
  border-color: #ffff00;
  text-shadow: 
    1px 1px 0 #ffff00,
    2px 2px 0 #00ffff,
    3px 3px 10px rgba(255, 0, 128, 0.8);
}

.nav-btn {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
}

@media (min-width: 768px) {
  .nav-btn {
    margin-left: 1rem;
    padding: 0.5rem 1.25rem;
  }
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.25rem;
  z-index: 1001;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.75rem 0;
  }
  
  .nav-content {
    position: relative;
  }
  
  .nav-links {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 0, 0.2) 10px, transparent 12px),
      radial-gradient(circle at 80% 50%, rgba(255, 0, 128, 0.2) 8px, transparent 10px),
      linear-gradient(180deg, rgba(0, 8, 20, 0.98), rgba(0, 29, 61, 0.95));
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    border-bottom: 4px solid;
    border-image: linear-gradient(90deg, #ffff00, #ff0080, #00ffff, #ff8000) 1;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    gap: 1.5rem;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
  
  .nav-links.nav-open {
    transform: translateY(0);
  }
  
  .nav-link {
    padding: 1rem;
    border: 2px solid rgba(255, 235, 59, 0.3);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    text-align: center;
    width: 100%;
  }
  
  .nav-btn {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
  
  .nav-toggle {
    display: flex;
  }
}
</style>
