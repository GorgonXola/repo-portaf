document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector(".logo"); 

    let rotation = 0; 

    function rotateImage() {
        rotation += 0.2; 
        profileImage.style.transform = `rotate(${rotation}deg)`; 
        requestAnimationFrame(rotateImage); 
    }

    rotateImage(); 
});