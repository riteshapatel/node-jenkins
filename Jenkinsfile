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
                    withDockerRegistry('https://hub.docker.com', 'docker-hub-credentials') {
                        docker.image('node-jenkins-api').push('latest');
                    }
                }
            }
        }
    }
}