function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('body-dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('body-dark-mode'));
}

// Al cargar la página, comprobar la preferencia almacenada
window.onload = () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('body-dark-mode');
    }
};