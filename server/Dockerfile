# Specify a base image
FROM node:14-alpine

WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .

# Default command
CMD ["npm", "run", "build"]