# build environment
FROM node:13.12.0-alpine as react-build
#also say 
WORKDIR /builddir
#copy the react app to the container
COPY . ./

# #prepare the contiainer for building react 
RUN npm ci --silent
RUN npm run build

#prepare nginx
FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /builddir/build /usr/share/nginx/html

#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]