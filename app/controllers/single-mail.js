let { apiInstance, createEmail } = require("../services/emailservice/email-builder");


module.exports = (req, res) => {

    const { subject, recipient , message } = req.body

    createEmail = {
        'subject': subject,
        'sender': { 'email': 'api@sendinblue.com', 'name': 'Sendinblue' },
        'to': [{'name':`${recipient.firstName, recipient.lastName}`, 'email': recipient.email}],
        // 'htmlContent' : '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
        'params': { 'bodyMessage': message, 'subject': subject },
        'textContent': '{{ params.bodyMessage }}',
        'attachment': [{ 'content': 'b3JkZXIucGRm', 'name': 'myAttachment.png' }],
    }

    apiInstance.sendTransacEmail(createEmail)
    .then(data => {
            console.log(data);
            res.json({
                status: true,
                payload: data
            });
        })
        .catch(error => {
                console.log(error.message);
                res.json({
                    status: false,
                    payload: "Something went wrong in Sendmail Route. " + error.message,
                });
            })

}