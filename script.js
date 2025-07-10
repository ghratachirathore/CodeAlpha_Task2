const song1 = document.querySelector('.music');
const song2 = document.querySelector('.songtwo');
const audio1 = song1.querySelector('audio');
const audio2 = song2.querySelector('audio');
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');
const upnext = document.querySelector('.upnext');

let currentIndex = 0;
let playlist = true;

function showSong(index) {
  if (index === 0) {
    song1.style.display = 'flex';
    song2.style.display = 'none';
    audio2.pause();
    audio2.currentTime = 0;
    audio1.play();
  } else {
    song1.style.display = 'none';
    song2.style.display = 'grid';
    audio1.pause();
    audio1.currentTime = 0;
    audio2.play();
  }
  currentIndex = index;
}

next.forEach(icon => {
  icon.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % 2;
    showSong(nextIndex);
  });
});

prev.forEach(icon => {
  icon.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + 2) % 2;
    showSong(prevIndex);
  });
});

upnext.addEventListener('click', () => {
  if (playlist) {
    showSong(1);
  } else {
    showSong(0);
  }
});


