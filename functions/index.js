// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();


/**
 * Listens for new deploys added to /deploys/:documentId/ and starts a deploy
 **/
exports.deployWebsite = functions.firestore.document('/messages/{documentId}').onCreate((snapshot, context) => {
      
    // Grab the current value of what was written to Cloud Firestore.
      const deploy = snapshot.data();

      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log(`Deploying ${context.params.documentId}`);
      
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to Cloud Firestore.
      // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
      // return snap.ref.set({uppercase}, {merge: true});
      return new Promise( (resolve) => resolve());
    });
