const http = require("http");

//req -  incoming request
// res- respose
const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("Welcome to about page");
  } else {
    res.end("-Opppsss!-");
  }

  //res.end();
  //   res.write('welcome to our homepage');
});
server.listen(8000);
