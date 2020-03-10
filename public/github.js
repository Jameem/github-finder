const express = require('express')

class Github {
    
    constructor() {
        // const myData = JSON.parse(data);
        alert(process.env.KEY)
        this.client_id = data.key
        this.client_secret = ''
    }
    
    async getUser(user) {
        const profileResponse = await fetch
        (
            `https://github.com/users/${user}
            ?client_id=${this.client_id}&client_secret=${this.client_secret}`
        )

        const profile = await profileResponse.json()

        return {
            profile
        }
    }
}