FROM node:18.7.0
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5676

CMD ["npm", "run", "dev"]