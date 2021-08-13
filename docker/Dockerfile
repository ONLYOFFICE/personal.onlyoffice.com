### STAGE 1: Base image ######
ARG REPO=node
ARG REPO_TAG=14.17
ARG SRC_PATH=/app/onlyoffice/src

FROM $REPO:$REPO_TAG AS base
ARG SRC_PATH
ARG GIT_BRANCH=develop

RUN echo "nameserver 8.8.8.8" | tee /etc/resolv.conf > /dev/null && \
    apt-get -y update && \
    apt-get install -yq git yarn 

RUN echo ${GIT_BRANCH}  && \
    git clone --depth 1 -b ${GIT_BRANCH} https://github.com/ONLYOFFICE/personal.onlyoffice.com.git ${SRC_PATH}

RUN cd ${SRC_PATH} && \
    yarn && \
    yarn build

### STAGE 2: Run ###
FROM nginx:alpine AS personal-site
ARG SRC_PATH

WORKDIR /usr/share/nginx/html
RUN rm -rf * && \
    sed -i "s!server_name.*!server_name localhost;\n add_header Cache-Control \"no-cache, no-store, must-revalidate\";!" /etc/nginx/conf.d/default.conf
COPY --from=base ${SRC_PATH}/public/ .
