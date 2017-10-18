/**
 * @description express routes
 * @author ritesh.patel
 * @email ritesh@line89.com
 */
'use strict';

let AWS = require('aws-sdk'),
    ec2;

ec2 = new AWS.EC2({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: 'us-east-1' });
const getInstances = (req, res) => {
    ec2.describeInstances((err, data) => {
        if (err) {
            res.send({ status: 'failure', data: err });
            return;
        }

        let result = [];

		if (data && data.Reservations) {
			let reservations = data.Reservations;
			for (let i=0, n = reservations.length; i < n; ++i) {
				let r = reservations[i];
				r.Instances[0].ReservationId = r.ReservationId;
				r.Instances[0].OwnerId = r.OwnerId;
				result[0] = _.union(result[0], r.Instances);
			}

			if (result) {
				result = {"Instances": result[0]};
			}			
        }
        
		res.send({ status : 'success', data : result });        
    })
}

module.exports = {
    getInstances: getInstances
}