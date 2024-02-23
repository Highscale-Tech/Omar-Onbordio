import React , {useState} from 'react'

function EmailContent({emailContent, setEmailContent, selectedCandidate, selectedSubject, sendEmail}) {
    const [emailSent, setEmailSent] = useState(false);
    const handleSendEmail = () => {
        sendEmail(selectedCandidate, selectedSubject, emailContent).then(() => {
          setEmailSent(true);
        }).catch((error) => {
          console.error('Error sending email: ', error);
        });
    };

    const closeAlert = () => {
        setEmailSent(false);
    }
    return (
        <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="border border-gray-300 rounded p-4">
                <textarea
                    className="w-full p-2 border  border-2 border-blue-800 hover:border-blue-800  rounded-2xl mb-4"
                    placeholder="Compose your email..."
                    rows="7"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                />
                <div className="flex justify-between">
                    <button className="bg-blue-100 hover:bg-blue-100 text-blue-800 font-bold py-2 px-4 rounded">
                        Edit Email
                    </button>
                    <button onClick={() => handleSendEmail()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send Email
                    </button>
                </div>
                {emailSent && (
                    <div className="mt-2 bg-blue-100 border border-blue-400 text-gray-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">Email sent successfully.</span>
                        <button onClick={closeAlert} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a.5.5 0 0 1-.707 0L10 11.206 6.354 14.85a.5.5 0 1 1-.708-.708l3.65-3.646-3.65-3.646a.5.5 0 0 1 .708-.708L10 9.793l3.646-3.65a.5.5 0 0 1 .708.708L10.707 10.5l3.641 3.65a.5.5 0 0 1 0 .708z"/></svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmailContent