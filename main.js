//Valeria Duarte, Santiago Costa, Bruno Fleitas, Axel Alonso

const URL = ('https://my-json-server.typicode.com/axelalonso203/twitter/posts')
const srcImg = "https://xsgames.co/randomusers/assets/avatars/pixel/"

function randomNumbers (){
 return Math.round(Math.random()*10)
}


document.addEventListener('DOMContentLoaded', ()=>{ 

const tweetDiv = document.querySelector(".feed")
fetch (URL)
.then (response =>  response.json())
.then (data =>{  
    data.forEach(element => {
    let contenedor = document.createElement("div")
        
    contenedor.innerHTML=
    
    `<div class="tweets">
    <div class="profile-pic"><img width="35px" height= "35px" src="${srcImg + randomNumbers()+".jpg"}" /></div>
        <div class="content">
          <div class="names">
            <p class="full-name">${element.name}</p>
            <p class="user-name">${'@'+ element.name}</p>
            <p class="time"> 27mins</p>
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
        `

        tweetDiv.appendChild(contenedor)
        
    });
   
});
})



