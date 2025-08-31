<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="nav-logo" @click="scrollToTop">
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
        name: 'John Developer' // TODO: Replace with your actual name
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 3px solid rgba(49, 130, 206, 0.5);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 0 rgba(49, 130, 206, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.2);
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
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 
    2px 2px 0 #1e40af,
    4px 4px 8px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  border-radius: 6px;
  border: 2px solid transparent;
}

.nav-link:hover {
  background: rgba(49, 130, 206, 0.2);
  border-color: rgba(49, 130, 206, 0.5);
  text-shadow: 1px 1px 0 #1e40af;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #3182ce, #2b77cb);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #3182ce;
  font-weight: 600;
}

.nav-btn {
  margin-left: 1rem;
  padding: 8px 20px;
  font-size: 0.9rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
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
  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    transform: translateY(-100vh);
    transition: transform 0.3s ease;
  }
  
  .nav-links.nav-open {
    transform: translateY(0);
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-btn {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>
