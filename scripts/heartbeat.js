const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const settings = {
    particleGap: isMobile ? 7 : 2,
    particleSize: isMobile ? 4 : 2,
    mouseForce: 30,
    noise: 30,
    layerCount: isMobile ? 1 : 3,
    layerDistance: 5,
    heartBeat: true,
    beatStrength: 200,
};

const heart = new NextParticle({
    renderer: 'webgl',
    image: document.querySelector('#valentines'),
    width: window.innerWidth,
    height: window.innerHeight,
    particleGap: settings.particleGap,
    particleSize: settings.particleSize,
    mouseForce: settings.mouseForce,
    noise: settings.noise,
    layerCount: settings.layerCount,
    layerDistance: settings.layerDistance,
});

function redraw() {
    heart.particleGap = settings.particleGap;
    heart.particleSize = settings.particleSize;
    heart.mouseForce = settings.mouseForce;
    heart.noise = settings.noise;
    heart.layerCount = settings.layerCount;
    heart.layerDistance = settings.layerDistance;
    heart.width = window.innerWidth;
    heart.height = window.innerHeight;

    heart.start({
        initPosition: 'none',
        initDirection: 'none',
    });
};

// const gui = new dat.GUI();
// gui.add(settings, 'particleGap', 1, 20, 1).onChange(redraw);
// gui.add(settings, 'particleSize', .5, 20, .1).onChange(redraw);
// gui.add(settings, 'mouseForce', -300, 300, 5).onChange(redraw);
// gui.add(settings, 'noise', 0, 100, 1).onChange(redraw);
// gui.add(settings, 'layerCount', 1, 15, 1).onChange(redraw);
// gui.add(settings, 'layerDistance', 0.1, 20, .1).onChange(redraw);
// gui.add(settings, 'heartBeat');
// gui.add(settings, 'beatStrength', 0, 500, 1);
//
// if (isMobile) {
//     gui.close();
// }

window.addEventListener('resize', redraw);

setInterval(() => {
    if (settings.heartBeat) {
        const strength = settings.beatStrength;
        heart.origins.map(o => o.z -= strength);
        setTimeout(() => {
            heart.origins.map(o => o.z += strength);
        }, isMobile ? 200 : 100);
    }
}, isMobile ? 2500 : 1500)


const startDate = new Date('September 22, 2024 14:25:00').getTime();

function updateCountUp() {
    const now = new Date().getTime();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // Update total days in the romantic note
    document.getElementById('total-days').innerHTML = days;
}

// Update the count-up every second
setInterval(updateCountUp, 1000);