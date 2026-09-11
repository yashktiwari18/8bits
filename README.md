# 🌐 Bitminds - Digital Solutions

## 🚀 About Bitminds
Bitminds is a dynamic and innovative digital solutions company specializing in scalable web and mobile app development. We craft exceptional digital experiences that drive business growth and transform ideas into reality.

## ✨ Features
- **Modern React Application** with TypeScript
- **Responsive Design** optimized for all devices
- **Custom Animations** and smooth interactions
- **Web3Forms Integration** for contact management
- **Technology Showcase** with interactive elements
- **Professional Portfolio** display

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Custom CSS animations + Framer Motion
- **Icons**: Lucide React
- **Forms**: Web3Forms integration
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080
```

### Build for Production
```bash
# Build for GitHub Pages
npm run build:github-pages

# Preview production build
npm run preview
```

## 📦 Deployment

### GitHub Pages Setup
1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - automatic deployment via GitHub Actions
4. **Custom Domain** (optional): Update `public/CNAME` file

### Custom Domain with Hostinger
1. **Update CNAME file** with your domain:
   ```
   yourdomain.com
   ```
2. **Configure DNS** in Hostinger:
   - Add CNAME record: `www` → `teamnexus584.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

## 📁 Project Structure
```
├── client/                 # React application
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── styles/           # Custom CSS and animations
│   └── global.css        # Global styles
├── public/               # Static assets
│   ├── assests/         # Images and media
│   ├── CNAME            # Custom domain configuration
│   └── ...
├── .github/workflows/    # GitHub Actions
└── dist/spa/            # Production build output
```

## 🎨 Key Components
- **Hero Section**: Interactive layout with laptop GIF
- **Services Grid**: Animated service cards
- **Technology Showcase**: Video integration with tech stack
- **Contact Form**: Web3Forms integration
- **Responsive Navigation**: Smooth scrolling navigation

## 🔧 Configuration

### Environment Variables
Create `.env` file for local development:
```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

### Custom Domain
Update `public/CNAME` with your domain:
```
bitminds.yourdomain.com
```

## 📱 Responsive Design
- **Mobile First** approach
- **Tablet** optimized layouts
- **Desktop** enhanced experience
- **Touch-friendly** interactions

## 🎯 Performance
- **Optimized Images** and assets
- **Code Splitting** with Vite
- **Lazy Loading** for better performance
- **SEO Optimized** structure

## 📞 Contact & Support
- **Website**: [Your Domain]
- **Email**: [Your Email]
- **GitHub**: https://github.com/teamnexus584/Bitminds

## 📄 License
This project is proprietary software developed by Bitminds.

---

**Built with ❤️ by the Bitminds Team**

updated
