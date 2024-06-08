require("dotenv").config();
const express = require("express");

const app = express();

const github = {
  login: "MUHAMMAD-SHAHZAIB",
  id: 90214531,
  node_id: "MDQ6VXNlcjkwMjE0NTMx",
  avatar_url: "https://avatars.githubusercontent.com/u/90214531?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MUHAMMAD-SHAHZAIB",
  html_url: "https://github.com/MUHAMMAD-SHAHZAIB",
  followers_url: "https://api.github.com/users/MUHAMMAD-SHAHZAIB/followers",
  following_url:
    "https://api.github.com/users/MUHAMMAD-SHAHZAIB/following{/other_user}",
  gists_url: "https://api.github.com/users/MUHAMMAD-SHAHZAIB/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MUHAMMAD-SHAHZAIB/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/MUHAMMAD-SHAHZAIB/subscriptions",
  organizations_url: "https://api.github.com/users/MUHAMMAD-SHAHZAIB/orgs",
  repos_url: "https://api.github.com/users/MUHAMMAD-SHAHZAIB/repos",
  events_url: "https://api.github.com/users/MUHAMMAD-SHAHZAIB/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MUHAMMAD-SHAHZAIB/received_events",
  type: "User",
  site_admin: false,
  name: "MUHAMMAD SHAHZAIB",
  company: null,
  blog: "",
  location: "Pakistan",
  email: null,
  hireable: null,
  bio: "Shahzaib is a frontend developer with a Bachelor's degree in Computer Science and two years of software development experience.",
  twitter_username: "shahzaibktk0312",
  public_repos: 49,
  public_gists: 0,
  followers: 0,
  following: 6,
  created_at: "2021-09-06T18:21:05Z",
  updated_at: "2024-05-12T06:07:59Z",
};

// const port = 5000;

app.get("/", (req, res) => {
  res.send(`Welcome to Express Router Shahzaib`);
});

app.get("/shahzaib", (req, res) => {
  res.send("Muhammad Shahzaib");
});

app.get("/github", (req, res) => {
  res.json(github);
});

app.listen(process.env.PORT, () => {
  console.log(`Your Server Is Running In ${process.env.PORT} Port.`);
});
