 const sendEmail = async (candidateEmail, subject, body) => {
    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: candidateEmail,
          subject: subject,
          body: body
        })
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
};

export default sendEmail;