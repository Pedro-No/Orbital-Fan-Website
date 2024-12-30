// Load image every 20 seconds
function Start() {
    const currentDate = new Date();
    const url = `https://www.orbital.pt/imagem.php?${currentDate.getTime()}`;
    document.images["refresh"].src = url;
    setTimeout(Start, 20000);
}
Start();