const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    message: { type: String, required: true },
    status: String,
  },
  { timestamps: true },
)

const Message = mongoose.model('message', messageSchema)

module.exports = Message
