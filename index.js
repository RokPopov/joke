const express = require('express');
 
const app = express();

const page = `
<html>
<head>
<title>Rok Popov Ledinski</title>
</head>
<body>
<h1>Why was the JavaScript reality show cancelled after only one episode?</h1>
<p>People thought it seemed scripted.</p>
</body>
</html>`

app.get('/', (request, response) => {
  response.send(page);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}.`)
})