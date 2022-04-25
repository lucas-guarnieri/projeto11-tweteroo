import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

let userList = [];
let tweetsList = [];

app.post("/sing-up", (req, res) => {
    const user = req.body;
    userList.push(user);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweetsList.push(tweet);
    res.send("OK");
});

app.listen(5000, () => {
    console.log("Running on http://localhost:5000")
  });