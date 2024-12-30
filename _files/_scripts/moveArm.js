const spawn = {r:{ x: 1254, y: 1048 }, l:{ x: 370, y: 1048 }};
const armR = document.getElementById('ArmR');
const armL = document.getElementById('ArmL');

const resetArmPosition = (arm, side, pos = spawn) => {
    arm.style.transition = 'left 2s, top 2s';
    arm.style.position = 'absolute';
    arm.style.left = `${pos[side].x}px`;
    arm.style.top = `${pos[side].y}px`; 
};

const moveArm = (arm, x, y) => {
    arm.style.transition = '';
    arm.style.position = 'absolute';
    arm.style.left = `${x}px`;
    arm.style.top = `${y}px`;
};

document.addEventListener('mousemove', (event) => {

    const mouseX = event.clientX
    const mouseY = event.clientY

    // Right arm boundaries
    if (mouseY < 575 || mouseX < 980 || mouseX > 1720) {
        resetArmPosition(armR, 'r');
    } else 
    if ((mouseY > 575 && mouseX > 980 && mouseX < 1720)) {
        moveArm(armR, mouseX - 80, mouseY + 120);
    }

    // Left arm boundaries
    if (mouseY < 575 || mouseX < 235 || mouseX > 940) {
        resetArmPosition(armL, 'l');
    } else
    if ((mouseY > 575 && mouseX > 235 && mouseX < 940)) {
        moveArm(armL, mouseX - 230, mouseY + 120);
    }
});