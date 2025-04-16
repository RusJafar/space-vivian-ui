FROM node:20-alpine
WORKDIR /app
RUN npm install -g http-server
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
#npx http-server ./build -p 3000
CMD ["npx", "http-server", "./build", "-p", "3000"]