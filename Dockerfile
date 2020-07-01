FROM node:14.2.0

COPY . /www/app

WORKDIR /www/app
RUN npm install
RUN npm install -g @angular/cli
RUN npm i -g @ionic/cli

EXPOSE 8100

ENTRYPOINT ["ionic"]
CMD ["serve", "8100", "--address", "0.0.0.0"]


