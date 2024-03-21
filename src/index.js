const express = require("express");

const app = express(); //http server object

const PORT = 3000;

//express middleware

function m1(req, res, next) {
  console.log("inside middleware m1");
  next();
  console.log("After next in middleware m1");
}
function m2(req, res, next) {
  console.log("inside middleware m2");
  console.log(req.url, req.query);
  next();
  console.log("After next in middleware m2");
}

app.get("/home", m1, m2, (req, res) => {
  //everytime someone calls the /home route , this callback will be called
  console.log("/home called");
  return res.json({ message: "ok" }); //here we are passing js object
});

app.listen(PORT, () => {
  console.log(`app started in port ${PORT}`);
});
