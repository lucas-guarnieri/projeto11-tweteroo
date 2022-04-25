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
    tweetsList.push(tweetFormating(tweet));
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    if (tweetsList.length >= 10){
        res.send(tweetsList);
    }else {
        res.send(tweetsList.slice((tweetsList.length - 5), tweetsList.length));
    }
});

function tweetFormating(twe){
    let message = twe.tweet
    let header = userList.find(element => element.username === twe.username);
    return {...header, tweet:message};
}

app.listen(5000, () => {
    console.log("Running on http://localhost:5000")
  });