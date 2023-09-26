// Solución realizada por: Martin Hegui, Nicolas Rodriguez y Noelia Alvarez

const API_URL = "https://my-json-server.typicode.com/noealvarez93/Twitter/posts";
const container = document.querySelector('.cont');

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error in request: ${response.status}`);
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
});

function displayData(data) {
    container.innerHTML = ''; 

    data.forEach((element, index) => {
        const formattedUsername = `@${element.name.toLowerCase().replace(/ /g, '_')}`;

        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweets');

        tweetDiv.innerHTML = `
            <div class="profile-pic"><img src="https://picsum.photos/60/60/?random=${index + 1}" style="border-radius: 50%;" /></div>
            <div class="content">
                <div class="names">
                    <p class="full-name">${formattedUsername}</p>
                </div>
            </div>
            <div class="tweet-content">
                <p>${element.text}</p>
            </div>
            <div class="tweet-icons">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
            </div>
        `;

        container.appendChild(tweetDiv); 
    });
}
