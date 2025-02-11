// Smooth toggle for navbar
const navToggle = document.getElementById('nav-toggle');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-items a');

navToggle.addEventListener('change', () => {
    if (navToggle.checked) {
        navItems.classList.add('show');
    } else {
        navItems.classList.remove('show');
    }
});

// Smooth scrolling for navbar links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Change name color on click
function handleNameClick(element) {
    element.style.color = element.style.color === 'white' ? '#333' : 'white';
    element.style.border
}

function toggleCard(button) {
    const card = button.closest('.skill-card');
    card.classList.toggle('open');
}

// Gallery
document.querySelectorAll('.gallery').forEach(gallery => {
    const slider = gallery.querySelector('.slider');
    const images = gallery.querySelectorAll('.slider img');
    const prevBtn = gallery.querySelector('.prev');
    const nextBtn = gallery.querySelector('.next');
    let currentIndex = 0;
    
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 350}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSliderPosition();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSliderPosition();
    });
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            document.getElementById('fullscreen-img').src = img.src;
            document.getElementById('fullscreen').classList.add('active');
        });
    });
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('fullscreen').classList.remove('active');
});

// Animasi ScrollReveal
document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        duration: 2000,   // Durasi animasi
        origin: 'bottom', // Muncul dari bawah
        distance: '50px', // Jarak muncul
        delay: 200,
        reset: true       // Delay animasi
    });

    // sr.reveal('.home, .about, .skills, .contact, .footer');
    sr.reveal('.profile-photo', { origin: 'bottom' });
    sr.reveal('.about-text, .left-section, .social-icons', { origin: 'left' });
    sr.reveal('.home-text, .right-section, .about-img', { origin: 'right' });
    sr.reveal('.gallery, .skill-card', { interval: '100' });
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

// Fungsi untuk mengirim email
const sendEmail = (e) => {
    e.preventDefault(); // Mencegah halaman reload

    // Kirim email dengan EmailJS
    emailjs.sendForm('service_spx7osj', 'template_55e3888', '#contact-form', 'YjmRd8qM6M78uZoY4')
        .then(() => {
            // Tampilkan pesan sukses
            contactMessage.textContent = 'Message sent successfully ✅';
            contactMessage.style.color = 'green';
            // contactMessage.style.font-weight = 'bold';

            // Hapus pesan setelah 5 detik
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Reset form setelah submit
            contactForm.reset();
        })
        .catch(() => {
            // Tampilkan pesan error
            contactMessage.textContent = 'Message not sent (service error) ❌';
            contactMessage.style.color = 'red';
        });
};

// Event listener untuk submit form
    contactForm.addEventListener('submit', sendEmail);

// scrollUp
    const scrollUp = document.getElementById("scrollUp");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollUp.classList.add("show");
                scrollUp.classList.remove("hide");
            } else {
                scrollUp.classList.add("hide");
                setTimeout(() => scrollUp.classList.remove("show"), 300);
            }
        });
        scrollUp.addEventListener("click", () => {
            window.scrollTo({ top: 600, behavior: "smooth" });
    });
