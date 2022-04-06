FROM node:16.13.0 as angular

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . .

# If you are building your code for production
#ARG env=prod
RUN npm run build --prod --base-href=/goal-ui/


#CMD [ "npm", "start" ]


FROM nginx
COPY --from=angular /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
###############################################################################
#  I M P O R T A N T E
#
#  nao esquecer de especificar tag para a imagem quando executar o docker build
#
#  docker build . -t goalangular
#
#  pois o nome da imagem sera utilizado como referencia no docker-compose
###############################################################################