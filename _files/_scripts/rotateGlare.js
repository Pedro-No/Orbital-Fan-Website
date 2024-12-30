document.addEventListener('DOMContentLoaded', () => {
    const glare = document.getElementById('glare');
    glare.style.transformOrigin = '50% 50%'; // Set transform origin to the center

    let isRotating = false;
    let rotation = 0;
    let rotationInterval;

    glare.addEventListener('click', () => {
        isRotating = !isRotating;
        if (isRotating) {
            startRotation();
        } else {
            stopRotation();
        }
    });

    glare.addEventListener('mouseover', () => {
        if (!isRotating) {
            startRotation();
        }
    });

    glare.addEventListener('mouseup', () => {
        if (isRotating) {
            stopRotationSlowly();
        }
    });

    function startRotation() {
        rotationInterval = setInterval(() => {
            rotation += 5;
            glare.style.transform = `rotate(${rotation}deg)`;
        }, 50);
    }

    function stopRotation() {
        clearInterval(rotationInterval);
    }

    function stopRotationSlowly() {
        clearInterval(rotationInterval);
        const decelerationInterval = setInterval(() => {
            if (rotation % 360 === 0) {
                clearInterval(decelerationInterval);
            } else {
                rotation += 1;
                glare.style.transform = `rotate(${rotation}deg)`;
            }
        }, 50);
    }
});