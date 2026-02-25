
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Change icon between menu and x if available
        const icon = mobileMenuBtn.querySelector('i');
        if (icon && icon.dataset.lucide === 'menu') {
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                if (window.lucide) window.lucide.createIcons();
            }
        }
    });
});

// Fix for Lucide icons not loading correctly sometimes
window.addEventListener('load', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
