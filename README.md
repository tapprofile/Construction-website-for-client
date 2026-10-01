# NEON Construction — Company Website

A premium single-page marketing website for NEON Construction Co. — charcoal & brass palette,
cinematic scroll-driven animations (parallax, word-by-word heading reveals, sticky process section,
before/after sliders), fully responsive down to mobile.

This repository contains **only the construction website**. It is fully self-contained and shares
no code with the NEON Galaxy portfolio site.

## Stack

- React 18 + Vite 5
- Tailwind CSS (v3) with shadcn-style UI primitives
- Framer Motion for all scroll animations

## Getting started

    npm install
    npm run dev

## Production build

    npm run build    # outputs to dist/

## Deploying (Cloudflare Pages)

- Build command: npm run build
- Build output directory: dist

## Contact form

The form is backend-free: on submit it opens the visitor's email client with the inquiry
pre-filled. To collect leads in a database or CRM instead, wire the onSubmit handler in
src/components/construction/QuoteForm.jsx to your own endpoint (Formspree, a serverless
function, etc.).

## Editing content

All copy, services, projects, and process steps live as plain data at the top of each component
file under src/components/construction/ — edit them there.

## Sections

Hero · About · Services · How We Work · Projects · Before/After · Get a Quote · Footer