### STAGE 1: Base image ######
ARG REPO=node
ARG REPO_TAG=18.14
ARG SRC_PATH=/app/onlyoffice/src

FROM $REPO:$REPO_TAG AS base
ARG SRC_PATH
ARG GIT_BRANCH=develop

RUN apt-get -y update && \
    apt-get install -yq git yarn 

RUN echo ${GIT_BRANCH}  && \
    git clone -b ${GIT_BRANCH} https://github.com/ONLYOFFICE/personal.onlyoffice.com.git ${SRC_PATH}

RUN cd ${SRC_PATH} && \
    yarn && \
    yarn build

### STAGE 2: Run ###
FROM nginx:alpine AS personal-site
ARG SRC_PATH

WORKDIR /usr/share/nginx/html
RUN rm -rf * && \
    rm -rf /etc/nginx/conf.d/*
COPY /config/personal-site.conf /etc/nginx/conf.d/
COPY --from=base ${SRC_PATH}/public/ .
