pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }

        stage('Publish') {
            steps {
                script {
                    withDockerRegistry([url: 'https://hub.docker.com', credentialsId: 'docker-hub-credentials']) {
                        sh 'docker push node-jenkins-api:latest'
                    }
                }
            }
        }
    }
}