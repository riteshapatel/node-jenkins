/**
 * @description express routes
 * @author ritesh.patel
 * @email ritesh@line89.com
 */
'use strict';

exports.welcomeAPI = (req, res) => {
    res.json({ message: 'Final test for Node-Jenkins integration!' });
}