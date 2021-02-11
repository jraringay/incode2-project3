const express = require('express')
const data = require('./data.js')
const app = express()
const PORT = 3000

// Returns welcome message on home
app.get('/',(req, res) => {
  res.send('Welcome to our schedule website!')
})

// Displays a json list of users
app.get('/users',(req, res) => {
  res.json(data.users)
})

// Displays a json list of schedules
app.get('/schedules',(req, res) => {
  res.json(data.schedules)
})

// Displays a json of a specific user
app.get('/users/:userNumber',(req, res) => {
  res.json(data.users[req.params.userNumber])
})

// Displays a json of a specific user and their schedule
app.get('/users/:userNumber/schedules',(req, res) => {
  
  const userNumberSchedules = data.schedules.filter(item => {
    return item.user_id === +req.params.userNumber // this + is a unary operator, it can be used to convert a string to a number 
  })
  res.json(userNumberSchedules)

  // let results = []
  
  // for(let i=0; i<data.schedules.length; i++) {
  //   if(data.schedules[i].user_id == req.params.userNumber){
  //     results.push(data.schedules[i])
  //   } else {
  //     console.log("no match found")
  //   }
  // }

  // return res.json(results)

})



// Run server
app.listen(PORT, () => {
  console.log(`Server is listening on localhost ${PORT}!`)
})