let { apiInstance, createEmail } = require("../services/emailservice/email-builder");


module.exports = async (req, res) => {

    const { subject, firstName, lastName, email, message } = req.body

    createEmail = {
        'subject': subject,
        'sender': { 'email': 'api@sendinblue.com', 'name': 'Sendinblue' },
        'to': [{ 'name': `${firstName + lastName}`, 'email': email }],
        // 'htmlContent' : '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
        'params': { 'bodyMessage': 'Made just for you!', 'subject': 'mail subject' },
        'textContent': '{{ params.bodyMessage }}',
        'attachment': [{ 'content': 'b3JkZXIucGRm', 'name': 'myAttachment.png' }],
    }

    try {
        const result = apiInstance.sendTransacEmail(createEmail)
        res.json({
            status: true,
            payload: result
        })

    } catch (error) {
        console.error(error.message)
        res.json({
            status: false,
            payload: "Something went wrong in Sendmail Route.",
        })
    }

}