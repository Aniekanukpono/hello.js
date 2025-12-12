const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); // Parses JSON bodies automatically

app.use((req, res, next) => { // Logs every request 
console.log('$(req.method) $(req.url) - $(new Date())'); // Pass to next handler (required!)
next(); }); 

// app.use((req, res, next) => { // Logs every request 
// console.log('Hello, my name is Great'); // Pass to next handler (required!)
// next(); }); 


//app.get("/protected", (req, res) => ( res.send("This was logged!"); });

// app.post("/echo", (req, res) => { 
//   res.json({ echoed: req.body }); // req.body now available! 
// });

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(id)
})

app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send(id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
