// Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => observer.observe(r));

    // Animate skill bars on scroll
    const bars = document.querySelectorAll('.skill-fill');
    const barObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(b => barObserver.observe(b));