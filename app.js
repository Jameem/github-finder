const path = require('path')
const http = require('http')
const express = require('express')
const fetch = require('node-fetch')
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

app.get("/get-user-profile", async (req, res, next) => {
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    var searchName = req.query.user

    let url = `https://api.github.com/users/${searchName}?client_id=${clientId}&client_secret=${clientSecret}`
    // res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    console.log("start")
    const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(err => {
            console.log(err);
        });

        var data = await result.json();
        console.log(data)
        if(data){
            res.json({
                profile: data
            })
        }
        
});