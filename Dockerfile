FROM node:18 as build

ARG WORK_DIR=/build
WORKDIR ${WORK_DIR}

# prepare basic build environment
COPY package.json package-lock.json ${WORK_DIR}/
RUN apt-get update && apt-get install libgl1 libxi6 -y && npm install

# build/create 'public' folder 
COPY config.yml ${WORK_DIR}/
COPY gulpfile.mjs ${WORK_DIR}/
COPY src ${WORK_DIR}/src
RUN npm run build

# create nginx execution environment
FROM nginx:1.22.1
COPY --from=build /build/public /usr/share/nginx/html/
