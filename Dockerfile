FROM node:alpine

#Create app directory
RUN mkdir /usr/src/
WORKDIR /usr/src/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./usr/src/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
#COPY . .

RUN npm run build
EXPOSE 3000
CMD npm run start
