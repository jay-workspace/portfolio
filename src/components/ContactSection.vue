<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Let's Work Together</h2>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-intro card">
            <h3 class="intro-title">Ready to Start Your Project?</h3>
            <p class="intro-text">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a specific project in mind or just want to discuss possibilities, 
              I'd love to hear from you!
            </p>
            
            <div class="contact-methods">
              <div class="contact-method" v-for="method in contactMethods" :key="method.type">
                <div class="method-icon">{{ method.icon }}</div>
                <div class="method-info">
                  <h4 class="method-title">{{ method.title }}</h4>
                  <p class="method-value">{{ method.value }}</p>
                  <p class="method-note">{{ method.note }}</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h4 class="social-title">Connect with me</h4>
              <div class="social-icons">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.platform"
                  :href="social.url" 
                  class="social-link"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="social-icon">{{ social.icon }}</span>
                  <span class="social-name">{{ social.platform }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <div class="contact-form card">
            <h3 class="form-title">Send me a message</h3>
            <form @submit.prevent="submitForm" class="form">
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="form.name"
                  class="form-input"
                  required
                  placeholder="Enter your full name"
                >
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  class="form-input"
                  required
                  placeholder="your.email@example.com"
                >
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <select 
                  id="subject"
                  v-model="form.subject"
                  class="form-select"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="project">New Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="budget" class="form-label">Project Budget (Optional)</label>
                <select 
                  id="budget"
                  v-model="form.budget"
                  class="form-select"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  class="form-textarea"
                  rows="5"
                  required
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit" class="btn form-submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>
            </form>
            
            <div v-if="formStatus" class="form-status" :class="formStatus.type">
              {{ formStatus.message }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="availability-section">
        <div class="availability-card card">
          <h3 class="availability-title">Current Availability</h3>
          <div class="availability-status">
            <div class="status-indicator available"></div>
            <span class="status-text">Available for new projects</span>
          </div>
          <p class="availability-note">
            I typically respond to all inquiries within 24 hours. 
            For urgent projects, feel free to reach out via phone or WhatsApp.
          </p>
          <div class="response-time">
            <div class="time-metric">
              <span class="metric-number">< 24h</span>
              <span class="metric-label">Response Time</span>
            </div>
            <div class="time-metric">
              <span class="metric-number">2-4 weeks</span>
              <span class="metric-label">Project Start</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: null,
      contactMethods: [
        {
          type: 'email',
          icon: '📧',
          title: 'Email',
          value: 'john.developer@email.com', // TODO: Replace with your actual email
          note: 'Best for detailed project discussions'
        },
        {
          type: 'phone',
          icon: '📱',
          title: 'Phone',
          value: '+1 (555) 123-4567', // TODO: Replace with your actual phone
          note: 'For urgent inquiries'
        },
        {
          type: 'location',
          icon: '📍',
          title: 'Location',
          value: 'San Francisco, CA', // TODO: Replace with your actual location
          note: 'Available for remote work worldwide'
        }
      ],
      socialLinks: [
        {
          platform: 'LinkedIn',
          icon: '💼',
          url: 'https://linkedin.com/in/yourprofile' // TODO: Replace with your actual LinkedIn
        },
        {
          platform: 'GitHub',
          icon: '👨‍💻',
          url: 'https://github.com/yourusername' // TODO: Replace with your actual GitHub
        },
        {
          platform: 'Twitter',
          icon: '🐦',
          url: 'https://twitter.com/yourusername' // TODO: Replace with your actual Twitter
        },
        {
          platform: 'Portfolio',
          icon: '🌐',
          url: 'https://yourwebsite.com' // TODO: Replace with your actual website
        }
      ]
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.formStatus = null
      
      try {
        // TODO: Replace with your actual form submission logic
        // This could be an API call to your backend or a service like Netlify Forms
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
        
        this.formStatus = {
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
        }
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          budget: '',
          message: ''
        }
      } catch (error) {
        this.formStatus = {
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
        }
      } finally {
        this.isSubmitting = false
        
        // Clear status after 5 seconds
        setTimeout(() => {
          this.formStatus = null
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;
}

.contact-intro {
  text-align: left;
}

.intro-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.intro-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
}

.method-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.method-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.method-value {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.method-note {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.social-links {
  margin-top: 2rem;
}

.social-title {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
}

.social-icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2rem;
}

.social-name {
  font-weight: 500;
}

.contact-form {
  text-align: left;
}

.form-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3182ce;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 0 0 3px rgba(49, 130, 206, 0.2),
    0 4px 0 rgba(49, 130, 206, 0.3);
  transform: translateY(-2px);
}

.form-select option {
  background: #333;
  color: white;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.1rem;
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.form-status.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.form-status.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.availability-section {
  display: flex;
  justify-content: center;
}

.availability-card {
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.availability-title {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.availability-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
}

.status-indicator.available {
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.3);
  animation: pulse 2s infinite;
}

.status-text {
  color: white;
  font-weight: 600;
}

.availability-note {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.response-time {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}

.time-metric {
  text-align: center;
}

.metric-number {
  display: block;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.metric-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .social-icons {
    grid-template-columns: 1fr;
  }
  
  .response-time {
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
  }
}
</style>
