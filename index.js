const imgContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", function(){
    imgNum = 9;
    addNewImages();
});

function addNewImages(){
    for (let i = 0; i < imgNum ; i++) {
        const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random()*1500)}`;
    imgContainerEl.appendChild(newImgEl);
        
    }

    
};

