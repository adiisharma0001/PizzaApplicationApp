
const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const port = 5000
const mongoDB = require("./db")

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type,Accept"
  );
  next();
})

mongoDB();
app.use(express.json({
  type: ['application/json']
}))
app.use('/api', require("./Routes/CreatUser"));


// app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {   
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

// Routes are used to call bassically the call back as user want to ask their previous data(oders)