let isWhite = true;
let isMirrored = false;

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

function changeImageOverTime() {
    setInterval(() => {
        isWhite = !isWhite;
        if (!isWhite) {
            isMirrored = !isMirrored;
        }

        const color = isWhite ? `drop-shadow(0 0 10px ${getRandomRGBColor()})` : 'drop-shadow(0 0 10px hsl(0, 0%, 0%))';
        const transform = isMirrored ? 'scaleX(-1)' : 'scaleX(1)';

        document.getElementById('CrowdTop').style.filter = color;
        document.getElementById('CrowdMid').style.filter = color;
        document.getElementById('CrowdBot').style.filter = color;
        document.getElementById('Stage').style.filter = color;
        document.getElementById('Table').style.filter = color;

        document.getElementById('CrowdTop').style.transform = transform;
        document.getElementById('CrowdMid').style.transform = transform;
        document.getElementById('CrowdBot').style.transform = transform;

        // Random shaking effect
        const elements = ['CrowdTop', 'CrowdMid', 'CrowdBot'];
        elements.forEach(id => {
            const element = document.getElementById(id);
            const randomX = (Math.random() - 0.5) * 3;
            const randomY = (Math.random() - 0.5) * 1.5;
            element.style.transform += ` translate(${randomX}%, ${randomY}%)`;
        });
    }, 200);
};

changeImageOverTime();