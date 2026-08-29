Portfolio Website — Farzeen Shahzad

A personal portfolio website built with React and Vite, deployed on GitHub Pages. Built from scratch without any UI libraries or templates as part of learning the MERN stack frontend.

Live Site: https://farzeen-code.github.io/my-portfolio

---

About

This portfolio was built progressively while learning React for the first time. Every component was written manually using React functional components and inline styles, with no external component libraries or CSS frameworks used.

The goal was to understand how React actually works — components, props, state, and array rendering — rather than using pre-built solutions. Each section introduces a new concept, from basic JSX and props in the Navbar and Hero, to map() and Object.entries() in Projects and Skills, to useState for the clipboard copy feature in Contact.

---

Sections

Navbar
Sticky navigation bar with smooth scroll links to each section using href anchors.

Hero
Full screen landing section with name, tagline, description and call to action buttons linking to Projects and Contact sections.

Projects
Dynamic card grid rendered from a data array using the map() function. Each card displays the project title, description, tech stack tags and a GitHub link. Adding a new project requires only adding one object to the array.

Skills
Categorized skill tags rendered using Object.entries() and nested map() calls. Categories are stored as an object with arrays as values, converted to a mappable array at render time.

Contact
Centered section with a mailto link, a copy-to-clipboard email button using useState, and social links to GitHub and LinkedIn.

---

Tech Stack

React 18
Vite
JavaScript ES6+
CSS via React inline styles
GitHub Pages for deployment

---

Concepts Practiced

React functional components
Props and component composition
Array rendering with map()
Object iteration with Object.entries()
useState hook for clipboard interaction
CSS Flexbox for one dimensional layouts
CSS Grid for two dimensional card layouts
Sticky positioning for navbar
semantic HTML structure
Production build and static site deployment with gh-pages

---

Project Structure

src
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css

---

How To Run Locally

1. Clone the repository:

   git clone https://github.com/farzeen-code/my-portfolio.git

2. Navigate into the project:

   cd my-portfolio

3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open in browser:

   http://localhost:5173

---

How To Deploy

npm run deploy

Builds the project into static files and pushes the dist folder
to the gh-pages branch. GitHub Pages serves the live site from
that branch automatically.

To update the live site after making changes:

git add .
git commit -m "describe your change"
git push origin main
npm run deploy

---

What I Learned

This was my first React project. Key things understood through building rather than following tutorials:

The difference between a container element that needs flex or grid
and a content element that only needs color and font styles.

Why map() is used for rendering lists and how data flows from
parent to child through props.

How Object.entries() converts an object into a mappable array
for rendering categorized data.

Why inline styles in React use camelCase JavaScript objects
instead of CSS strings.

How useState creates reactive UI — the copy email button changes
text to Copied for two seconds then resets automatically.

How Vite builds a React app into static files and how GitHub Pages
serves those files as a live website.

The difference between npm run dev for local development and
npm run deploy for production.

---
