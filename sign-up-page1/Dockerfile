# Stage 1: Build and install dependencies
FROM node:18-alpine AS builder

WORKDIR /app/backend

COPY package.json package-lock.json* ./
RUN npm install --production

COPY backend ./backend
COPY .env.example ./

# Stage 2: Run the app
FROM node:18-alpine

WORKDIR /app/backend

COPY --from=builder /app/backend/node_modules ./node_modules
COPY --from=builder /app/backend/backend ./backend
COPY --from=builder /app/backend/.env.example ./

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["node", "backend/server.js"]
