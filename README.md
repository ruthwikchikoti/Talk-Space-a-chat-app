# TalkSpace - A Chat App
- live link : [live link](https://talkspace-0510.web.app/)
- demo video : [demo video](https://drive.google.com/file/d/1VrLj7tVRpgaouSZC3A1o-FDapOT_KI9M/view)
## Overview
**TalkSpace** is a real-time chat application built using React, Firebase, and Material-UI. This project allows users to sign in with their Google account, create new chats, and send messages to each other.

## Features
- User authentication with Google Sign-In
- Real-time chat functionality using Firebase Firestore
- Ability to create new chats and send messages
- Display of chat history and last seen timestamp
- Integration with Material-UI for a responsive and visually appealing interface

## Technologies Used
- **React**: A JavaScript library for building user interfaces
- **Firebase**: A cloud-hosted platform for building web and mobile applications
- **Material-UI**: A popular React UI framework for building responsive and visually appealing interfaces
- **Firestore**: A NoSQL document database provided by Firebase

## Project Structure
The project is divided into several components:

- `src`: The main directory for the project's source code
- `components`: A directory for reusable React components
- `utils`: A directory for utility functions and helpers
- `firebase`: A directory for Firebase-related configuration and initialization
- `public`: A directory for static assets and the application's entry point

## Key Components
- **App.js**: The main application component that renders the chat interface
- **Chat.js**: A component that renders a single chat conversation
- **Sidebar.js**: A component that renders the sidebar with a list of chats
- **SidebarChat.js**: A component that renders a single chat item in the sidebar
- **Login.js**: A component that handles user authentication with Google Sign-In

## Key Functions
- `saveUserToFirestore`: Saves the user's data to Firestore after authentication
- `createNewChat`: Creates a new chat document in Firestore
- `sendMessage`: Sends a new message to a chat conversation
- `getLastSeenTimestamp`: Retrieves the last seen timestamp for a chat conversation

## Setup and Deployment
To set up and deploy the project, follow these steps:

1. Clone the repository using `git clone`
2. Install the required dependencies using `npm install`
3. Create a new Firebase project and enable the Firestore database
4. Update the `firebaseConfig` object in `src/firebase.js` with your project's configuration
5. Run the application using `npm start`
6. Deploy the application to a hosting platform of your choice (e.g., Firebase Hosting, Vercel, etc.)

## Things to Note
- Make sure to install the Firebase CLI using `npm install -g firebase-tools`
- Initialize the Firebase project using `firebase init`
- Set up the Firebase environment variables in a `.env` file:

```bash
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
FIREBASE_APP_ID=YOUR_APP_ID
```



- Update the `firebaseConfig` object in `src/firebase.js` with the values from the `.env` file:


```javascript
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
```


- **Note**: Make sure to commit the `.env` file to your repository, but **do not push it to a public repository** for security reasons.




