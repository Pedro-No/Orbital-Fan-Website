import AudioMotionAnalyzer from './audiomotion-analyzer.js';

const audioEl = document.getElementById('audio');

const audioMotion = new AudioMotionAnalyzer(document.getElementById('container'), {
  source: audioEl,
  height: window.innerHeight - 50,
  // you can set other options below - check the docs!
  mode: 3,
  barSpace: .6,
  ledBars: true,
});

document.getElementById('live').addEventListener('click', () => {
  audioEl.src = 'https://ec2.yesstreaming.net:3025/stream';
  audioEl.play();
});

// Update the height of the audio analyzer on window resize
window.addEventListener('resize', () => {
  audioMotion.setOptions({ height: window.innerHeight - 50 });
});