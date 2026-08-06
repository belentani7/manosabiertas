# 🏗️ NOIACORE 2060 · FULLSTACK ARCHITECTURE

**Versión:** 4.0 (Roadmap)  
**Estado:** Production-Ready Recomendaciones  
**Fecha:** 2026-08-06

---

## 📐 ARQUITECTURA COMPLETA (Frontend + Backend)

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER BROWSER                            │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ NOIACORE 2060 v3 (HTML + CSS + JS)                      │ │
│  │ ├─ Catálogo embebido (JSON, 1000+ fichas)              │ │
│  │ ├─ Chat IA local (pattern matching)                   │ │
│  │ ├─ MetaBuscador CORS (50+ APIs públicas)              │ │
│  │ └─ localStorage (tema, modo, preferencias)             │ │
│  └───────────────────────────────────────────────────────────┘ │
│             ↓ (CORS fetch)          ↓ (si v4.0)                │
│  ┌──────────────────┐      ┌────────────────────────────┐      │
│  │  APIs PÚBLICAS   │      │   NOIACORE BACKEND (NEW)   │      │
│  │ (50+ bancos)     │      │  (Node.js/Python)          │      │
│  │ • Crossref       │      │ ┌──────────────────────┐   │      │
│  │ • OL             │      │ │ Express API Router   │   │      │
│  │ • IA             │      │ │ /api/catalog         │   │      │
│  │ • Wikidata       │      │ │ /api/banks           │   │      │
│  │ • etc (50+)      │      │ │ /api/chat (IA)       │   │      │
│  └──────────────────┘      │ │ /api/search (relay)  │   │      │
│                            │ └──────────────────────┘   │      │
│                            │ ┌──────────────────────┐   │      │
│                            │ │ Database             │   │      │
│                            │ │ • PostgreSQL/Mongo   │   │      │
│                            │ │ • 0 user data (only  │   │      │
│                            │ │   logs anónimos)     │   │      │
│                            │ └──────────────────────┘   │      │
│                            │ ┌──────────────────────┐   │      │
│                            │ │ Cache                │   │      │
│                            │ │ • Redis (APIs)       │   │      │
│                            │ │ • Catalog cache      │   │      │
│                            │ └──────────────────────┘   │      │
│                            └────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ TECH STACK

### Frontend (v3.0 - Actual)
```
✅ HTML5 (semantic)
✅ CSS3 (variables, grid, flexbox, animations)
✅ JavaScript vanilla (ES6+)
✅ GSAP 3 (tweening, parallax) — CDN
✅ ScrollTrigger (GSAP plugin)
✅ Google Fonts (Newsreader, Instrument Sans, JetBrains Mono)
✅ Fetch API (CORS)
✅ LocalStorage (preferencias)
✅ IntersectionObserver (lazy reveals)
✅ WebAudio API (sintetizador opcional)
```

### Backend (v4.0 - Recomendado)
```
Node.js 20+ LTS
│
├─ Runtime
│  └─ Express.js 4.18+ (REST API)
│
├─ Database
│  ├─ PostgreSQL 15 (catálogo, logs anónimos)
│  └─ Redis 7 (cache APIs)
│
├─ AI Integration
│  ├─ Claude API (server-side, keys secretas)
│  ├─ OpenAI API (opcional)
│  └─ Anthropic SDK
│
├─ Utilities
│  ├─ node-cache (in-memory cache)
│  ├─ axios (HTTP requests)
│  ├─ dotenv (environment variables)
│  ├─ cors (CORS middleware)
│  ├─ helmet (security headers)
│  └─ morgan (logging)
│
└─ DevOps
   ├─ Docker (containerization)
   ├─ Docker Compose (local dev)
   ├─ Nginx (reverse proxy)
   └─ Let's Encrypt (HTTPS)
```

### Alternative (Python Stack)
```
FastAPI 0.100+ (async REST)
├─ Uvicorn (ASGI server)
├─ SQLAlchemy (ORM)
├─ Pydantic (validation)
├─ Redis-py (caching)
└─ Anthropic Python SDK
```

---

## 🗂️ ESTRUCTURA DE CARPETAS (v4.0)

```
noiacore-2060/
│
├── frontend/
│   └── public/
│       ├── noiacore-2060-v3-mega.html  (SPA principal)
│       ├── index.html                   (redirect)
│       └── data/
│           ├── catalog.json             (1000+ fichas)
│           └── banks.json               (150+ bancos)
│
├── backend/                              (NEW)
│   ├── server.js                        (Express app)
│   ├── package.json                     (dependencies)
│   ├── .env.example                     (env template)
│   ├── .env                             (API keys - GITIGNORE)
│   │
│   ├── routes/
│   │   ├── api.js                       (main router)
│   │   ├── catalog.js                   (GET /api/catalog)
│   │   ├── banks.js                     (GET /api/banks)
│   │   ├── chat.js                      (POST /api/chat)
│   │   ├── search.js                    (GET /api/search/{q})
│   │   └── relay.js                     (relay para APIs sin CORS)
│   │
│   ├── middleware/
│   │   ├── auth.js                      (rate limiting by IP)
│   │   ├── cache.js                     (Redis cache)
│   │   ├── cors.js                      (CORS config)
│   │   └── logger.js                    (anonymous logging)
│   │
│   ├── services/
│   │   ├── aiService.js                 (Claude API wrapper)
│   │   ├── cacheService.js              (Redis + in-memory)
│   │   └── bankService.js               (bancos data)
│   │
│   ├── db/
│   │   ├── connection.js                (PostgreSQL)
│   │   ├── migrations/                  (schema)
│   │   └── seeds/                       (initial data)
│   │
│   └── config/
│       ├── database.js
│       ├── redis.js
│       ├── ai.js
│       └── constants.js
│
├── docker/
│   ├── Dockerfile                       (Node.js image)
│   ├── docker-compose.yml               (dev environment)
│   └── nginx.conf                       (reverse proxy)
│
├── docs/
│   ├── API.md                           (endpoint docs)
│   ├── DEPLOYMENT.md                    (production steps)
│   ├── ARCHITECTURE.md                  (this file)
│   └── ENV.md                           (environment setup)
│
├── tests/
│   ├── unit/                            (service tests)
│   ├── integration/                     (API tests)
│   └── e2e/                             (full flow)
│
└── .github/
    └── workflows/
        └── ci.yml                       (GitHub Actions)
```

---

## 🔌 API ENDPOINTS (Backend v4.0)

### Catalog Management
```
GET  /api/catalog
     Query: ?lang=es&limit=100
     Response: { items: [...], total: 1000 }

GET  /api/catalog/:id
     Response: { cat, title, source, url, langs, lic, desc, emb }

POST /api/catalog (admin only)
     Body: { cat, title, ... }
     Response: { id, ... }

PUT  /api/catalog/:id (admin only)
DELETE /api/catalog/:id (admin only)
```

### Banks Registry
```
GET  /api/banks
     Query: ?type=libros&region=mundo
     Response: [{ n, t, r, e, l, u, s }, ...]

POST /api/banks (admin only)
UPDATE /api/banks/:id (admin only)
```

### AI Chat (Server-side)
```
POST /api/chat
     Headers: { Authorization: Bearer token }
     Body: { message: "Bach", context?: "music" }
     Response: { suggestions: [...], model: "claude-3.5-sonnet" }

     Security: Claude API key stored server-side
               User never sees API key
               Rate limited: 100 req/min per IP
```

### Search Relay (APIs sin CORS)
```
GET  /api/search/arxiv?q=machine+learning
     Body: calls arXiv API server-side
     Response: { results: [...] }

GET  /api/search/europeana?q=arte+renaissance
     Requiere: EUROPEANA_WSKEY en .env
     Response: { items: [...] }
```

### Analytics (anónimo)
```
POST /api/analytics/search
     Body: { query: "bach", timestamp: ISO8601 }
     DB: Guarda SOLO query + timestamp (sin IP, sin user agent)
     
GET  /api/stats
     Response: { queries_today: 1234, top_searches: [...] }
     Visible: solo para admin (token JWT)
```

---

## 🔐 SEGURIDAD (Backend)

### Environment Variables (.env)
```bash
# NO COMMITEAR .env
NODE_ENV=production
PORT=3000

# Claude API (server-side only)
CLAUDE_API_KEY=sk-ant-...
CLAUDE_MODEL=claude-3-5-sonnet-20241022

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=noiacore
DB_USER=noiacore_user
DB_PASSWORD=***strong***

# Redis
REDIS_URL=redis://localhost:6379

# Rate limiting
RATE_LIMIT_WINDOW=15 # minutes
RATE_LIMIT_MAX_REQUESTS=100

# Admin token (for /api/stats, POST /api/catalog)
ADMIN_TOKEN=generate-strong-jwt

# CORS whitelist
ALLOWED_ORIGINS=https://noiacore.com,https://www.noiacore.com

# Logging
LOG_LEVEL=info
```

### Security Headers
```javascript
// Express middleware
const helmet = require('helmet');
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "cdn.jsdelivr.net"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    frameSrc: ["'self'", "*.gutenberg.org", "*.archive.org"],
  }
}));
```

### Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // 100 requests per windowMs
  message: 'Too many requests, please try again later.',
  standardHeaders: true, // Return rate limit info in RateLimit-* headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
});

app.use('/api/', limiter);
```

---

## 📊 DATABASE SCHEMA (PostgreSQL)

```sql
-- Catálogo
CREATE TABLE catalog (
  id SERIAL PRIMARY KEY,
  cat VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  source VARCHAR(100) NOT NULL,
  url TEXT NOT NULL,
  langs JSON NOT NULL, -- ["es", "en"]
  lic VARCHAR(50) NOT NULL,
  desc TEXT,
  emb BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Banks
CREATE TABLE banks (
  id SERIAL PRIMARY KEY,
  n VARCHAR(100) NOT NULL UNIQUE,
  t VARCHAR(50), -- tipo
  r VARCHAR(50), -- región
  e BOOLEAN DEFAULT false, -- embebible
  l VARCHAR(100), -- idiomas
  u TEXT NOT NULL,
  s TEXT, -- search URL template
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics (anónimo)
CREATE TABLE search_logs (
  id SERIAL PRIMARY KEY,
  query VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  -- NO IP, NO user agent
  INDEX idx_query (query),
  INDEX idx_timestamp (timestamp)
);

-- Admin users (optional)
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  token_hash VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🚀 DEPLOYMENT (Production)

### Docker
```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY backend/ .

EXPOSE 3000
CMD ["node", "server.js"]
```

### Docker Compose (local dev)
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DB_HOST=postgres
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=noiacore
      - POSTGRES_USER=noiacore_user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Nginx Config (reverse proxy)
```nginx
upstream noiacore_backend {
  server localhost:3000;
}

server {
  listen 443 ssl http2;
  server_name noiacore.com;

  ssl_certificate /etc/letsencrypt/live/noiacore.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/noiacore.com/privkey.pem;

  # Security headers
  add_header Strict-Transport-Security "max-age=31536000" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "no-referrer" always;
  add_header Content-Security-Policy "default-src 'self'; script-src 'self' cdn.jsdelivr.net;" always;

  # Frontend
  location / {
    root /var/www/noiacore;
    index noiacore-2060-v3-mega.html;
    try_files $uri /noiacore-2060-v3-mega.html;
  }

  # Backend API
  location /api/ {
    proxy_pass http://noiacore_backend;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

---

## 📋 DEPLOYMENT STEPS

### 1. Local Development
```bash
# Clone & setup
git clone https://github.com/belentani/noiacore.git
cd noiacore/backend
npm install

# Environment
cp .env.example .env
# Edit .env con valores locales

# Run
npm run dev
# http://localhost:3000

# Tests
npm test
npm run test:integration
```

### 2. Staging
```bash
# Docker compose
docker-compose up -d

# Check health
curl http://localhost:3000/api/health
```

### 3. Production
```bash
# Build image
docker build -t noiacore:latest .

# Push to registry (Docker Hub, ECR, etc)
docker push registry.example.com/noiacore:latest

# Deploy with Kubernetes / Docker Swarm / etc
kubectl apply -f k8s/deployment.yaml
```

---

## 📈 PERFORMANCE TARGETS (v4.0)

| Métrica | Target |
|---|---|
| API Response Time | <200ms (p95) |
| Cache Hit Rate | >80% |
| Database Queries | <50ms |
| Lighthouse Score | ≥90 |
| 99.9% Uptime | SLA |

---

## 🔄 CI/CD Pipeline (.github/workflows/ci.yml)

```yaml
name: CI/CD

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm test
      - run: npm run test:integration
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: docker/setup-buildx-action@v2
      - uses: docker/build-push-action@v4
        with:
          push: true
          tags: registry.example.com/noiacore:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: kubectl set image deployment/noiacore noiacore=registry.example.com/noiacore:latest
```

---

## 📝 CONCLUSIÓN

NOIACORE 2060 v4.0 (Fullstack) será:

✅ **Escalable** (Backend + Database + Cache)  
✅ **Seguro** (API keys server-side, rate limiting, CSP)  
✅ **Performante** (Redis cache, CDN)  
✅ **Privado** (0 PII en database, anónimo logging)  
✅ **Dockerizado** (fácil deploy)  
✅ **Monitoreado** (logs, analytics)  

**Timeline:** v3.1 (agosto) → v3.2 (septiembre) → v4.0 (Q1 2027)

---

**Autor:** Pedro Belentani (@BELENTANI)  
**Fecha:** 2026-08-06  
**Versión:** Roadmap v4.0  
**Status:** Ready for Implementation
