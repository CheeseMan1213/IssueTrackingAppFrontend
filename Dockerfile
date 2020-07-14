FROM node:14.2.0

COPY . /www/app

WORKDIR /www/app
RUN npm install
RUN npm install -g @angular/cli
RUN npm i -g @ionic/cli

EXPOSE 80

ENTRYPOINT ["ionic"]
CMD ["serve", "80", "--address", "0.0.0.0"]
# CMD ["serve", "8100", "--address", "james2ch9developer.com"]
# ionic serve --port 8080 --address 0.0.0.0 -- --disableHostCheck true
# CMD ["serve", "8100", "--address", "0.0.0.0", "--disableHostCheck", "true"]
