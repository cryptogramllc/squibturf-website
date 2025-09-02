# SquibTurf Website

A modern, responsive website for SquibTurf - a location-based social networking app that connects users with their local community.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach
- ⚡ Static site generation with Next.js
- 🚀 Optimized for AWS S3 deployment
- 🔍 SEO optimized with proper meta tags
- ♿ Accessible design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Build the static site:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

## Deployment to AWS S3

### Prerequisites

- AWS CLI configured with appropriate permissions
- S3 bucket created for hosting

### Deployment Steps

1. Build the static site:
```bash
npm run export
```

2. Deploy to S3 (replace `your-bucket-name` with your actual bucket name):
```bash
npm run deploy
```

Or manually:
```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

3. Configure your S3 bucket for static website hosting:
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `404.html`

### Customizing Deployment

Update the `deploy` script in `package.json` with your actual S3 bucket name:

```json
"deploy": "npm run export && aws s3 sync out/ s3://your-bucket-name --delete"
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features section
│   ├── HowItWorks.tsx       # How it works section
│   ├── Download.tsx         # Download section
│   └── Footer.tsx           # Footer
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- Primary colors: Blue theme
- Secondary colors: Purple theme

### Content

Update the content in each component file to match your specific needs:

- `components/Hero.tsx` - Main headline and description
- `components/Features.tsx` - App features
- `components/HowItWorks.tsx` - Step-by-step process
- `components/Download.tsx` - Download links and CTA

### SEO

Update meta tags in `app/layout.tsx` for better SEO:

- Title
- Description
- Keywords
- Open Graph tags

## Technologies Used

- **Next.js 14** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **AWS S3** - Static website hosting

## License

This project is proprietary to SquibTurf.
