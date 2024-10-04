const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let holding = params.holding;
console.log(holding)

if (holding) {
    document.getElementById('home').style.display = 'none'
    document.getElementById('holding').style.display = 'block'
}
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

    const clickMe = document.getElementById('click-me');

    clickMe.addEventListener('click', function () {
        // Add fade-out class to start fading out animation
        clickMe.classList.add('fade-out');

        // Remove the element after the fade-out animation is done
        setTimeout(() => {
            clickMe.style.display = 'none';
        }, 1000); // Wait for 1 second for the animation to complete
    });
});// Change image every 3 seconds