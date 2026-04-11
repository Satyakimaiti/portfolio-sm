🚀 Satyaki Maiti | Software Engineer Portfolio
A high-performance, responsive portfolio website built with React 19 and Vite. This project showcases the intersection of robust software engineering and machine intelligence, featuring smooth animations, glassmorphism UI, and a fully functional contact system.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS

Icons & UI: Lucide-React, Framer Motion (Animations)

Backend Services: EmailJS (SMTP/OAuth Integration)

Deployment: Vercel

Tools: Vite, Git, Google Cloud Console (Gmail API)

✨ Key Features
Dynamic Hero Section: Featuring a customized "Slow Drift" particle effect and marquee skills slider.

Glassmorphism UI: Modern, sleek design using high-contrast dark mode and frosted-glass components.

Integrated Contact Form: Real-time email notifications powered by EmailJS with custom HTML templates.

Smooth Navigation: Custom JavaScript-based smooth-scrolling architecture with offset support for fixed headers.

Responsive Design: Fully optimized for mobile, tablet, and desktop viewports.

🚀 Getting Started
To run this project locally, follow these steps:

1. Clone the repository:-
Bash
git clone https://github.com/Satyakimaiti/your-repo-name.git
cd your-repo-name
2. Install dependencies:-
Bash
npm install
3. Set up Environment Variables:-
Create a .env file in the root directory and add your EmailJS credentials:

Code snippet
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
4. Run the development server
Bash
npm run dev
The site will be live at http://localhost:5173.

📂 Project Structure

├── public/               # Static assets (CV, Hero Images)
├── src/
│   ├── components/       # Reusable UI components (Button, Navbar, etc.)
│   ├── sections/         # Main page sections (Hero, About, Contact)
│   ├── App.jsx           # Main application entry
│   └── index.css         # Global styles & Tailwind directives
└── .env.example          # Template for environment variables

Project Link: https://portfolio-sm-iota.vercel.app/
