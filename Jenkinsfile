pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('build') {
            steps {
                git(url: 'git@github.com:riteshapatel/node-jenkins.git', credentialsId: 'jenkins-ssh-key', branch: 'develop');
                echo 'git pull success'
                dir(WORKSPACE + '/node-jenkins') {
                    echo 'cleaning node modules...'
                    sh 'rm -Rf node_modules'

                    echo 'installing node dependencies...'
                    sh 'npm install'
                    echo 'dependencies installed...'
                }
            }
        }

        stage('deploy') {
            steps {
                dir(WORKSPACE) {
                    sshagent(credentials:['1fb8c84e-38a5-4a10-8ca8-dad55273511a']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l ec2-user@ec2-18-204-226-80.compute-1.amazonaws.com uname -a'
                        sh 'scp -r node-jenkins ec2-user@ec2-18-204-226-80.compute-1.amazonaws.com:/home/ec2-user'
                        sh 'ssh ec2-user@ec2-18-204-226-80.compute-1.amazonaws.com "cd node-jenkins && nodemon server.js"'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}