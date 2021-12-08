let { apiInstance, createEmail } = require("../services/emailservice/email-builder");


module.exports = (req, res) => {

    const { subject, recipients, message } = req.body
    let to = []
    recipients.forEach(r => {
        to.push({
            'email': r.email, name: `${r.firstname, r.lastname}`
        })
    });


    createEmail = {
        'subject': subject,
        'sender': { 'email': 'api@sendinblue.com', 'name': 'Sendinblue' },
        'to': to,
        'params': { 'bodyMessage': message},
        'textContent': '{{ params.bodyMessage }}',
        'attachment': [{ 'content': 'b3JkZXIucGRm', 'name': 'myAttachment.png' }],
    }

    apiInstance.sendTransacEmail(createEmail).then(data =>{
        console.log(data);
        res.json({
           status: true,
           payload: data
        })
    }).catch(error=>{
        console.log(error.message);
        res.json({
            status: false,
            payload: "Something went wrong in Sendmail Route. "+ error.message,
        })
    })

    // try {
    //     const result = await apiInstance.sendTransacEmail(createEmail)
    //     res.json({
    //         status: true,
    //         payload: result
    //     })

    // } catch (error) {
    //     console.error(error.message)
    //     res.json({
    //         status: false,
    //         payload: "Something went wrong in Sendmail Route. "+ error.message,
    //     })
    // }

}