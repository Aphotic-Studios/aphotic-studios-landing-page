# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **bun** as the package manager and runtime. Key commands:

- `bun install` - Install dependencies
- `bun dev` - Start development server (Vite)
- `bun run build` - Build for production (creates `dist/` folder)
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build locally
- `bun run serve` - Serve production build using custom Bun server on port 3000

## Architecture Overview

This is a React SPA (Single Page Application) landing page for Aphotic Studios built with:

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Bun** - Package manager and runtime
- **ESLint** - Code linting

### Project Structure

- `src/App.jsx` - Main application component
- `src/components/` - Reusable React components (e.g., Header)
- `public/` - Static assets
- `server.js` - Custom Bun server for serving production build
- `dist/` - Production build output (created by `bun run build`)

### Deployment Strategy

The project includes a custom Bun server (`server.js`) that serves the built SPA from the `dist/` directory. This server:
- Serves `index.html` for the root route
- Serves static assets (JS, CSS) from the `dist/` folder  
- Returns 404 for non-existent files
- Runs on port 3000

The server is designed for AWS deployment where Bun would be installed on the server instance.

## Response Protocol

After every response, provide a validation check with:
- **Confidence Score**: 1-10 bananas (10 = highest confidence)
- **Reasoning**: Why you gave that score (only provide reasoning for scores 9/10 and lower)

## Development Workflow

- **Planning Phase**: When user says "let's plan this" or similar variations, DO NOT modify any files. Instead, discuss and devise a plan for building the feature.
- **Building Phase**: When user says "let's build this" or similar variations, you are authorized to make file modifications based on the previously discussed plan.
- **Acknowledgment**: Always respond with "YESSIR" after receiving any request to confirm understanding.

## Project Plans

- [Ocean Theme Landing Page Plan](./memory-bank/ocean-theme-plan.md) - Detailed plan for building the dramatic ocean-themed landing page with zone transitions
- [SEO Optimization Plan](./memory-bank/seo-optimization-plan.md) - Comprehensive SEO strategy including meta tags, favicon implementation, and technical SEO
- [Glassmorphism Modernization Plan](./memory-bank/glassmorphism-modernization-plan.md) - Modern design transformation using glassmorphism and floating elements to create a 2024 premium tech aesthetic

## Recent Implementation Status (Updated 2025-06-29)

### ✅ COMPLETED FEATURES

#### 1. Ocean Theme Foundation (COMPLETE)
- **Ocean Zone System**: 4 distinct zones (Surface → Euphotic → Disphotic → Aphotic) with smooth gradient transitions
- **21-color gradient**: Eliminated visible lines between zones using comprehensive color stops
- **ADA Compliance**: Achieved 15:1+ contrast ratios with pure white text on dark backgrounds
- **Scroll Detection**: Intersection Observer API for zone-based interactions
- **Particle Systems**: Zone-specific animations and effects

#### 2. SEO Optimization (COMPLETE)
- **Meta Tags**: Comprehensive Open Graph, Twitter Cards, and standard meta implementation
- **Favicon System**: Complete favicon setup with all formats (16x16 to 512x512, apple-touch-icon, PWA icons)
- **JSON-LD Structured Data**: Organization and website schema markup
- **Technical SEO**: robots.txt, sitemap.xml, proper canonical URLs
- **File Structure**: All assets properly moved to `/public` directory

#### 3. Apple Design System Implementation (COMPLETE)
- **Universal CSS Variables**: Comprehensive design tokens system in `/src/index.css`
  - Spatial system: `--space-xs` (8px) to `--space-5xl` (160px)
  - Typography scale: `--text-xs` to `--text-6xl` with responsive clamp()
  - Border radius system: `--radius-sm` to `--radius-full`
  - Glassmorphism effects: `--glass-blur-minimal` to `--glass-blur-intense`
- **Zone-Specific Theming**: Each zone has dedicated glass variables
  - Surface Zone: Crystal clear glass (2px blur)
  - Euphotic Zone: Light frosted glass (6px blur)  
  - Disphotic Zone: Medium frosted glass (12px blur)
  - Aphotic Zone: Heavy frosted glass (20px+ blur) with glow effects

#### 4. Component System Modernization (COMPLETE)
- **AboutSection**: Apple spatial design with asymmetrical grid, generous spacing, Surface zone theming
- **MissionSection**: Disphotic zone styling with progressive glass effects
- **PortfolioSection**: Aphotic zone with bioluminescent glow effects and heavy glass blur
- **Shared Components**: Universal Apple component classes in `/src/components/shared/AppleComponents.css`
- **Responsive Design**: Mobile-first approach with consistent breakpoints

#### 5. Glassmorphism & Modern Aesthetics (COMPLETE)
- **Progressive Blur Effects**: Glass intensity increases with ocean depth
- **Apple Hover Interactions**: Smooth scale, translateY, and blur transitions
- **Premium Typography**: Apple-style font weights, letter spacing, and sizing
- **Spatial Hierarchy**: Generous padding, asymmetrical layouts, content prioritization

### 🚧 CURRENT STATE
The website now has a **complete cascading design system** where:
- All zones follow Apple spatial design principles
- Glass effects progressively intensify with ocean depth
- Design tokens cascade automatically across all components
- Consistent spacing, typography, and interaction patterns throughout
- Zone-specific accent colors and theming maintain oceanic identity

### 📋 POTENTIAL FUTURE ENHANCEMENTS

#### A. Advanced Interactions
- **Scroll-triggered animations**: Parallax effects for particles and content
- **Zone transition effects**: Smooth content morphing between zones
- **Mouse movement interactions**: Subtle glass refraction following cursor
- **Loading animations**: Ocean-themed page entry effects

#### B. Content Expansion
- **EuphoticSection**: Currently using placeholder OceanZone component
- **Contact/Footer**: Enhanced with zone-appropriate styling
- **Portfolio project details**: Modal or page expansion functionality
- **Team/About expansion**: Additional content sections

#### C. Performance & Accessibility
- **Reduced motion preferences**: `prefers-reduced-motion` support
- **High contrast mode**: Alternative themes for accessibility
- **Performance optimization**: Lazy loading for heavy glass effects
- **Bundle optimization**: Tree-shaking unused design tokens

#### D. Advanced Features
- **Theme customization**: Admin panel for design token adjustment
- **A/B testing**: Multiple design system variations
- **Analytics integration**: Scroll depth and interaction tracking
- **PWA features**: Service worker and offline capabilities

### 🎯 DESIGN SYSTEM PHILOSOPHY
The current implementation follows **Apple's spatial design principles**:
1. **Generous whitespace** using the comprehensive spacing system
2. **Progressive disclosure** with primary/secondary/tertiary hierarchy
3. **Purposeful motion** through cubic-bezier transitions
4. **Content hierarchy** via typography scale and weight variation
5. **Consistent interaction patterns** across all components

The **ocean depth metaphor** enhances this by:
- Progressively increasing glass blur effects deeper in the ocean
- Zone-specific accent colors that match oceanic environments
- Bioluminescent effects in the deepest (Aphotic) zone
- Surface clarity representing accessibility and transparency