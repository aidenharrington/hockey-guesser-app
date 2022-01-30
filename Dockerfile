FROM node:latest
RUN mkdir -p /hockey-guesser-app
WORKDIR /hockey-guesser-app
COPY package.json /hockey-guesser-app
RUN npm install
COPY . /hockey-guesser-app
EXPOSE 7500
ENTRYPOINT ["node"]
CMD ["index.js"]