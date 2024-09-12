require("dotenv").config();
import express from "express";
import cors from "cors";
import startup from "./startup/routes";

export const app = express();

// Specify the allowed origin in the cors() function
app.use(cors({
  origin: ["https://rcfui.org"],
  credentials: true
}));

// app.use(
//   session({
//     secret: process.env.JWT_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

startup(app);
require("./config/db")()

app.get("/", function (req, res) {
    res.json({
      message: "API is working now",
      ack: Date.now(),
    });
  });

const port = process.env.PORT || 7171

app.listen(port, () => {
    console.log(`Express server listening at port ${port}`)
})