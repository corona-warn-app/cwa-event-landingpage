FROM node:14 as build

ARG WORK_DIR=/build
WORKDIR ${WORK_DIR}

# prepare basic build environment
COPY package.json package-lock.json ${WORK_DIR}/
RUN npm install

# build/create 'public' folder 
COPY config.yml ${WORK_DIR}/
COPY gulpfile.js ${WORK_DIR}/
COPY src ${WORK_DIR}/src
RUN npm run build

# create nginx execution environment
FROM mtr.external.otc.telekomcloud.com/paas/mcs-nginx:v1.16.1
COPY --from=build /build/public /usr/share/nginx/html/