FROM node:8-alpine AS builder

# Install npm dependancies
COPY package*.json /app/
WORKDIR /app
RUN npm install

# Copy and build source code
COPY . /app/
RUN npm run build


FROM node:8-alpine
WORKDIR /app

# Copy built app
COPY --from=builder /app .
CMD NODE_ENV=production npm run built-start
