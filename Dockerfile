FROM node:lts as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --global npm
RUN npm install --global --force yarn
RUN yarn config set network-timeout 600000 -g
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:1.20-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]

