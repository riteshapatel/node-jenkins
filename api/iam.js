/**
 * @description express routes
 * @author ritesh.patel
 * @email ritesh@line89.com
 */
'use strict';

let AWS = require('aws-sdk'),
    _ = require('lodash'),
    iam;

iam = new AWS.IAM({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: 'us-east-1' });

const listUsers = (req, res) => {
    let promise = iam.listUsers().promise();
    promise.then((data) => {
        res.send({ status : 'success', data : data });
    }).catch((err) => {
        res.send({ status : 'failure', data : err });
    });    
}

module.exports = {
    listUsers: listUsers
}