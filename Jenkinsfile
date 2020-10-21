pipeline {
    agent any

    options {
        skipDefaultCheckout true
    }
    
    tools {
        dockerTool 'docker'
    }
    
    environment {
        dockerImage = ''
        registry_backend = 'cheeseman1213/issue-tracking-app-backend'
        registry_fronend = 'cheeseman1213/issue-tracking-app-frontend'
        registryCredential = 'dockerhub_id'
    }
     
    stages {
        stage('source') {
            steps {
                echo 'Getting source...'
                dir('IssueTrackingAppBackend'){
                    git url: 'https://github.com/CheeseMan1213/IssueTrackingAppBackend.git', branch: 'master'
                }
                dir('IssueTrackingAppFrontend'){
                    git url: 'https://github.com/CheeseMan1213/IssueTrackingAppFrontend.git', branch: 'master'
                    sh 'npm install'
                }
            }
        }
        stage('linter') {
            steps {
                echo 'Linting source...'
                dir('IssueTrackingAppBackend'){
                    echo 'Linting Backend...'
                    sh './gradlew checkstyleMain'
                    sh './gradlew pmdMain'
                    sh './gradlew spotbugsMain'
                }
                dir('IssueTrackingAppFrontend'){
                    echo 'Linting Frontend...'
                    sh 'ng lint'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                dir('IssueTrackingAppBackend'){
                    echo 'Building backend...'
                    sh './gradlew build'
                    script {
                        dockerImage = docker.build registry_backend + ":$BUILD_NUMBER"
                        docker.withRegistry( '', registryCredential ) {
                            dockerImage.push()
                        }
                    }
                }
                dir('IssueTrackingAppFrontend'){
                    echo 'Building frontend...'
                    script {
                        dockerImage = docker.build registry_fronend + ":$BUILD_NUMBER"
                        docker.withRegistry( '', registryCredential ) {
                            dockerImage.push()
                        }
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
    /*** workspace clean up*/
    /*post {
        always {
            cleanWs()
        }
    }*/   
}
