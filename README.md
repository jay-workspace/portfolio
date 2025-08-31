# Portfolio - Senior Full Stack Developer

A modern, responsive portfolio website built with Vue.js 3 and inspired by the beautiful UI components from [uiverse.io](https://uiverse.io/).

## 🚀 Features

- **Modern Design**: Inspired by uiverse.io's modern UI components
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth animations and hover effects
- **Glass Morphism**: Modern glass-like effects with backdrop blur
- **Performance Optimized**: Built with Vite for lightning-fast development and build times
- **Vue 3 Composition**: Latest Vue.js 3 with modern JavaScript
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Me**: Personal story and career highlights
3. **Skills**: Interactive skill bars and technology showcase
4. **Experience**: Professional timeline with achievements
5. **Projects**: Portfolio showcase with filtering options
6. **Contact**: Contact form and social links
7. **Footer**: Additional links and back-to-top functionality

## 🛠️ Technologies Used

- **Vue.js 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend tooling
- **Modern CSS**: CSS Grid, Flexbox, Custom Properties
- **Glass Morphism**: Backdrop blur effects
- **Gradient Backgrounds**: Beautiful color transitions
- **Inter Font**: Modern typography from Google Fonts

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Vue components
│   │   ├── NavBar.vue      # Navigation component
│   │   ├── HeroSection.vue # Hero section
│   │   ├── AboutSection.vue# About section
│   │   ├── SkillsSection.vue# Skills showcase
│   │   ├── ExperienceSection.vue# Work experience
│   │   ├── ProjectsSection.vue# Projects portfolio
│   │   ├── ContactSection.vue# Contact form
│   │   └── FooterSection.vue# Footer
│   ├── App.vue             # Main application component
│   ├── main.js             # Application entry point
│   └── style.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎯 Customization Guide

### Personal Information
All personal data is marked with `TODO` comments for easy replacement:

1. **Personal Details**: Search for `TODO: Replace with your actual` in all Vue files
2. **Contact Information**: Update email, phone, and social media links
3. **Professional Data**: Update experience, skills, and project information
4. **Images**: Replace placeholder icons with your actual photos and project images

### Key Files to Update:

- `src/components/NavBar.vue`: Your name and navigation
- `src/components/HeroSection.vue`: Personal introduction and stats
- `src/components/AboutSection.vue`: Your story and background
- `src/components/SkillsSection.vue`: Technical skills and proficiency
- `src/components/ExperienceSection.vue`: Work history and achievements
- `src/components/ProjectsSection.vue`: Portfolio projects
- `src/components/ContactSection.vue`: Contact information and form
- `src/components/FooterSection.vue`: Footer details and links

### Styling Customization:

1. **Colors**: Modify the gradient colors in `src/style.css`
2. **Fonts**: Change the Google Fonts import in `index.html`
3. **Animations**: Adjust animation timing and effects in component styles
4. **Layout**: Modify grid and flexbox layouts in individual components

## 🎨 Design Inspiration

This portfolio is inspired by the modern UI components from [uiverse.io](https://uiverse.io/), featuring:

- **Glass Morphism Effects**: Translucent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Clean and readable fonts
- **Interactive Elements**: Buttons, cards, and form elements

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Performance Features

- **Vite Build Tool**: Fast development and optimized builds
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Automatic image and CSS optimization
- **Modern JavaScript**: ES6+ features for better performance
- **Efficient CSS**: Minimal and optimized stylesheets

## 🚀 Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- **Email**: [Add your email]
- **LinkedIn**: [Add your LinkedIn]
- **GitHub**: [Add your GitHub]

---

**Happy coding!** 🎉
