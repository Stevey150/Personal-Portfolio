# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing your skills, education, experience, and projects.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (works on all devices)
- 🚀 Smooth animations and transitions
- 🌐 Multi-language support showcase (English, Spanish, French)
- 📊 Interactive skill bars and counters
- 🎯 Project filtering and categorization
- ♿ Accessibility features included
- 🎭 Professional color scheme with CSS custom properties

## Structure

```
Personal Portfolio/
├── index.html          # Main homepage
├── projects.html       # Dedicated projects page
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Getting Started

1. **Replace placeholder content** with your personal information:
   - Update "Your Name" throughout the files
   - Add your actual photo as `your-photo.jpg`
   - Update education details in the timeline
   - Modify experience cards with your work history
   - Add your real projects with images and descriptions

2. **Add your images**:
   - `your-photo.jpg` - Your profile picture (400x400px recommended)
   - `project1.jpg` to `project6.jpg` - Project screenshots
   - All images should be optimized for web

3. **Customize content**:
   - Update contact information in the footer
   - Add your social media links
   - Modify the about section with your story
   - Update project descriptions and technologies

4. **Colors and styling**:
   - Modify CSS custom properties in `styles.css` to change colors
   - Adjust fonts, spacing, and layout as needed

## Sections Included

### Main Page (index.html)
- **Hero Section**: Introduction with your photo and call-to-action
- **About**: Personal story and key skills
- **Education**: Timeline of your educational background
- **Experience**: Professional work history
- **Languages**: Your language proficiency (Spanish, English, French)

### Projects Page (projects.html)
- **Project Showcase**: Filterable grid of your projects
- **Categories**: Web Development, Mobile Apps, AI/ML, Tools & Utilities
- **Project Stats**: Animated counters showing your achievements

## Key Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized for all screen sizes

### Interactive Elements
- Smooth scrolling navigation
- Animated skill bars
- Project filtering
- Hover effects and transitions
- Typing animation for hero title

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Skip to content link

## Customization Guide

### Changing Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #3b82f6;  /* Secondary brand color */
    --accent-color: #f59e0b;     /* Accent/highlight color */
    /* ... other colors */
}
```

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update navigation menu
4. Add any JavaScript functionality needed

### Adding New Projects
1. Add project card HTML in `projects.html`
2. Include project image
3. Add appropriate `data-category` for filtering
4. Update project stats if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized CSS and JavaScript
- Lazy loading for images
- Debounced scroll events
- Efficient animations using CSS transforms
- Minimal external dependencies

## Dependencies

- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome 6.0.0
- **External**: Only Google Fonts and Font Awesome CDN

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

Simply upload all files to your web server or deploy through your preferred platform.

## Tips for Personalization

1. **Photography**: Use high-quality, professional photos
2. **Content**: Keep descriptions concise but informative
3. **Projects**: Show your best work with diverse technologies
4. **Contact**: Make it easy for people to reach you
5. **Updates**: Keep your portfolio current with recent projects

## License

This template is free to use for personal portfolios. Feel free to modify and customize as needed.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!
