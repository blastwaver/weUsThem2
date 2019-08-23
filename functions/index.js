const functions = require('firebase-functions');
const express = require('express');
const helmet = require('helmet');
const testRoutes = require('./routes/test_route');
const cors = require('cors');
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/test', testRoutes);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// app.listen(8080);
// console.log(' server running on 8080');
exports.app = functions.https.onRequest(app)
