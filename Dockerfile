FROM node:16-alpine
WORKDIR /app
COPY package.json /app
COPY tsconfig.json /app
COPY public/ /app/public
COPY src/ /app/src
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "serve" ]
