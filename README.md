# Personal Portfolio App

A modern and responsive portfolio website built with React, TypeScript, Vite, and shadcn/ui components.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, Vite, and pnpm for optimal performance and developer experience
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Component Library**: Utilizes shadcn/ui components, built on top of Tailwind CSS
- **Page Routing**: Multiple pages with React Router DOM
- **Clean Code**: ESLint and Prettier configured for consistent code style
- **Dark Mode Ready**: Pre-configured theming through shadcn's approach

## 📋 Pages

- **Home**: Introduction with hero section, featured projects, skills, and a contact form
- **About**: Detailed information about your experience, education, and work history
- **Projects**: Comprehensive list of your projects with filtering capabilities
- **Contact**: Ways to get in touch with you, including a contact form

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-app.git
   cd portfolio-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## 📚 Project Structure

```
portfolio-app/
├── components/            # UI components
│   ├── ui/                # shadcn components
│   └── ...                # custom components
├── lib/                   # Utility functions
├── public/                # Static assets
├── src/                   # Main source code
│   ├── pages/             # Page components
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🧰 Customization

### Personal Information

Update your personal information in the following files:

- `src/components/Hero.tsx`: Update your name and short bio
- `src/components/Footer.tsx`: Update copyright information
- `src/pages/AboutPage.tsx`: Update about information, education, and work experience
- `src/pages/ContactPage.tsx`: Update contact information

### Projects

Add or update your projects in `src/pages/ProjectsPage.tsx`.

### Theme and Styling

The theme is managed through Tailwind CSS with shadcn/ui. You can customize the colors in the `tailwind.config.js` file.

## 🚀 Deployment

1. Build the production version:

   ```bash
   pnpm build
   ```

2. The build files will be in the `dist` directory, which you can deploy to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 📦 Dependencies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router DOM](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)
- [Class Variance Authority](https://cva.style/docs)
