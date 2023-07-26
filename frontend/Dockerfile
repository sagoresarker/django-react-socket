# FROM node:16-alpine

# WORKDIR /app/frontend/

# COPY package*.json /app/frontend/
# RUN npm install


# COPY . /app/frontend/

# RUN npm run build

# CMD ["npm", "start"]


FROM node:16-alpine

# Set the working directory to /app/frontend/
WORKDIR /app/frontend/

# Copy package.json and package-lock.json to /app/frontend/
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application to /app/frontend/
COPY . .

# Change the working directory to /app/frontend/build/
WORKDIR /app/frontend/build/

# Run the build step
RUN npm run build

# Revert back to /app/frontend/ directory
WORKDIR /app/frontend/

# Start the frontend application
CMD ["npm", "start"]
