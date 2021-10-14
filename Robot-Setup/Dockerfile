FROM node:latest

EXPOSE 3000

WORKDIR /App

ENV GENERATE_SOURCEMAP=false

COPY ./ ./

WORKDIR /App/Robot-Setup

RUN npm install

CMD ["npm", "run", "dev"]