// Ambil semua link di navbar dan semua section
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// Fungsi untuk mengaktifkan navigasi & halaman
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // 1. Matikan semua section (Hapus class active)
        sections.forEach(sec => {
            sec.classList.remove('active');
            
            // TRIK ANIMASI: Paksa browser "lupa" animasi sebentar (Reflow)
            // Ini agar animasi bisa main ulang saat diklik lagi
            void sec.offsetWidth; 
        });

        navLinks.forEach(nav => nav.classList.remove('active'));

        // 2. Aktifkan section tujuan
        targetSection.classList.add('active');
        this.classList.add('active');

        // Tutup menu mobile jika ada
        const navMenu = document.querySelector('.nav-links');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Fitur Hamburger Menu (Tetap dipertahankan)
const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});

// Fitur Form Contact (Simulasi)
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert(`Terima kasih! Pesanmu sudah terkirim.`);
        this.reset();
    });
}