FROM node:7.4.0

MAINTAINER Tharaka Romesh

# work dir
RUN mkdir -p /usr/src/parkspace
WORKDIR /usr/src/parkspace

# copy app into work dir
COPY . /usr/src/parkspace

# install webpack and nodemon
RUN npm install -g webpack && npm install -g nodemon && npm install

EXPOSE 3000
CMD [ "npm", "start" ]
