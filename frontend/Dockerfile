FROM node:12.7.0-alpine

# Create app directory and fill it
RUN mkdir -p /app/cct-frontend
WORKDIR /app/cct-frontend

COPY package.json /app/cct-frontend
COPY package-lock.json /app/cct-frontend

RUN npm install
COPY . /app/cct-frontend

EXPOSE 3000

#CMD to run development server
CMD ["npm", "start"]