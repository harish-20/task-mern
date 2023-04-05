const Message = require('../model/Message')

const getAllMessages = async (req, res) => {
  const messages = await Message.find({})

  res.status(200).send(messages)
}

const addMessage = async (req, res) => {
  const { fullName, message } = req.body
  const createdAt = Date.now()
  const messageObj = await Message({ fullName, message, createdAt })

  try {
    await messageObj.save()
    res.status(200).send({ message: 'added successfully' })
  } catch (err) {
    res.send(err.message)
  }
}

module.exports = {
  getAllMessages,
  addMessage,
}
