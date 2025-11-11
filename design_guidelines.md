# English Language Center - Design Guidelines

## Design Approach
**Reference-Based with Educational Focus**: Drawing inspiration from premium educational platforms (Duolingo, Coursera) and boutique service providers (language schools, tutoring centers). Emphasis on warmth, professionalism, and human connection to build trust and credibility.

## Core Design Principles
- **Approachable Professionalism**: Balance educational authority with welcoming, friendly aesthetics
- **Human-First**: Prioritize real photos of instructors and students to build personal connection
- **Clear Information Hierarchy**: Course details and learning paths should be immediately scannable
- **Trust & Credibility**: Every page reinforces expertise through testimonials, credentials, and social proof

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - Clean, modern sans-serif for body text and UI elements
- Accent: 'Playfair Display' - Elegant serif for headings and emphasis

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl font-semibold
- Body Text: text-base leading-relaxed
- Small Text: text-sm

## Layout & Spacing System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Container max-width: max-w-7xl

**Grid Patterns**:
- Featured Courses: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Instructors: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Blog Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
- Sticky header with center-aligned logo
- Desktop: Horizontal menu with dropdown for Courses (by level)
- Mobile: Hamburger menu with slide-in panel
- CTA button in nav: "Free Consultation" - prominent positioning

### Hero Section (Home Page)
- **Large Hero Image**: Professional classroom setting or diverse students engaged in learning
- Height: min-h-screen with centered content
- Overlay: Semi-transparent gradient for text readability
- CTA button with blur background (backdrop-blur-sm bg-white/20)
- Secondary supporting text below headline

### Featured Courses Cards
- Card layout with course thumbnail image at top
- Level badge (Beginner/Intermediate/Advanced) - small, rounded badge
- Course title, brief description (2 lines), duration, and schedule
- "Learn More" link at bottom
- Subtle hover lift effect (transform scale-105)

### Student Testimonials
- Card-based design with student photo (circular, medium size)
- Quote in italics with quotation marks
- Student name, country flag icon, and course taken below
- Star rating display (5-star system)
- Carousel on mobile, 3-column grid on desktop

### Meet Our Instructors
- Professional headshot photos (square aspect ratio)
- Name and primary specialty below photo
- Years of experience and certifications as small text
- Subtle hover effect revealing "View Profile" overlay
- 4-column grid on desktop, 2-column on tablet, 1-column mobile

### Blog Preview/Cards
- Featured image at top (16:9 aspect ratio)
- Category tag in top-left corner
- Article title (2 lines max with ellipsis)
- Excerpt (3 lines max)
- Author name with small avatar + read time
- Published date

### Contact Form
- Two-column layout on desktop (form left, info/map right)
- Form fields: Name, Email, Phone, Preferred Course Level (dropdown), Message (textarea)
- Large, clear "Submit" button
- Contact info sidebar: Phone, Email, Address, Office Hours
- Embedded map placeholder below contact info

### Course Page Layout
- Filter sidebar (desktop) or dropdown (mobile) for levels
- Course grid with expanded cards showing: Image, Title, Description, Duration, Schedule, Price, Instructor name, "Enroll Now" CTA
- Quick comparison table for course levels

### About Page Structure
- Hero image: Team photo or classroom environment
- Mission statement section - large typography, centered
- Timeline/History section - visual timeline with milestones
- Teaching methodology - icon + text cards in 3-column grid
- Accreditation badges and partner logos

### Blog Page
- Hero section with search bar
- Category filter tabs
- Article grid with pagination
- Sidebar: Popular posts, Categories, Newsletter signup

## Images Strategy

**Required Images**:
1. **Home Hero**: Large, inspiring image of diverse students in modern classroom or language learning environment (full-width, high-quality)
2. **Instructor Photos**: Professional headshots for 4-6 instructors (square format, consistent style)
3. **Student Testimonial Photos**: 6-9 real student photos (circular crop, diverse representation)
4. **Course Thumbnails**: 6-9 course-specific images (books, conversation groups, digital learning)
5. **About Page Hero**: Team photo or welcoming classroom scene
6. **Blog Featured Images**: 6-9 images related to language learning, culture, education

**Image Treatment**: All photos should feel authentic and warm - avoid overly staged stock photos. Use real people when possible to build trust.

## Interactions & Animations

**Minimal Animation Strategy**:
- Smooth scroll behavior for anchor links
- Subtle fade-in on scroll for section entries (once)
- Card hover states: slight lift (translateY(-4px)) with shadow increase
- Button hover: slight scale and brightness increase
- Testimonial carousel: smooth slide transitions (no auto-play)
- No distracting parallax or complex scroll-driven animations

## Accessibility
- All images have descriptive alt text
- Form labels properly associated with inputs
- Sufficient color contrast ratios (WCAG AA minimum)
- Focus states visible on all interactive elements
- Keyboard navigation fully supported

## Responsive Breakpoints
- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px (2-column layouts)
- Desktop: > 1024px (3-4 column layouts)

**Mobile Priorities**: Stack all grids to single column, hamburger nav, larger touch targets (min 44px), simplified testimonial carousel

This design creates a professional, trustworthy educational brand while maintaining warmth and approachability through human-centered imagery and clear information architecture.