# Pulls the base container image for NodeJS v14.2.0 from Docker hub.
FROM node:14.2.0
# Copies of the code from the local machine into the container.
# The dot represents 'from,' and /www/app represents 'to.' <FROM><TO>
COPY . /www/app
# Changes to desired directory inside container.
WORKDIR /www/app
# Installs needed software.
RUN npm install
RUN npm install -g @angular/cli
RUN npm i -g @ionic/cli

# Exposes port 80. This is important.
# I do not remember why I am not using '80:80' here. But since I am only adding comments
# at this time, I do not wish to make any code changes. Everything already works.
# Also, even though the command 'ionic serve' will run on port 8100 by the default,
# You are specifying '80' in your CMD at the bottom.
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
