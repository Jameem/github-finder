const github = new Github

//Search input
const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e)=>{
    const text = e.target.value
    
    if(text !==''){
        //Make http call
        github.getUser(text)
        .then(data => {
            console.log(data)
        })
    }
})