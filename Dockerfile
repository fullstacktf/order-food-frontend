# compile stage
FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.20.1 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx/comidit.app.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
