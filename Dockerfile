# Use Node.js 16 as the base image
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the source code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the built app
# Use nginx image to serve the static build files
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy React build files from builder stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

