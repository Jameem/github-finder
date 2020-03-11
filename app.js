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

app.get("https://github-finder-v1.herokuapp.com/get-user-profile", async (req, res, next) => {
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    var searchName = req.query.user

    // Fetch user profile
    let url = `https://api.github.com/users/${searchName}?client_id=${clientId}&client_secret=${clientSecret}`

    const profile = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(err => {
            console.log(err);
        });

    var profileData = await profile.json();



    if (profileData) {
        // Fetch user repos
        let reposUrl = `
        https://api.github.com/users/${searchName}/repos?
        per_page=10&sort=created:asc&
        client_id=${clientId}&
        client_secret=${clientSecret}
        `

        const profileRepos = await fetch(reposUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => {
                console.log(err);
            });

        var repos = await profileRepos.json();
        console.log(repos)
        res.json({
            profile: profileData,
            repos: repos
        })
    }

});