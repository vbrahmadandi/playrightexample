# Base image
FROM mcr.microsoft.com/playwright:v1.40.0

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install Playwright browsers
RUN npx playwright install --with-deps

# Copy tests
COPY tests ./tests

# Run tests
CMD ["npx", "playwright", "test"]
