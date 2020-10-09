pipeline {
    agent any
    options {
        skipDefaultCheckout true
    }
    stages {
        stage('source') {
            steps {
                echo 'Getting source...'
                git url: 'https://github.com/CheeseMan1213/IssueTrackingAppFrontend.git', branch: 'master'
                git url: 'https://github.com/CheeseMan1213/IssueTrackingAppBackend.git', branch: 'master'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
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
