FROM node:16.9.0
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3333

CMD ["npm", "run", "dev"]