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
    
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            document.getElementById('fullscreen-img').src = img.src;
            document.getElementById('fullscreen').classList.add('active');
            document.getElementById('fullscreen-img').setAttribute('data-index', index);
        });
    });
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('fullscreen').classList.remove('active');
});

document.addEventListener('keydown', (e) => {
    const fullscreen = document.getElementById('fullscreen');
    if (fullscreen.classList.contains('active')) {
        const fullscreenImg = document.getElementById('fullscreen-img');
        let currentIndex = parseInt(fullscreenImg.getAttribute('data-index'));
        let gallery = document.querySelectorAll('.gallery .slider img');
        
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % gallery.length;
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        }
        
        fullscreenImg.src = gallery[currentIndex].src;
        fullscreenImg.setAttribute('data-index', currentIndex);
    }
});

// Tambahkan tombol navigasi saat fullscreen
const fullscreenContainer = document.getElementById('fullscreen');
const fullscreenPrev = document.createElement('button');
fullscreenPrev.innerHTML = '&#10094;';
fullscreenPrev.classList.add('fullscreen-prev');
fullscreenContainer.appendChild(fullscreenPrev);

const fullscreenNext = document.createElement('button');
fullscreenNext.innerHTML = '&#10095;';
fullscreenNext.classList.add('fullscreen-next');
fullscreenContainer.appendChild(fullscreenNext);

fullscreenPrev.style.position = 'absolute';
fullscreenPrev.style.left = '20px';
fullscreenPrev.style.top = '50%';
fullscreenPrev.style.transform = 'translateY(-50%)';
fullscreenPrev.style.background = 'rgba(0, 0, 0, 0.5)';
fullscreenPrev.style.color = 'white';
fullscreenPrev.style.border = 'none';
fullscreenPrev.style.padding = '10px';
fullscreenPrev.style.cursor = 'pointer';
fullscreenPrev.style.zIndex = '10';
fullscreenPrev.style.fontSize = '24px';
fullscreenPrev.style.borderRadius = '5px';

fullscreenNext.style.position = 'absolute';
fullscreenNext.style.right = '20px';
fullscreenNext.style.top = '50%';
fullscreenNext.style.transform = 'translateY(-50%)';
fullscreenNext.style.background = 'rgba(0, 0, 0, 0.5)';
fullscreenNext.style.color = 'white';
fullscreenNext.style.border = 'none';
fullscreenNext.style.padding = '10px';
fullscreenNext.style.cursor = 'pointer';
fullscreenNext.style.zIndex = '10';
fullscreenNext.style.fontSize = '24px';
fullscreenNext.style.borderRadius = '5px';

fullscreenPrev.addEventListener('click', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
});

fullscreenNext.addEventListener('click', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
});
