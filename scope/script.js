function loadAnimation(btn) {
    btn.innerHTML = 'Loading...';
    btn.classList.add('loading');
    setTimeout(() => {
        btn.innerHTML = 'Learn More';
        btn.classList.remove('loading');
    }, 2000);
}