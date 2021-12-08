// Node.js SDK: https://github.com/sendinblue/APIv3-nodejs-library
let SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.PASS;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let createEmail = new SibApiV3Sdk.CreateSmtpEmail();


module.exports = {
    apiInstance,
    createEmail
};

