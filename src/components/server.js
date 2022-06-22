const { response } = require("express");
const express = require("express");
const fs = require("fs");
const { finished } = require("stream");
const users = require("./users.json");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/users", (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

app.post("/createuser", (req, res) => {
  const users = [];
  fs.readFileSync("./users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err)
      throw err;
    } else {
      console.log(data.length);
      
      const userdata = JSON.parse(data)
      console.log(userdata);
      userdata.map((user) => {
        users.push(user);
      });
      users.push(req.body);
      fs.writeFile("./users.json", users, (err, data) => {
        if (err) {
          console.log(err)
          throw err; //res.send(500)
        } else {
          console.log(data);
          res.send(200);
        }
      });
    }
  });
});

// app.post("/createuser", (req, res) => {
//   var dad = JSON.stringify(req.body);
//   fs.writeFile("./users.json", dad, finished);
//   function finished(err) {
//     console.log(err);
//   }
//   res.send(res.data);
// });

const server = app.listen(3001, () => {
  console.log(
    "listening on port  http://127.0.0.1:3001:",
    server.address().port
  );
});
