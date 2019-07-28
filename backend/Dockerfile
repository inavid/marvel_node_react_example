FROM node:12.7.0-alpine

# Create app directory and fill it
RUN mkdir -p /app/cct-backend
WORKDIR /app/cct-backend

COPY package.json /app/cct-backend
COPY package-lock.json /app/cct-backend

RUN npm install
COPY . /app/cct-backend

#Should be the same than .env file
EXPOSE 3001

#CMD to run development server
CMD ["npm", "run", "start-dev"]
