This is going to me the instrunctions I use for my IssueTrackingApp. There are 4 public git repos that may interest you
1. https://github.com/CheeseMan1213/IssueTrackingAppFrontend
2. https://github.com/CheeseMan1213/IssueTrackingAppBackend
3. https://github.com/CheeseMan1213/IssueTrackingAppInfrastructure
4. https://github.com/CheeseMan1213/IssueTrackingAppScripts    (depreciated)

Also, this tutorial will be written from the perspective of a person doing it from an UbuntuOS in gnome-terminal. Please make sure you are on a system with a GUI else, you will not have a browser. It is my hope that any reader should be tech savvy enough to translate for installing on a different system themselves. You will know what you need, but you may need to figure out how to get it in a different way.

# Frontend:

Someone shows interest in your code and decide they want to spin things up. What do they do first? They prep their environment to clone and run. The frontend uses the Ionic 4 framework with Angular 9. You first need to have NodeJS installed. Make sure NPM is there too. Then use NPM to global install angular and ionic framework. Login to your GitHub account, fork the repository in question, then clone your fork. The code should locally be on your system now. Run npm install to get the dependencies. If I’m remembering correctly, you run the command “ionic serve” after a few moments the app will be up running locally on the port stated in the terminal. Now the frontend part is up. You should be able to see something like a webpage, but it will not be connected to the backend and it will not be pulling data from the database.

## Commands in correct order assuming you have nothing installed:

`sudo apt-get install nodejs`

`sudo apt-get install npm`

`sudo snap install --classic code`

`sudo npm install -g @angular/cli`

`sudo npm install -g @ionic/cli`

`sudo apt-get install git`

`git clone https://github.com/CheeseMan1213/IssueTrackingAppFrontend.git`

`cd IssueTrackingAppFrontend`

`npm install`

`ionic serve`

(Commands verified to work on 20200930Wed.)


# Backend:

Someone shows interest, so they take a look at the code which will give some knowledge of what they need. You will need to have Java 11 installed on your system. There are multiple ways to do this, I will give you one of the ways. Install the homebrew package manager on your system and then install open JDK 11. If you are already on Linux, you should be able to use its package manager and you will not necessarily need homebrew. Homebrew is for Mac. Next, you might think you need to have Gradle installed, but you do not. This is because the code will come with the Gradle wrapper scripts. You then fork the desired repo so you can have it in your own account, then clone your copy of the repo. Then you’ll run the command “gradle build -x test“. This will pull down the dependencies, and build the .jar file. Then you’ll run a command “gradle bootRun” after this, the backend will be up on the stated port from the command line. To test it you can hit the hello world REST endpoint.

## Commands in correct order assuming you have nothing installed:

`sudo apt-get install default-jre`

`sudo apt-get install default-jdk`

##### NOTE = These commands will install the latest version of openjre and openjdk at the given time. Version 11 or greater is what you need.

`sudo apt-get install git`

`git clone https://github.com/CheeseMan1213/IssueTrackingAppBackend.git`

`cd IssueTrackingAppBackend`

`./gradlew build -x test`

`./gradlew bootRun`

(Commands verified to work on 20200930Wed.)

# Terraform infrastructure:

You are going to want to make sure you have your own AWS account. Account created, credit card given, the approximate 4 to 24 hours waited on so you can create EC2 instances. Please test it. If you can successfully create an EC2 instance, then you are good. While you are waiting for the AWS account to finish initializing, go ahead and install the terraform CLI on your system, and fork then clone the repo. There will be a file called “terraform.tfvars.example”, you will need to remove the “.example” part of the file so that way it just says “terraform.tfvars”. You will then need to add your own AWS IAM access key and secret key. You will need to make sure that the IAM user has all the permissions it needs to create and manage all the resources to be created. I’m pretty sure there’s going to be two or three more things that you should add to that file as well, but you should be able to leave mostly the later half of it alone at least to get the code running initially, you can always mess with it later.
Next you will need to run the terraform commands:

For Ubuntu, Terraform will require the HashiCorp repo, which is not standard in apt-get at this time. And, this method of installation in trustworthy becasue, thought it is not there by default, it is first party becasue it is coming from HashiCorp, the creaters of the Terraform tool.
Check the URLs if you do not trust me.

Tutorial found here:
https://learn.hashicorp.com/tutorials/terraform/install-cli

### Note: If HashiCorp made updates to their turotial, then these lines may have changed.

`curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -`

`sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main”`

`sudo apt-get update && sudo apt-get install terraform`

`terraform init`

`terraform fmt`

`terraform validate`

`terraform plan`

`terraform apply`

There is approximately 45-ish resources that my terraform code will try to create in your AWS account. No matter how good anyone is, at this point it is not fair for me to guarantee that everything will work. Run the terraform commands, watch the output, and use Google to help troubleshoot any errors you encounter. Once everything succeeds, then all of the infrastructure will be up. Next you will need to reference the 9 things that I did outside of terraform.

## So far, I have done these 9 things outside of Terraform:
1. Obtained 1 AWS Elastic IP address.
2. Obtained a personal domain name from AWS.
3. Configured my domain with an AWS Route53 hosted zone.
4. As part of getting the domain, I also had AWS generate a certificate for the domain in AWS Certificate Manager.
5. Made the EC2 key pair.
6. Obtained a static phone number (long code) from AWS Pinpoint.
7. Set up Git credentials via a test CodeBuild project.
8. Enabled Enhanced Monitoring in my Elastic Beanstalk environment.
9. I created a 'subnet group' called "issue-tracking-subnet-group" when creating my "test-redis-3" cluster.

Once all three pieces are set up and at least partially running I’m sure there will still be some things you need to do, for example you will need to get the database URL and give that to the backend code because it will not be the same as mine, same for the Redis cache url. You will need to modify the backend access URL that the frontend has in the angular service file, because you will not have the same domain name as me.

The next files that are worth paying attention to, are the Dockerfiles, the buildspec.yml files. These are locates at the root of the projects. And, the Dockerrun.aws.json file -> located at “Elastic_Beanstalk_CLI_Root/Dockerrun.aws.json” inside the Infrastructure repo. The Dockerfiles are needed to build images that run containers. The buildspec.yml is the file that AWS CodeBuild uses in order to do this. Basically, AWS CodeBuild uses a specual purpose enviornment/OS to create images. The buildspec.yml file tell this OS what to do and will need the Dockerfile too. And, the Dockerrun.aws.json is needed for Elastic Beanstalk Mutli-Container Docker.

Now you probably have a ton of AWS resources built in your AWS account and it will be beneficial for you to be aware of them if for no other reason, so that way you can know why you were being charged some money if that begins to happen. Creating my env in your account will NOT keep you in the AWS Free Tier.
