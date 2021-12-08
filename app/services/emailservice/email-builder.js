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




















// SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.PASS;

// const sendr = new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
//   {
//     'subject':'Hello from the Node SDK!',
//     'sender' : {'email':'api@sendinblue.com', 'name':'Sendinblue'},
//     'to' : [{'name': 'John Doe', 'email':'holayinkajr@gmail.com'}],
//     'htmlContent' : '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
//     'params' : {'bodyMessage':'Made just for you!111', 'subject':'subin subject'},
//     'textContent': 'this is to check you out dont reply 222',
//     'subject': 'checking you out subself',
//     'attachment': [{'content': 'b3JkZXIucGRm', 'name': 'myAttachment.png'}],
//   }
// ).then(function(data) {
//   console.log(data);
// }, function(error) {
//   console.error(error);
// });


// module.exports = sendr