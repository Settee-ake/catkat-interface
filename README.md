# CatKat Interface

A modern, responsive marketing site built with React, TypeScript, Vite, and Tailwind CSS.

## 🌟 Features

- **Responsive layout**: Looks great on mobile, tablet, and desktop
- **TypeScript-first**: Safer, more maintainable components
- **Fast dev/build**: Powered by Vite 7
- **Utility-first styling**: Tailwind CSS
- **Iconography**: Lucide React

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Code quality**: ESLint 9

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Products.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm 9+

### Setup
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd catkat-interface
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```

## 🔧 Scripts

```bash
# Start development server
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview

# Lint the codebase
npm run lint
```

## 🎨 Styling
- Tailwind directives are imported in `src/index.css`.
- Global and utility styles are managed via Tailwind classes in components.

## 🧩 Components
The site is composed of modular sections found in `src/components/`:
- `Header`, `Hero`, `Stats`, `Services`, `Products`, `About`, `Testimonials`, `Contact`, `Footer`

## 🚀 Deployment
This is a static site and can be deployed to:
- Vercel, Netlify, GitHub Pages, AWS S3 + CloudFront, etc.

Build the project and deploy the `dist/` directory:
```bash
npm run build
```

## 📄 License
This project is private to the CatKat team. All rights reserved.

## 🤝 Contributing
- Keep components small and typed
- Match existing Tailwind utility patterns
- Ensure responsive behavior across breakpoints
- Run linting before committing

---

Built with ❤️ using React, Vite, and Tailwind CSS.