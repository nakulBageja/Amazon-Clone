const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQWByHnrkdOWDC4disO9LX6z1qLHAienVwvdUHuKMXYWKEFGJnWS02dCmt6ApqrsD3g5r06bm95Rp7Ny4q6Hg9a00XtGfhVBV"
);

//API

// -App config
const app = express();

// -Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment received ---", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currenct
    currency: "INR"
  });

  //Ok- created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// -Listen Command

exports.api = functions.https.onRequest(app);
