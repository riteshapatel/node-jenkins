pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('build') {
            steps {
                git(url: 'git@github.com:riteshapatel/node-jenkins.git', credentialsId: 'jenkins-ssh-key', branch: 'develop');
                echo 'git pull success'
                dir(WORKSPACE + '/code') {
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
                dir(WORKSPACE + '/code') {
                    sshagent(credentials:['1fb8c84e-38a5-4a10-8ca8-dad55273511a']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 18.204.226.80 uname -a'
                        sh 'ssh ec2-user@18.204.226.80 "killall node"'
                        sh 'scp -r node-jenkins ec2-user@18.204.226.80:/home/ec2-user/'
                        sh 'ssh ec2-user@18.204.226.80 "cd node-jenkins && nodemon server.js"'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWS()
        }
    }
}