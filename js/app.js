
const fetchData = async (id) => {
    try {
        
        const res = await fetch(`https://api.github.com/users/${id}`)
        const status = await res.status;
        const data = await res.json();
        const errorMsg = document.getElementById('err-msg');

        if(status === 404) {
            errorMsg.classList.toggle("no-display");

        } else {
            const user = {
                avatar_url: data.avatar_url,
                name: data.name,
                login: data.login,
                bio: data.bio,
                created: data.created_at,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                location: data.location,
                blog: data.blog,
                twitter: data.twitter_username,
                company: data.company
            }
    
            displayUserInfo(user)
        }
    
    } catch (error) {
        console.log(error)
    }
}

const displayUserInfo = user => {
   let userImg = document.getElementById('user-img');
   let userName = document.querySelector('.user-name');
   let userTag = document.querySelector('.user-tag');
   let userDate = document.querySelector('.user-date');
   let userBio = document.querySelector('.user-description');
   let numbers = document.querySelectorAll('.number');
   let contactInfo = document.querySelectorAll('.contact-txt'); 
   userImg.src = user.avatar_url;
   userName.innerHTML = user.name;
   userTag.innerHTML = user.login;
   userDate.innerHTML = user.created;
   userBio.innerHTML = user.bio;
   numbers[0].innerHTML = user.repos;
   numbers[1].innerHTML = user.followers;
   numbers[2].innerHTML = user.following; 
   contactInfo[0].innerHTML = user.location;
   contactInfo[1].innerHTML = user.blog;
   contactInfo[2].innerHTML = user.twitter;
   contactInfo[3].innerHTML = user.company;
}

const searchUser = () => {
    const search = document.getElementById('search-user').value;
    fetchData(search)
}




