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
                    withCredentials([usernamePassword(credentialsId: "docker-hub-credentials", passwordVariable: 'HUB_PASSWORD', usernameVariable: 'HUB_USERNAME')]) {
                        sh("docker login -u ${HUB_USERNAME} -p ${HUB_PASSWORD}")
                        sh("docker push node-jenkins-api:latest")
                    }
                }
            }
        }
    }
}