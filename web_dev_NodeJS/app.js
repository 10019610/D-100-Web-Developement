const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/curerenttime

app.get("/", function (request, response) {
  response.send(
    '<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>'
  );
}); // localhost:3000/

app.post("/store-user", function (request, response) {
  const userName = request.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  response.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);

// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World!!</h1>");
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

// naver.com => Send a request to naver's server
// naver.com:80 => 기본 값 port
