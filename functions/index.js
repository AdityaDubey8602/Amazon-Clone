const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JKOzbSJCsV1CsghQUZOu91xOsabw64PaVx7sNFqdo3zlieC3emvhRZjnezu05cFtiHYqCnA0Dy6F9Ac5VgC5sLg00RDgrBEHo');

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json())

// - API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    // Ok - Created Something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})


// - Listen command
exports.api = functions.https.onRequest(app)


// Example Endpoint 
// http://localhost:5001/clone-d85b6/us-central1/api