FROM node:16.9.0
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 5676

CMD ["npm", "run", "start"]