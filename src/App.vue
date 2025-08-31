<template>
  <div id="app">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Experience Section -->
    <ExperienceSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSectionUpdated.vue'
import ExperienceSection from './components/ExperienceSectionNew.vue'
import ProjectsSection from './components/ProjectsSectionClean.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
