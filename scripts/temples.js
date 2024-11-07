document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
