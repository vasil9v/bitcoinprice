const NodeHelper = require("node_helper");
const request = require("request");
const apiurl = "https://api.coindesk.com/v1/bpi/currentprice.json";

module.exports = NodeHelper.create({
  start: function() {

    console.log("Starting module: " + this.name);

    this.expressApp.get("/foobar", function (req, res) {
      let msg = "GET request to /foobar";
      console.log(msg);
      res.send(msg);
    });

    this.expressApp.get("/getprice", function (req, res) {
      let msg = "GET request to /getprice";
      console.log(msg);
      request(apiurl, function(err, res, body) {
        console.log("api response: " + body);
        res.send(body);
      });
    });
  }
});
