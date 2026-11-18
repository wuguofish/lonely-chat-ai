// 兩頁共用的小行為：頁首往下捲就縮小、頁尾的年份。

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 50);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

document.getElementById('copyright-year').textContent = new Date().getFullYear();
