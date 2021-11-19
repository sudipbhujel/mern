from node:17-alpine

WORKDIR /app
COPY package*.json /app/
COPY ./ /app/
RUN npm install --only=production

CMD ["npm", "start"]
