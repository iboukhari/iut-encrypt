'use strict';

const crypto = require('crypto');

function sha1(plainText) {
    return crypto
        .createHash('sha1')
        .update(plainText)
        .digest('hex');
}

function compareSha1(plainText, hashedPassword) {
    return sha1(plainText) === hashedPassword;
}

module.exports = {
    sha1,
    compareSha1
};