// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Tampilkan pesan sukses secara simulasi
            if (formStatus) {
                formStatus.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }
        });
    }
});