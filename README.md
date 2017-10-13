## Jenkins Integration Guide

Author: Ritesh Patel | Last Updated: Oct 12, 2017

## Overview

This guide lists steps required for CI / CD integration with Jenkins

## Make Git & Jenkins talk to each other

1. Create a GitHub Repository (private or public)
2. Install Jenkins in the cloud

###### Jenkins Server Configuration
3. Create ssh key on Jenkins Server
        ssh-keygen -t rsa
4. Go to "Credentials" in Jenkins UI
5. Add Credentials with SSH Username with a private key
6. Paste private key 
7. Enter pass-phrase (if any), else leave it blank

###### GitHub Configuration
8. Click "Integrations & Services"
9. Add Jenkins hook url and create service
        http://{JENKINS_ENDPOINT}:port/github-webhook
10. Click "Webhooks"
11. Add Webhook
        Payload URL: http://{JENKINS_ENDPOINT}:port/github-webhook
        Content-type (leave default)
        Select "Just the push event"
        Select "Active"
        Create Webhook
12. Send a Test Payload from git to jenkins
13. Add a "ssh public key" from jenkins server under github settings

### Jenkins Build Job
Once the communication is established we must create a build job under Jenkins.

1. Click "New Item"
2. Select "GitHub Project"
        Project Url: https://github.com/riteshapatel/node-jenkins/
3. Under "Source Code Management"
        repositories: git@github.com:riteshapatel/node-jenkins.git
        credentials: (select ssh username with private key credential)
4. Under "Build Triggers"
        select "GitHub hook trigger for GITScm polling"
5. Click "Save"

### Test
Push code to github repository. Upon push git will send a payload to Jenkins endpoint which should trigger a build.

Enjoy!