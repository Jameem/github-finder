const path = require('path')
const http = require('http')
const express = require('express')
// const {
//     generateMessage,
//     generateLocationMessage
// } = require('./utils/messages')
// const {
//     addUser,
//     removeUser,
//     getUser,
//     getUsersInRoom
// } = require('./utils/users')

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})