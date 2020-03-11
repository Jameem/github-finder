const ui = new UI

//Search input
const searchUser = document.getElementById('searchUser')
var timer;
var x;

searchUser.addEventListener('keyup', (e) => {
    const text = e.target.value

    if (text === '') {
        ui.clearProfile()
        return
    }

    if (x) {
        x.abort()
    }

    clearTimeout(timer);

    timer = setTimeout(async function () {

        const response = await fetch(
            `https://github-finder-v1.herokuapp.com/get-user-profile?user=${text}`
        )

        var data = await response.json();

        if (data.profile.message === 'Not Found') {
            ui.showAlert('User not found', 'alert alert-danger mt-3')
        } else {
            ui.showProfile(data.profile)
            ui.showRepos(data.repos)
            
        }


    }, 500);
})