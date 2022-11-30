FROM node:19.2.0
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5676

CMD ["npm", "run", "dev"]