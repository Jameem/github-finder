//Search input
const searchUser = document.getElementById('searchUser')
var timer;
var x;

searchUser.addEventListener('keyup', (e) => {
    const text = e.target.value
    if (x) {
        x.abort()
    } 

    clearTimeout(timer);

    timer = setTimeout(async function () {

        const response = await fetch(
            `http://localhost:3000/get-user-profile?user=${text}`
        )

        var data = await response.json();
        console.log(data)

    }, 500);
})