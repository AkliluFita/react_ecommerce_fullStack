import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// import from routes
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import cartRoute from "./routes/carts.js";
import stripeRoute from "./routes/stripe.js";

// app config
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// middleware for cors
app.use(cors());

// Middleware for data parser (to be able to send any json file)
app.use(express.json());

// route(API end point)
app.get("/", (req, res) => {
  res.send("we are the home");
  console.log("we are the home");
});

// middleware form routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", stripeRoute);

// connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(console.log("the DB is connected"))
  .catch((err) => console.log(err));

// listen to the server
app.listen(port, console.log(`the server connected @${port}`));
