# Adil Oryspayev — Personal Portfolio 🚀

A premium, highly responsive personal portfolio website designed to showcase my background in software engineering, quantitative finance, and theoretical mathematics. 

**[View Live Site](https://adiloryspayev.github.io)** ## ⚡ Overview
This portfolio was built from scratch with a focus on a high-tier tech aesthetic, smooth user experience, and lightweight performance. It highlights my academic research, technical projects, and professional experience, including my roles at StoneX Group and the Syracuse University Open Source Program Office.

## 🛠 Tech Stack
Built entirely without heavy frontend frameworks to ensure rapid load times and zero build-step deployment.
* **HTML5** (Semantic structuring)
* **CSS3** (CSS Variables, Flexbox/Grid, Custom Animations, Media Queries)
* **Vanilla JavaScript** (Intersection Observer for scroll reveals, Custom Cursor logic, Mobile Nav)

## ✨ Key Features
* **Custom Cursor Integration:** A dynamic, screen-blending cursor for desktop users (automatically disabled on mobile/touch devices for accessibility).
* **Scroll-Triggered Animations:** Smooth, staggered fade-up reveals powered by the `IntersectionObserver` API.
* **Responsive Design:** A fully fluid layout that adapts flawlessly from ultra-wide monitors to mobile screens, complete with a collapsible hamburger menu.
* **Glassmorphism Navigation:** A sticky, blurred header for seamless site traversal.
* **Accessible Fallbacks:** `<noscript>` fallbacks ensure all content remains perfectly visible if JavaScript fails or is disabled.

## 🚀 Local Deployment
Since this project uses vanilla web technologies, no installation or build processes are required.
1. Clone the repository: `git clone https://github.com/adiloryspayev/adiloryspayev.github.io.git`
2. Open `index.html` directly in your web browser.
3. To test the custom font rendering and avoid local CORS issues with external assets, you can run a simple local server:
   ```bash
   python -m http.server 8000
