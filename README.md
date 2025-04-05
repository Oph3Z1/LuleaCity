# About The Project
This is my first React Native (Expo) project and my first mobile application. This app was created for a school project and showcases the city of Luleå in Sweden. It provides users with information about local places such as restaurants, hair salons, shopping centers, etc.

The app includes user authentication features, allowing users to create accounts and log in. Firebase is used to manage user authentication and data storage.

The goal of this project is to help users easily explore Luleå's local businesses and services and provide them with all the information they need in one place.

This project is still open for further development and improvement.

### Build With
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Redux](https://img.shields.io/badge/redux-6e2bf5?style=for-the-badge&logo=redux&logoColor=b796f9)

# Installation

1. Create a new Firebase project and enable Authentication and Firestore services.
2. In the Firebase console, navigate to Project Settings and copy the Firebase configuration object.
3. Replace the "firebaseConfig" in **firebaseConfig.js** with your Firebase configuration values.
4. Install NPM packages
   ```sh
   npm install
   ```

# Usage
Start by installing the Expo Go app from the App Store for iOS or Google Play Store for Android.

You can start the project by running the command:
```sh
npx expo start
```

After running the command, you should now see a QR code appear on your terminal. Scan the QR code with your phone, and it should lead you to the Expo Go app, where the project will run.
