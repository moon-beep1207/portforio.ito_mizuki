const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const size = slides[0].clientWidth; // 画像の横幅を取得

// 次へボタンの処理
nextBtn.addEventListener('click', () => {
  if (counter >= slides.length - 1) return; // 最後の画像なら停止
  counter++;
  wrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// 前へボタンの処理
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return; // 最初の画像なら停止
  counter--;
  wrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';
});