# EvoSPA Project Context

## Project Overview

EvoSPA is a mobile app development company website that features a sophisticated AI chatbot for generating project budgets and briefings. The project consists of a single-page application (SPA) with a responsive design optimized for mobile devices, and includes an advanced chat system powered by OpenAI's GPT-4.

## Architecture

### Frontend (SPA)
- **HTML/CSS/JavaScript** single-page application
- **Mobile-first responsive design** with CSS variables and media queries
- **Swiper.js** for interactive sliders (portfolio, testimonials, blog)
- **IMask** for phone number input formatting
- **Intersection Observer** for scroll animations
- **Lazy loading** for images
- Optimized for touch devices with appropriate touch targets (minimum 48px)

### Backend (chat-orcamento)
- **Node.js** with Express.js framework
- **MongoDB** (Mongoose ODM) for data persistence
- **Socket.io** for real-time WebSocket communication
- **OpenAI API** integration for AI-powered conversations
- **WhatsApp Business API** integration for notifications

## Core Components

### Main Website (`/index.html`, `/script.js`, `/styles.css`)
- Complete SPA with hero section, services, testimonials, FAQ, portfolio, and contact form
- Mobile-optimized navigation with hamburger menu
- Form validation with character limits and error handling
- Smooth scrolling navigation
- Scroll-triggered animations

### Chat System (`/chat-orcamento/`)
- Real-time chat interface with WebSocket connection
- AI-powered conversation flow with structured stages
- File upload capabilities (images, documents)
- Session management and rate limiting
- Briefing generation system
- WhatsApp notification integration

## Technologies Used

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Swiper.js for sliders
- IMask for input formatting
- Responsive design with CSS Grid/Flexbox
- CSS custom properties (variables)

### Backend
- Node.js v18+
- Express.js
- Socket.io
- MongoDB (v6+) with Mongoose
- OpenAI API
- WhatsApp Business API
- JSON Web Tokens (JWT)
- CORS, Helmet, rate limiting middleware

## Key Features

### Website Features
- Mobile-first responsive design with 5 breakpoint levels
- Accessible navigation with ARIA attributes
- Form validation with real-time feedback
- Image optimization with lazy loading
- Touch-friendly UI elements

### Chat System Features
- Real-time AI-powered conversations using OpenAI GPT-4
- Structured conversation flow with 10 stages:
  1. Welcome + consentimento LGPD
  2. Contact Info (name + WhatsApp)
  3. App Type (E-commerce, Delivery, etc.)
  4. Platform (iOS/Android/Web)
  5. Features (core functionality)
  6. Design References (with image upload)
  7. Budget (investment range)
  8. Timeline (delivery expectations)
  9. Additional Info
  10. Summary + briefing generation
- File upload for mockups/references
- Session management and conversation history
- Rate limiting (50 messages per 15 minutes)
- WhatsApp notifications for customers and commercial team

## Important Directories

- `/chat-orcamento/` - The AI chat system (Node.js backend + frontend widget)
  - `/backend/` - Server code, models, controllers, routes, services
  - `/frontend/` - Chat widget CSS and client-side JavaScript
  - `/public/` - Publicly accessible files including uploads directory
  - `/docs/` - Documentation files

## Environment Setup

### Required Environment Variables (`.env`)
```
MONGODB_URI=mongodb://localhost:27017/evospa-chat
OPENAI_API_KEY=sk-your-openai-api-key-here
JWT_SECRET=random-strong-secret
CORS_ORIGIN=http://localhost:3000 (or production URL)
```

### Optional Variables (for WhatsApp integration)
```
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_ACCESS_TOKEN=your_whatsapp_token
```

### Running the Application
1. Install dependencies:
   ```bash
   cd chat-orcamento
   npm install
   ```

2. Start MongoDB:
   ```bash
   # macOS
   brew services start mongodb-community
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## Development Standards

- Mobile-first design approach
- LGPD compliance for data protection
- Security measures: rate limiting, input sanitization, JWT authorization
- Performance optimization: image lazy loading, efficient animations
- Cross-browser compatibility with graceful degradation

## Integration Instructions

To add the chat widget to the main website (`index.html`):

```html
<!-- Before </body> -->
<link rel="stylesheet" href="chat-orcamento/frontend/styles/chat-widget.css">
<script src="https://cdn.socket.io/4.6.0/socket.io.min.js"></script>
<script src="chat-orcamento/frontend/utils/chat-client.js"></script>

<div id="chatButton" class="chat-button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="white"/>
    </svg>
</div>

<div id="chatWidget" class="chat-widget">
    <!-- Conteúdo do widget -->
</div>
```

## Key Files to Reference

- `/index.html` - Main SPA structure
- `/script.js` - JavaScript functionality for the SPA
- `/styles.css` - Responsive CSS with mobile-first approach
- `/chat-orcamento/README.md` - Detailed chat system documentation
- `/chat-orcamento/backend/server.js` - Main backend server file
- `/chat-orcamento/package.json` - Project dependencies