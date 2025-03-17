# Data Engineer Portfolio Website

A modern, responsive portfolio website with a neumorphic design, specifically tailored for Data Engineers and AI/ML professionals. This portfolio features a unique splash screen animation depicting a data pipeline, smooth transitions, and an elegant user interface.

## Features

- **Neumorphic Design**: Light, elegant UI with soft shadows and clean aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Subtle animations and interactive components enhance user experience
- **Dark/Light Mode**: Toggle between dark and light themes
- **Splash Screen Animation**: Custom data pipeline animation during initial loading
- **Section-Based Layout**: Organized sections for experience, projects, skills, education, certifications, and contact information
- **Resume/CV Viewer**: Built-in PDF viewer for resume and CV
- **Contact Form**: Functional contact form with validation

## Getting Started

### Prerequisites

- A web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)
- GitHub account (for deployment via GitHub Pages)

### Customization

1. **Personal Information**: Update your personal details in the `index.html` file:
   - Name, title, and description in the Home section
   - About Me content
   - Experience details
   - Project information
   - Skills and proficiency levels
   - Education history
   - Certifications

2. **Images**: Replace the placeholder images with your own:
   - Add your profile picture to `assets/images/profile.jpg`
   - Add project screenshots to `assets/images/project1.jpg`, `assets/images/project2.jpg`, etc.
   - Add certification logos to `assets/images/aws-cert.png`, etc.

3. **Documents**: Add your resume and CV:
   - Add your resume to `assets/docs/resume.pdf`
   - Add your CV to `assets/docs/cv.pdf`

4. **Social Links**: Update the social media links with your profiles:
   - LinkedIn, GitHub, Twitter, etc.

5. **Contact Information**: Update your contact details:
   - Email, phone, location

### Deployment with GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Click Save, and your site will be published at `https://yourusername.github.io/repository-name/`

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   ├── images/             # Image files
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   ├── aws-cert.png
│   │   ├── databricks-cert.png
│   │   └── gcp-cert.png
│   └── docs/               # Document files
│       ├── resume.pdf
│       └── cv.pdf
└── README.md               # This file
```

## Customization Tips

- **Colors**: Modify the color scheme by changing the CSS variables in the `:root` selector in `styles.css`
- **Fonts**: Change the font by updating the Google Fonts link in the `<head>` of `index.html` and the font-family in `styles.css`
- **Animations**: Adjust animation timing and effects in the CSS animations section and in `main.js`
- **Content Layout**: Modify the grid layouts and section structures in `styles.css` to change the overall layout

## Browser Compatibility

This portfolio website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from neumorphic design trends 