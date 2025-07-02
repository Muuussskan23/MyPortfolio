// Scroll buttons for project section
function scrollProjects(direction) {
    const container = document.querySelector('.wrapper.slider');
    const scrollAmount = 300;
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Toggle navbar for menu button
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar'); // ✅ FIXED

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Optional: close navbar when clicking outside it on small screens
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});
