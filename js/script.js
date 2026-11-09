console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=lH4tfHlDBNslgrOyHsVZix1w1zfUjN03&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
console.log(button);


async function getGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const images = data.data.map(function(gif){
    return gif.images.original.url;
  });

  console.log(images);
  gifContainer.innerHTML ="";

  images.forEach(function(image){
    gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3">`;
  });
}


button.addEventListener("click", async function () { 
  await getGifs(); 

});
