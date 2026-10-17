# Rakshith M R — Professional Portfolio Website

A modern, high-performance portfolio website built with **React**, **Vite**, **Vanilla CSS3**, and **Lucide Icons** designed to showcase academic qualifications, technical skills, projects, and certifications to recruiters and engineering teams.

---

## 🌟 Highlights & Features

- **Aesthetic Design**: Near-black background (`#090d16`) with electric-blue glow accents, sleek glassmorphism cards, and smooth micro-interactions.
- **Accurate Information**:
  - **Full Name**: Rakshith M R
  - **Headline**: MCA Student
  - **Education**: MCA (BMSIT, Bengaluru), BCA (Nagarjuna Degree College, Bengaluru), 2nd PU CEBA, SSLC.
  - **Technical Skills**: Programming (C, Basic Java), Web Development (HTML, CSS), Tools (GitHub, VS Code).
  - **Projects**:
    1. **CloudVault — Digital Document Management System** (Live demo, API endpoint, and GitHub repository links).
    2. **EcoWalk – Personalized Healthy Walking Route Recommendation System** (Active in-progress route recommendation system).
    3. **Ticket Management System** (Completed structured issue tracking application).
  - **Certifications**: Forward Deployed Engineer (CertoMeter).
- **Real Profile Photograph**: Integrated at `/images/profile.jpg` with centering, rounded borders, ambient glow, and initials fallback.
- **Interactive Features**:
  - Interactive "Copy Email" with clipboard API & confirmation toast.
  - Clickable phone (`tel:`) and email (`mailto:`) links.
  - Smooth-scrolling fixed navigation with scroll-spy active state tracking.
  - Fully accessible mobile hamburger navigation drawer.
  - Responsive design across mobile, tablet, laptop, and desktop viewports.
  - `prefers-reduced-motion` compliance.

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg             # Custom RM monogram gradient favicon
│   └── images/
│       └── profile.jpg         # Real profile photograph of Rakshith M R
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with RM logo, navigation links & mobile drawer
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero banner, verified introduction & profile photo
│   │   ├── Hero.css
│   │   ├── About.jsx           # Technical mindset & core development pillars
│   │   ├── About.css
│   │   ├── Education.jsx       # Vertical timeline with qualifications & CGPA/scores
│   │   ├── Education.css
│   │   ├── Skills.jsx          # Confirmed programming, web & tool skills
│   │   ├── Skills.css
│   │   ├── Projects.jsx        # Project gallery (CloudVault, EcoWalk, Ticket System)
│   │   ├── Projects.css
│   │   ├── Certifications.jsx  # Forward Deployed Engineer credential card
│   │   ├── Certifications.css
│   │   ├── Contact.jsx         # Direct contact hub with Copy Email & social profiles
│   │   ├── Contact.css
│   │   ├── Footer.jsx          # Minimalist footer with dynamic year & back-to-top
│   │   ├── Footer.css
│   │   └── BrandIcons.jsx      # Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js    # Centralized data store for personal information & content
│   ├── App.jsx                 # App root assembling sections with ambient lighting
│   ├── main.jsx                # React root entry point
│   └── index.css               # Design system tokens, utilities, and global styles
├── index.html                  # SEO tags, Open Graph metadata & Google Fonts
├── vite.config.js              # Vite configuration with relative base './'
└── package.json
```

---

## 🚀 Running Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 📷 How to Update or Replace Profile Photograph

The application is configured to load your profile picture from:
```
public/images/profile.jpg
```
- To update your photo, simply replace the file at `public/images/profile.jpg` with any image (JPG format recommended).
- The CSS automatically applies `object-fit: cover` and centers your face within the glowing frame.
- If the image file is ever missing or fails to load, a fallback monogram avatar displaying **RM** will automatically show so that no broken image icon is ever rendered.

---

## 🌐 Deployment Instructions

### Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build` (or `vite build`).
6. Output Directory: `dist`.
7. Click **Deploy**.

### Deploying to GitHub Pages
1. In `vite.config.js`, the base path is already set to `base: './'` for maximum compatibility.
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** (using the default Vite / Static HTML action) or deploy the `dist/` branch.
