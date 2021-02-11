const express = require('express')
let data = require('./data.js')
const app = express()
const PORT = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true})) // for parsing application/x-www-form-urlencoded

// Returns welcome message on home
app.get('/',(req, res) => {
  res.send('Welcome to our schedule website!')
})

// GET: Displays a json list of users
app.get('/users',(req, res) => {
  res.json(data.users)
})

// GET: Displays a json list of schedules
app.get('/schedules',(req, res) => {
  res.json(data.schedules)
})

// POST: Add a new schedule
app.post('/schedules', (req, res) => {
  let newSchedule = req.body
  console.log(newSchedule)
  data.schedules.push(newSchedule)
  res.send("New schedule added.")
})

// GET: Displays a json of a specific user
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