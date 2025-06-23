    const gallery = document.querySelector('.gallery-container');
    const btnLeft = document.querySelector('.gallery-btn.left');
    const btnRight = document.querySelector('.gallery-btn.right');

    btnLeft.addEventListener('click', () => {
        gallery.scrollBy({ left: -300, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        gallery.scrollBy({ left: 300, behavior: 'smooth' });
    });

    function updateGalleryLayout() {
        const isMobile = window.innerWidth < 600;

        if (isMobile) {
            btnLeft.style.position = 'static';
            btnLeft.style.transform = 'none';
            btnRight.style.position = 'static';
            btnRight.style.transform = 'none';
        } else {
            btnLeft.style.position = 'absolute';
            btnLeft.style.left = '0';
            btnLeft.style.top = '50%';
            btnLeft.style.transform = 'translateY(-50%)';

            btnRight.style.position = 'absolute';
            btnRight.style.right = '0';
            btnRight.style.top = '50%';
            btnRight.style.transform = 'translateY(-50%)';
        }
    }

    window.addEventListener('load', updateGalleryLayout);
    window.addEventListener('resize', updateGalleryLayout);

    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-btn");

    // Saat gambar diklik
    document.querySelectorAll('.gallery-container img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    // Saat klik tombol close
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Klik di luar gambar untuk keluar juga
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });