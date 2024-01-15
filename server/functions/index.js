const functions = require('firebase-functions');
const admin = require('firebase-admin');

const cors = require('cors')({ origin: true });

// initialize the admin
admin.initializeApp();

// initialize the db instance
const db = admin.firestore();

// function to validate the user JWT Bearer Token

exports.validateUserJWTToken = functions.https.onRequest(async (req, res) => {
  // enable cors
  cors(req, res, async () => {
    // get Authorization header from the request
    const authorizationHeader = req.get('Authorization');

    // check if the Authorization header is present
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer')) {
      return res.status(401).json({ error: 'Unauthorize' });
    }

    // extract the token from the Authorization header
    const token = authorizationHeader.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      if (decodedToken) {
        // get user collection
        const docRef = db.collection('users').doc(decodedToken.uid);
        const doc = await docRef.get();

        // set user collection
        if (!doc.exists) {
          const userRef = db.collection('users').doc(decodedToken.uid);
          await userRef.set(decodedToken);
        }
        // return user collection
        return res.status(200).json({ success: true, user: decodedToken });
      }
    } catch (error) {
      console.log('Error on validating', error);
      return res
        .status(401)
        .json({ error: error.message, status: 'Unauthorized' });
    }
  });
});
