pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }

        stage('Publish') {
            when {
                branch 'master'
            }

            steps {
                docker.withDockerRegistry('https://hub.docker.com', 'docker-hub-credentials') {
                    docker.image('node-jenkins-api').push('latest');
                }
            }
        }
    }
}