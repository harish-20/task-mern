const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const { addMessage, getAllMessages } = require('./controller/Messages')

const app = express()

app.use(express.json())
app.use(cors({ origin: '*' }))

// db connection
mongoose.connect('mongodb://localhost:27017/twitter')

// routes
app.get('/', (req, res) => res.json('Server is Working'))

app.post('/messages/addMessage', addMessage)

app.get('/messages', getAllMessages)

app.listen(8080, () => {
  console.log('Server started at port 8080')
})
