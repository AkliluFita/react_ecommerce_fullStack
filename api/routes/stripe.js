import express from "express";
import Stripe from "stripe";
// const KEY = process.env.STRIPE_KEY;
const stripe = new Stripe(
  "sk_test_51JtJjoLvEhMFDyOWWkv7Gjfc9fKxCtbfd16G8gNRfRu099bNGtGUDBg0cmzqOf3DH8LCnvJqBYLYczhwg76Vv3nH00QFJzUebc"
);

// route config
const router = express();

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
