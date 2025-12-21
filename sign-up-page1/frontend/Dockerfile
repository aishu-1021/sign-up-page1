# Build stage
FROM node:18-alpine AS build

WORKDIR /app/frontend

COPY package.json package-lock.json* ./
RUN npm install

COPY ./frontend ./frontend

RUN npm run build

# Production stage
FROM nginx:stable-alpine

COPY --from=build /app/frontend/build /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
