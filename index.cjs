const express = require('express')
const app = express()
app.listen(3000, () => {
  console.log("server started");
})
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
});