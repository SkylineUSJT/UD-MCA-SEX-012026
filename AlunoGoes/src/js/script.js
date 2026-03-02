const btn = document.getElementById('btn-dark-mode');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
