# ===================================
# STAGE 1: Build
# ===================================

FROM node:alpine as node
ENV env=beta
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build:$env

# ===================================
# STAGE 2: Serve
# ===================================

FROM nginx:alpine

COPY --from=node /usr/src/app/dist/tdgroup-fe /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

EXPOSE 80/tcp