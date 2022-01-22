import React from "react";
import emailjs from "emailjs-com";
const EmailNotification = () => {
  var templateParams = {
    user_rec: "Bhaven",
    user_req: "Einstein",
    user_tutor: "meetparmar7101999@gmail.com",
    user_student: "bhavenpanchal1201@gmail.com",
  };
  const sendEmailInvite = () => {};
  //  sendEmailInvite();
  // emailjs.send('service_9i945sl', 'template_47basvx', templateParams ,'user_bIjk639XmNZYIOdYQw98A')
  // .then(function(response) {
  //     console.log('SUCCESS!', response.status, response.text);
  //    }, function(error) {
  //        console.log('FAILED...', error);
  //    });

  return <></>;
};

export default EmailNotification;
