let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.heart');
    const items2 = document.querySelectorAll('.altheart');
    document.addEventListener('click', musicPlay);
    function musicPlay() {
        document.getElementById('page-audio').play();
        document.removeEventListener('click', musicPlay);
    }


    [...items, ...items2].forEach(item => {
        // Generate random positions
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;

        // Apply random positions
        item.style.left = `${randomLeft}%`;
        item.style.marginTop = `${randomTop}px`;
    });
});// Change image every 3 seconds