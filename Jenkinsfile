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
                    withDockerRegistry([url: 'https://hub.docker.com', credentials: 'docker-hub-credentials']) {
                        docker.image('node-jenkins-api').push('latest');
                    }
                }
            }
        }
    }
}