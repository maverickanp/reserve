FROM node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
EXPOSE 7780
COPY . .
RUN npm run build
CMD ["node", "dist/app.js"]