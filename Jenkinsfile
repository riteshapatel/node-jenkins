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
                    sshagent(credentials:['5758cb36-4a4e-4586-9f77-f1d8b71221b7']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l ec2-user ec2-34-229-138-28.compute-1.amazonaws.com uname -a'
                        sh 'scp -r /* ec2-user@ec2-34-229-138-28.compute-1.amazonaws.com:/home/ec2-user/node-jenkins'
                        sh 'ssh ec2-user@ec2-34-229-138-28.compute-1.amazonaws.com "cd node-jenkins && nodemon server.js"'
                    }
                }
            }
        }
    }

}