const http = require('http')  // require built-in Node.js http package

// Use hosting values if available, otherwise default 
const hostname = process.env.hostname || '0.0.0.0' // allow remote access
const port = process.env.PORT || 3002

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<style>\
  * {\
    background-color: lightblue;\
  </style>\
  <h1>This is simple  node-server page</h1><br/> \
  <a href="https://github.com/cherryvarsha99"> My GitHub</a>')
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})