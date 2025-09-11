# -------- build stage --------
FROM node:20-alpine AS build
WORKDIR /app
COPY app/package*.json ./
RUN npm install --omit=optional  
COPY app/ ./
RUN npm test

# -------- runtime stage --------
FROM node:20-alpine

# Create and use an unprivileged user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app

# Copy only runtime deps & app
COPY --from=build /app/ /app

ENV NODE_ENV=production
EXPOSE 3000
USER appuser
CMD ["npm", "start"]