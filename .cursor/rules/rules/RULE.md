---
description: "Portfolio website development standards and guidelines"
alwaysApply: true
---

# Portfolio Development Rules

## Technical Standards

### State Management

- Use Zustand for all state management
- Store all state files under `@app/store/`
- Follow naming convention: `use[Feature]Store.tsx`
- Keep store logic focused and modular

### Type Definitions

- Define all interfaces and types in `@app/interface/`
- Use TypeScript interfaces for all data models
- Create static example data in interface files when needed
- Export types explicitly for reusability

### Styling

- Use Tailwind CSS exclusively for styling
- No inline styles or CSS modules
- Leverage Tailwind's utility classes
- Use Tailwind configuration for custom design tokens

### Component Architecture

- Maximum 500 lines per component file
- Split larger components into smaller, focused subcomponents
- Extract reusable logic into custom hooks
- Keep components single-responsibility focused

## Design Principles

### Minimalism

- Clean, simple interfaces
- Remove unnecessary elements
- Focus on content and functionality
- Use whitespace effectively

### Color & Visual Style

- NO linear gradients
- Use solid colors only
- Maintain consistent color palette
- Prioritize readability and accessibility

### Design Philosophy

- Follow principled design approach
- Consistent spacing and typography
- Clear visual hierarchy
- Professional and polished appearance

## Project Context

This is a **portfolio website** showcasing:

- Personal and work profiles
- Projects and experience
- Photos and media content
- Interactive terminal and browser components

Keep all implementations aligned with portfolio presentation goals.
