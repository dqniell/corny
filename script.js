document.getElementById('yesBtn').addEventListener('click', () => {
    const audio = document.getElementById('audio');
    audio.play().then(() => {
    }).catch(error => {
        console.error('Audio playback error:', error);
    });
    window.location.href = 'yay.html';
});

const noButton = document.getElementById('noBtn');
const barry = document.getElementById('barry');

noButton.addEventListener('mouseover', () => {
    moveButton();
});

function moveButton() {
    const offset = 100;
    let randomX, randomY;
    const buttonRect = noButton.getBoundingClientRect();
    const imageRect = barry.getBoundingClientRect();

    do {
        randomX = Math.random() * (window.innerWidth - offset * 2) + offset;
        randomY = Math.random() * (window.innerHeight - offset * 2) + offset;
    } while (
        randomX >= imageRect.left - buttonRect.width &&
        randomX <= imageRect.right &&
        randomY >= imageRect.top - buttonRect.height &&
        randomY <= imageRect.bottom
    );

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
