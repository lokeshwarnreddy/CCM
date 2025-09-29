# Production stage - expects build folder to exist locally
FROM node:22-slim

# Install serve package globally
RUN npm install -g serve

# Create app directory
WORKDIR /app

# Create non-root user
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs reactjs

# Copy pre-built application (build locally first)
COPY ./build ./build

# Change ownership to non-root user
RUN chown -R reactjs:nodejs /app

# Switch to non-root user
USER reactjs

# Expose port 8080 (Azure App Service requirement)
EXPOSE 8080

# Start the application using serve
CMD ["serve", "-s", "build", "-l", "8080"]