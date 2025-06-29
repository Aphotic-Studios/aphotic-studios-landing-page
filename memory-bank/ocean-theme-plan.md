# Ocean Theme Landing Page Plan

## Overview
Build a dramatic ocean-themed landing page for Aphotic Studios LTD that transitions through ocean zones as user scrolls: Surface → Euphotic → Disphotic → Aphotic zones.

## Phase 1: Theme System Setup
- CSS variables for 4 ocean zones with dramatic color transitions
- **Surface**: Bright cyan/turquoise, white foam, golden sun rays
- **Euphotic**: Deep blue-green, filtered sunlight effects
- **Disphotic**: Purple-blues, dimmed lighting, mysterious feel
- **Aphotic**: Deep black/navy, bioluminescent neon accents (electric blues, greens)

## Phase 2: Dramatic Visual Effects System
- **Scroll-triggered animations**: Intersection Observer API for zone detection
- **Particle systems**: Floating bubbles, marine snow, bioluminescent particles
- **Gradient overlays**: Dynamic background gradients that shift with scroll
- **Depth illusion**: Parallax scrolling, scale transforms, blur effects
- **Color bleeding**: Smooth RGB transitions between zones

## Phase 3: Component Architecture
- `OceanZone` with built-in scroll detection and theme switching
- `ParticleSystem` component for each zone's unique effects
- `ZoneTransition` with dramatic crossfade and depth effects
- Content sections with zone-appropriate styling

## Phase 4: Advanced Interactions
- **Surface**: Gentle wave animations, sun rays
- **Euphotic**: Swimming light rays, gentle particle drift
- **Disphotic**: Fading light effects, slower particle movement
- **Aphotic**: Glowing/pulsing bioluminescent elements, dark ambient feel

## Phase 5: Content & Polish
- About section content (Surface zone) - TBD
- Mission statement content (Disphotic zone) - TBD
- Portfolio structure for product categories - TBD
- Update site.webmanifest with Aphotic Studios branding
- Performance optimization

## Technical Requirements
- Scroll-based zone transitions (automatic)
- Dramatic visual effects preferred
- Theme system portable to other projects
- Use existing assets from `src/assets/`
- Responsive design