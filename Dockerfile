FROM node:15.4 as build

WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.cong
COPY --from=build /app/build /usr/share/nginx/html