pipeline {
    agent any
    options {
        skipDefaultCheckout true
    }
    tools {
		nodejs 'node'
		jdk 'jdk11'
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
