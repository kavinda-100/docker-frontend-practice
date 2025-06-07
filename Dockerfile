# pull the base image
FROM node:22-alpine

# set the working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code
COPY . .

# expose the application port
EXPOSE 5173

# build the application
# RUN npm run build

# start the application
CMD ["npm", "run", "dev"]