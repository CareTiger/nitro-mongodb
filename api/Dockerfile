FROM node:latest

# Create api directory
WORKDIR /api

# Install api dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
RUN npm run build

# Bundle api source
COPY . .

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]