# Use the official Node.js image as a base
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Install Python
RUN apt-get update && apt-get install -y python3 python3-pip

# Set the working directory
WORKDIR /workspace

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]