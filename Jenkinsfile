pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }

        stage('Push image') {
            steps {
                docker.withRegistry('https://hub.docker.com', 'docker-hub-credentials') {
                    app.push('latest');
                }
            }
        }
    }
}