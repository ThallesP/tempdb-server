FROM node:18.9.0
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5676

CMD ["npm", "run", "dev"]