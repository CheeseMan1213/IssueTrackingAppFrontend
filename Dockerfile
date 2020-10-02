FROM node:14.2.0

COPY . /www/app

WORKDIR /www/app
RUN npm install
RUN npm install -g @angular/cli
RUN npm i -g @ionic/cli

EXPOSE 80

# Used the command 'CMD' and 'ENTRYPOINT' to run the app on container start up.
# Remember:
# RUN = Executes shell commands during the process of building the image.
# These commands do not run on container start up, only for the image build.
# ENTRYPOINT = Sets commands to run on container startup that you cannot overwright.
# CMD = Sets commands to run on container startup that may be overwrighten.
ENTRYPOINT ["ionic"]
CMD ["serve", "--port", "80", "--host", "0.0.0.0"]

# CMD ["serve", "8100", "--address", "james2ch9developer.com"]
# ionic serve --port 8080 --address 0.0.0.0 -- --disableHostCheck true
# CMD ["serve", "8100", "--address", "0.0.0.0", "--disableHostCheck", "true"]
