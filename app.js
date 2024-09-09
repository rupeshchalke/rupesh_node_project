const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.listen(9998, function(){
//     console.log("server is running on port no:9998")
//     console.log(3000)
// })

app.get('/employee/:id',function(){
   console.log(req.params.id)
   res.send()
   let input = req.query
})
