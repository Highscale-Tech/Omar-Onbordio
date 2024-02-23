Project Name: Onboardio

Description:

Onboardio is a tool designed to streamline and expedite email delivery for managers during the onboarding process. 
It leverages Firebase to manage data and perform email sending, facilitating a smooth and efficient experience.

Setup:
Create a Firebase project: Follow the Firebase setup guide to create a project and obtain your project credentials.
Create Firebase collections: Manually create two collections in Firestore:
candidates: Contains a single field called candidatEmail to store candidate email addresses.
subjects: Contains a single field called SubjectName to store pre-defined email subjects.
Create .env file: 
Create a .env file at the root of the Onbordio folder to store your Firebase project credentials:

VITE_API_KEY=your_app_api_key

VITE_AUTH_DOMAIN=your_app_auth_domain
VITE_PROJECT_ID=your_app_project_id

VITE_STORAGE_BUCKET=your_app_storage_bucket

VITE_MESSAGING_SENDER_ID=your_app_messaging_sender_id

VITE_APP_ID=your_app_id

Replace the placeholders with your actual values.
Create separate .env file for email sending: 
Create another .env file in the SENDEMAILSERVICE folder to store your email service credentials:

PORT=your_backend_port_number
USER=your_email_address
APP_PASSWORD=your_app-specific_password

Replace your_backend_port_number with the desired port number for your backend server.
Replace your_email_address with the email address you'll be using for sending emails.
Replace your_app-specific_password with the app-specific password generated after enabling Two-factor authentication for your email account.

Usage:

Login: Use either email/password or Google Provider authentication to log in.
View candidates and subjects: See all the candidates and subjects you've added in the corresponding lists.
Compose and send emails: Select desired candidate, choose a pre-defined subject, and personalize the email content before sending it.

To run the Project:

After Cloning The repository : 
Navigate  to the Directory OnBordio
then use the following commands :

npm install

npm run dev

To run the SENDEMAILSERVICE:

Use the following commands :

 npm install 

 npm run server (to run the service )


Additional Notes:
Make sure you have Node.js and npm  installed on your system before proceeding.
Double-check that you've replaced all placeholders in the .env file with your own values.
You'll need to create a test email and password manually in your Firebase Authentication service for login testing purposes.
Ensure Two-factor authentication is enabled for your email account before generating the app-specific password.


