# Intertrade Company Website

A professional, modern website for Intertrade Company - Thailand's premier import/export business specializing in bulk trade between China and Thailand.

## 🌟 Features

- **Professional Design**: Clean, corporate aesthetic with blue and gold color scheme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with React and Tailwind CSS
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Contact Forms**: Professional inquiry forms for bulk trade requests
- **Product Showcase**: Comprehensive display of import categories
- **Client Testimonials**: Social proof from satisfied business partners
- **Company Statistics**: Key metrics and achievements display

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and company branding
│   ├── Hero.tsx           # Main landing section
│   ├── Stats.tsx          # Company statistics display
│   ├── Services.tsx       # Import/export services overview
│   ├── Products.tsx       # Product categories showcase
│   ├── About.tsx          # Company information and mission
│   ├── Testimonials.tsx   # Client reviews and feedback
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Site footer with links
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
├── index.css             # Global styles and Tailwind imports
└── vite-env.d.ts         # TypeScript environment definitions
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intertrade-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary Blue**: #1e3a8a (Navy)
- **Secondary Blue**: #3b82f6 (Professional Blue)
- **Accent Gold**: #f59e0b (Premium Gold)
- **Success Green**: #10b981
- **Warning Orange**: #f97316
- **Error Red**: #ef4444
- **Neutral Grays**: #f8fafc to #1f2937

### Typography
- **Headings**: Bold, hierarchical sizing (text-4xl to text-6xl)
- **Body Text**: Regular weight, optimized line height (1.6)
- **Line Spacing**: 150% for body text, 120% for headings

### Spacing
- **System**: 8px base unit (Tailwind's default spacing scale)
- **Sections**: 80px vertical padding (py-20)
- **Cards**: 32px internal padding (p-8)

## 🏢 Business Sections

### Header
- Company branding and logo
- Contact information display
- Multi-language support indicator
- Responsive navigation menu

### Hero Section
- Compelling value proposition
- Call-to-action buttons
- Key service highlights
- Professional imagery

### Statistics
- Company achievements
- Client metrics
- Experience indicators
- Trust-building elements

### Services
- Import/export capabilities
- Quality assurance processes
- Logistics coordination
- Customer support offerings

### Products
- Product category showcase
- Visual product galleries
- Category descriptions
- Bulk pricing indicators

### About
- Company history and mission
- Team expertise
- Certifications and awards
- Trust indicators

### Testimonials
- Client success stories
- Partner feedback
- Industry recognition
- Social proof elements

### Contact
- Professional inquiry form
- Multiple contact methods
- Office location details
- Business hours information

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📋 Component Props & Customization

### Modular Architecture
Each component is self-contained and can be easily customized:

- **Header**: Modify navigation links and contact information
- **Hero**: Update messaging and call-to-action buttons
- **Services**: Add or modify service offerings
- **Products**: Update product categories and images
- **Contact**: Customize form fields and contact details

### Image Assets
All images are sourced from Pexels with proper licensing:
- Professional business photography
- Logistics and shipping imagery
- Product category representations
- Team and office photos

## 🌐 SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and titles
- Alt text for all images
- Clean URL structure

## 📞 Contact Information

The website displays Intertrade Company's contact details:
- **Address**: 123 Silom Road, Bang Rak District, Bangkok 10500, Thailand
- **Phone**: +66 2 123 4567
- **Email**: info@intertrade.co.th
- **Business Hours**: Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 1:00 PM

## 🚀 Deployment

The website is ready for deployment to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

Build the project with `npm run build` and deploy the `dist` folder.

## 📄 License

This project is proprietary to Intertrade Company. All rights reserved.

## 🤝 Contributing

For internal development team members:
1. Follow the established component structure
2. Maintain consistent styling with Tailwind classes
3. Ensure responsive design across all breakpoints
4. Test thoroughly before committing changes

---

**Built with ❤️ for Intertrade Company - Connecting China to Thailand through reliable trade partnerships.**