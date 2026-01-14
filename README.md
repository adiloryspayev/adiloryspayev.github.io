# Adil Oryspayev - Professional Portfolio

[![Deploy Status](https://github.com/adiloryspayev/adiloryspayev.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/adiloryspayev/adiloryspayev.github.io/actions)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

> A high-performance, modern portfolio showcasing research in Geometric Measure Theory, software engineering projects, and technical leadership experience.

🔗 **Live Site**: [adiloryspayev.github.io](https://adiloryspayev.github.io)

---

## 🚀 Features

- ⚡ **Blazing Fast**: Built with Astro for near-instant page loads
- 🎨 **Syracuse Orange Branding**: Custom design with SU school colors
- 🧮 **LaTeX Support**: Full mathematical notation rendering via KaTeX
- 🏷️ **Smart Filtering**: Interactive tag-based content filtering
- 📱 **Fully Responsive**: Optimized for all devices
- 🌙 **Dark Mode First**: Modern dark aesthetic
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🔄 **Auto-Deploy**: CI/CD pipeline via GitHub Actions

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Astro 5.1.x |
| **UI Components** | React 18 |
| **Styling** | Tailwind CSS 3.4 |
| **Math Rendering** | KaTeX |
| **Content** | MDX (Markdown + JSX) |
| **Deployment** | GitHub Pages |
| **CI/CD** | GitHub Actions |

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/adiloryspayev/adiloryspayev.github.io.git
cd adiloryspayev.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

---

## 📁 Project Structure

```
adiloryspayev.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── headshot.jpeg           # Professional headshot
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation header
│   │   ├── Footer.astro        # Site footer
│   │   ├── FilterableTags.jsx  # Interactive filtering (React)
│   │   ├── ProjectCard.astro   # Project display component
│   │   └── ExperienceCard.astro # Experience display component
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout wrapper
│   │   └── WritingLayout.astro # Writing-specific layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── experience.astro    # Work experience
│   │   ├── research.astro      # Research projects
│   │   ├── projects.astro      # Technical projects
│   │   ├── writing.astro       # Writing portfolio hub
│   │   └── writing/
│   │       └── arts-encounter.md  # WRT 205 Project 1
│   ├── styles/
│   │   └── global.css          # Global styles + KaTeX
│   └── config.ts               # Site configuration
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

---

## ⚙️ Configuration

### Site Settings

Edit `src/config.ts` to customize site metadata and navigation:

```typescript
export const SITE_CONFIG = {
  name: 'Adil Oryspayev',
  title: 'Adil Oryspayev | CS & Math @ Syracuse',
  description: 'Your description here',
  email: 'aoryspay@syr.edu',
  phone: '475-977-1713',
  github: 'https://github.com/adiloryspayev',
  linkedin: 'https://linkedin.com/in/adiloryspayev',
  
  // Toggle Writing section visibility
  showWritingSection: true,  // Set to false to hide Writing nav link
  
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/projects' },
  ]
};
```

### Colors

Syracuse Orange branding is defined in `tailwind.config.mjs`:

```javascript
colors: {
  'su-orange': '#F76900',
  'su-orange-dark': '#D55D00',
  'su-orange-light': '#FF8529',
}
```

---

## 🎓 Removing the Writing Section

**For post-WRT 205**: Simply set `showWritingSection: false` in `src/config.ts`:

```typescript
export const SITE_CONFIG = {
  // ... other config
  showWritingSection: false,  // ✅ Writing link removed from nav
};
```

This single change:
- Removes "Writing" from navigation menu
- Keeps content files intact (in case you need them later)
- Doesn't break any internal links
- Can be re-enabled anytime

---

## 📝 Adding Content

### Add a New Project

Create a new entry in `src/pages/projects.astro`:

```javascript
const projects = [
  // ... existing projects
  {
    id: 'your-project-slug',
    title: 'Your Project Title',
    date: 'Jan 2026 – Present',
    description: 'Brief description of your project...',
    tags: ['Python', 'Docker', 'React'],
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
    ],
    links: {
      github: 'https://github.com/yourusername/project',
      live: 'https://your-demo-url.com'
    }
  }
];
```

### Add a New Research Paper

Create a new entry in `src/pages/research.astro`:

```javascript
const research = [
  // ... existing research
  {
    id: 'paper-slug',
    title: 'Your Research Title',
    organization: 'Institution Name',
    date: 'Jun 2024 – Present',
    status: 'Under Review',
    venue: 'Journal Name',
    description: 'Brief description...',
    tags: ['Mathematics', 'Python'],
    abstract: `Full abstract text...`,
    mathContent: `
      LaTeX math notation:
      
        $$\\sum_{i=1}^{n} x_i = 0$$
      
    `
  }
];
```

### Add a New Experience

Edit `src/pages/experience.astro` and add to the experiences array.

---

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**One-time setup:**

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch

The workflow in `.github/workflows/deploy.yml` will automatically build and deploy.

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to GitHub Pages manually
npm run deploy  # (if you add this script to package.json)
```

---

## 🎨 Customization

### Change Color Scheme

Edit `tailwind.config.mjs` to use different accent colors:

```javascript
extend: {
  colors: {
    'primary': '#YOUR_COLOR',
    'primary-dark': '#YOUR_DARKER_COLOR',
    'primary-light': '#YOUR_LIGHTER_COLOR',
  }
}
```

Then replace `su-orange` references in components with `primary`.

### Add Google Analytics

Add to `src/layouts/BaseLayout.astro` before `</head>`:

```html



  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');

```

---

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. Open an issue describing the problem
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

---

## 📄 License

© 2026 Adil Oryspayev. All rights reserved.

Code is available for reference, but please don't copy the entire portfolio. Feel free to use individual components or patterns with attribution.

---

## 🙏 Acknowledgments

- **Astro** - Framework
- **Tailwind CSS** - Styling
- **KaTeX** - Math rendering
- **Syracuse University** - Branding colors

---

## 📞 Contact

**Adil Oryspayev**
- 📧 Email: [aoryspay@syr.edu](mailto:aoryspay@syr.edu)
- 📞 Phone: 475-977-1713
- 💼 LinkedIn: [linkedin.com/in/adiloryspayev](https://linkedin.com/in/adiloryspayev)
- 💻 GitHub: [github.com/adiloryspayev](https://github.com/adiloryspayev)

---

**Built with ❤️ and ☕ by Adil Oryspayev**