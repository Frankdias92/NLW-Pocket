FROM node:18.20.4-alpine3.20

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["sh", "-c", "npm run migration && npm run dev"]