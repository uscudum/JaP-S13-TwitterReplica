const API = "https://my-json-server.typicode.com/noealvarez93/Twitter/posts";
let resultado = [];
const contenedor = document.querySelector('.cont');


document.addEventListener('DOMContentLoaded', function() {
    fetch(API)
    .then(response => response.json())
    .then(result => {
        resultado = result;
        mostrarDatos();

    })
    .catch(error => console.error('Error:', error)); //SE PUEDE PROBAR

})

function mostrarDatos(){
debugger;
    resultado.forEach((element, index) => {
    const html = `
    <div class="tweets" id="tweets">
          <div class="profile-pic"><img src="https://picsum.photos/60/60/?random=${index+1}"  style="border-radius: 50%;"/></div>
          <div class="content">
            <div class="names">
              <p class="full-name">${element.name}</p>
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
          </div>
    `;

        contenedor.innerHTML += html;
   }); 
    

}