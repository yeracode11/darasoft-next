# --- Dependencies ---
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN echo "⚙️ Building Next.js project..." && npm run build

# --- Runtime ---
FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache curl libc6-compat

ENV PORT=3001 \
    HOSTNAME=0.0.0.0

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package.json ./

EXPOSE 3001
CMD ["npm", "start"]
