# Stage 1: Build the React application
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# 1. CRUCIAL: Wipe out Nginx's default welcome page and fallback configurations
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/*

# 2. Copy the fresh production build from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# 3. Copy your custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 4. Set proper read permissions so Nginx can access the files
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
