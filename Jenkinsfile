pipeline {
    agent any
    options {
        skipDefaultCheckout true
    }
    stages {
        stage('source') {
            steps {
                echo 'Getting source...'
                git url: 'https://github.com/CheeseMan1213/IssueTrackingAppFrontend.git', branch: 'main'
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
