
FROM node:latest


EXPOSE 3000
EXPOSE 35729


WORKDIR /client


ENV PATH /client/node_modules/.bin:$PATH


COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json
RUN npm install
RUN npm install react-scripts -g


ADD . /client


CMD ["npm", "start"]