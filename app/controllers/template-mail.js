const { createEmail } = require('../services/emailservice/email-builder');


module.exports = (req, res) => {

    const { templateid, messageVersions } = req.body


    createEmail = {

        "sender":{ "email":"sendinblue@sendinblue.com", "name":"Sendinblue"},
        "subject":"This is my default subject line",
        "templateId":templateid,
        "params":{
            "greeting":"This is the default greeting",
            "headline":"This is the default headline"
        },
        "messageVersions": messageVersions
    }

    apiInstance.sendTransacEmail(createEmail)
    .then(function (data) {
        console.log(data);
        res.json({
            status: true,
            payload: data
        });
    })
    .catch(function(error) {
        
        console.log(error.message);
        res.json({
            status: false,
            payload: "Something went wrong in Sendmail Route. "+ error.message,
        })
    })
}