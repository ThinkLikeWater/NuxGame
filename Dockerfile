FROM mcr.microsoft.com/playwright:v1.39.0-jammy

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of your application code
COPY . .

# Expose the necessary ports if required
EXPOSE 8080

# Start your application
CMD ["npx", "playwright", "test", "--project=chromium"]
