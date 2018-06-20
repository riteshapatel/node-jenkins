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
                    withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://hub.docker.com']) {
                        sh 'docker push node-jenkins-api:latest'
                    }
                }
            }
        }
    }
}