let score = 0;
let gameInterval;
const maxHearts = 10; // Giới hạn số lượng trái tim
let currentHearts = 0;

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    score = 0;
    currentHearts = 0;
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('message').style.display = 'none'; // Ẩn thông báo khi bắt đầu trò chơi
    gameInterval = setInterval(createFallingHeart, 1000);
}

function createFallingHeart() {
    if (currentHearts >= maxHearts) return; // Không tạo thêm trái tim nếu đã đạt giới hạn

    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * (document.getElementById('game-area').clientWidth - 50) + 'px'; // Giới hạn vị trí trái tim
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2s and 5s
    heart.addEventListener('click', function () {
        heart.remove();
        currentHearts--;
        score++;
        document.getElementById('score').innerText = 'Score: ' + score;
        if (score >= 10) {
            document.getElementById('message').style.display = 'block'; // Hiển thị thông báo khi đạt 10 điểm
        }
    });
    document.getElementById('game-area').appendChild(heart);
    currentHearts++;

    // Remove heart after animation ends
    heart.addEventListener('animationend', function () {
        heart.remove();
        currentHearts--;
    });
}