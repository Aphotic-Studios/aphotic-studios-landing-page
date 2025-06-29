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