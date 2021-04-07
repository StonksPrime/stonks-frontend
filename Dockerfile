# Base image
FROM node:12.13.0 as build

ARG ENV=prod
ARG APP=stonks-frontend
ARG BACKEND_HOST

ENV ENV ${ENV}
ENV APP ${APP}
ENV BACKEND_HOST ${BACKEND_HOST}

WORKDIR /app
COPY ./ /app/

# Installs dependencies
RUN npm ci
# Build app
RUN npm run build:prod
# Move files to working dir
# RUN mv /app/dist/* /app/dist/

# Run app in alpine image, get rid of node image
FROM nginx:1.13.8-alpine

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
