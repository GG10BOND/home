// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 视差效果
  const cyberGrid = document.querySelector('.cyber-grid');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    cyberGrid.style.backgroundPosition = `0px ${-scrollY * 0.5}px`;
  });

  // 导航栏高亮
  const sections = document.querySelectorAll('.cyber-section');
  const navLinks = document.querySelectorAll('.neon-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // 文字闪烁效果
  const neonTexts = document.querySelectorAll('.neon-text');
  setInterval(() => {
    neonTexts.forEach(text => {
      text.style.textShadow = `
        0 0 5px var(--neon-blue),
        0 0 10px var(--neon-blue),
        0 0 20px var(--neon-blue),
        0 0 40px var(--neon-blue),
        0 0 80px var(--neon-blue)`;
      setTimeout(() => {
        text.style.textShadow = `
          0 0 5px var(--neon-blue),
          0 0 10px var(--neon-blue),
          0 0 20px var(--neon-blue)`;
      }, 200);
    });
  }, 3000);
});
