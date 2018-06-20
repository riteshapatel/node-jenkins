FROM node:10.2.1-alpine

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app 
RUN cd /usr/src/app 
RUN npm install 
RUN node --version 

# bundle app source
COPY server.js /usr/src/app 
COPY . /usr/src/app

HEALTHCHECK --interval=5s --timeout=5s CMD curl -f http://127.0.0.1:3000/ || exit 1

EXPOSE 3000 
CMD ["npm", "start"]