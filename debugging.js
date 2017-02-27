var http = require("http");

function process_request(req, res) {
  var body = 'Thanks for calling!\n';
  var content_lengtth = body.length;
  res.writeHead(200, {
    'content-length': content_length,
    'content-type': 'text/plain'
  });
  res.end(body);
}

var s = http.createServer(process_request)
s.listen(8080)
