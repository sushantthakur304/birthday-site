/**
 * ====================================================================
 * 📸 OUR MEMORY GALLERY & EASY PHOTO MANAGER
 * ====================================================================
 * Features:
 * - Filterable categories (School, Us, Bike Rides, College, Funny, Random, Special)
 * - Beautiful storybook Polaroid styling
 * - Fullscreen Lightbox viewer with captions
 * - Simple interactive in-browser Photo Uploader so Mishtyy can
 *   upload photos directly from his phone/PC without touching any code!
 * - Persists custom photos in browser storage (localStorage)
 */

class MemoryGallery {
    constructor() {
        this.categoriesContainer = document.getElementById('galleryCategories');
        this.gridContainer = document.getElementById('galleryGrid');
        this.lightbox = document.getElementById('photoLightbox');
        this.lightboxImg = document.getElementById('lightboxImg');
        this.lightboxCaption = document.getElementById('lightboxCaption');
        this.lightboxTag = document.getElementById('lightboxTag');
        this.lightboxDate = document.getElementById('lightboxDate');

        // Load custom photos from localStorage if saved
        this.photos = this.loadSavedPhotos();
        this.activeCategory = 'all';
        this.currentIndex = 0;

        this.init();
    }

    loadSavedPhotos() {
        try {
            const saved = localStorage.getItem('toji_mishtyy_photos');
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error("Could not load photos from localStorage", e);
        }
        return [...window.loveStory.photos];
    }

    savePhotos(photosList) {
        try {
            localStorage.setItem('toji_mishtyy_photos', JSON.stringify(photosList));
        } catch (e) {
            console.error("Could not save photos to localStorage", e);
        }
    }

    init() {
        this.renderCategories();
        this.renderPhotos();
        this.setupLightbox();
        this.setupPhotoManagerModal();
    }

    renderCategories() {
        if (!this.categoriesContainer) return;
        this.categoriesContainer.innerHTML = '';

        window.loveStory.galleryCategories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `gallery-cat-btn ${cat.id === this.activeCategory ? 'active' : ''}`;
            btn.textContent = cat.label;
            btn.dataset.category = cat.id;

            btn.addEventListener('click', () => {
                this.activeCategory = cat.id;
                document.querySelectorAll('.gallery-cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderPhotos();
            });

            this.categoriesContainer.appendChild(btn);
        });
    }

    // Helper: generate cute storybook illustrated placeholder graphic for photo card
    getPlaceholderSvg(photo) {
        // Pastel gradients & cute iconography per category
        const themes = {
            school: { bg: 'linear-gradient(135deg, #ffd1dc, #fcd5ce)', icon: '🌸', text: 'Beautiful Memories' },
            us: { bg: 'linear-gradient(135deg, #ffb3c1, #ff85a1)', icon: '❤️', text: 'Us Together' },
            bikerides: { bg: 'linear-gradient(135deg, #fde2e4, #c5dedd)', icon: '🏍️', text: 'Bike Rides' },
            college: { bg: 'linear-gradient(135deg, #e2ece9, #dfccf1)', icon: '🎓', text: 'College Days' },
            funny: { bg: 'linear-gradient(135deg, #fff1e6, #ffd1dc)', icon: '😂', text: 'Silly & Cute' },
            random: { bg: 'linear-gradient(135deg, #f0efeb, #ffccd5)', icon: '🌸', text: 'Sweet Moments' },
            special: { bg: 'linear-gradient(135deg, #ffe5ec, #ffb3c1)', icon: '🎂', text: 'Birthday Memories' }
        };
        const theme = themes[photo.category] || themes.us;

        return `
        <div class="photo-placeholder-box" style="background: ${theme.bg};">
            <div class="placeholder-content">
                <span class="placeholder-icon">${theme.icon}</span>
                <span class="placeholder-category">${theme.text}</span>
                <span class="placeholder-hint">Mishtyy & Toji 🩷</span>
            </div>
        </div>
        `;
    }

    renderPhotos() {
        if (!this.gridContainer) return;
        this.gridContainer.innerHTML = '';

        const filtered = this.activeCategory === 'all' ? 
            this.photos : 
            this.photos.filter(p => p.category === this.activeCategory);

        filtered.forEach((photo, idx) => {
            const card = document.createElement('div');
            card.className = 'photo-polaroid-card';
            card.dataset.id = photo.id;

            // Check if photo image exists or is placeholder
            const isDataUrlOrCustom = photo.image.startsWith('data:') || photo.image.startsWith('blob:');
            const imgContent = isDataUrlOrCustom ? 
                `<img class="polaroid-img" src="${photo.image}" alt="${photo.title}" loading="lazy"/>` :
                `
                <img class="polaroid-img" src="${photo.image}" alt="${photo.title}" loading="lazy" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                <div class="polaroid-fallback" style="display:none;">${this.getPlaceholderSvg(photo)}</div>
                `;

            card.innerHTML = `
                <div class="polaroid-tape"></div>
                <div class="polaroid-frame">
                    <div class="polaroid-media">
                        ${imgContent}
                        <div class="polaroid-hover-badge"><span>View 🔍</span></div>
                    </div>
                    <div class="polaroid-caption-area">
                        <span class="polaroid-tag">${photo.tag}</span>
                        <h4 class="polaroid-title">${photo.title}</h4>
                        <p class="polaroid-caption">${photo.caption}</p>
                        ${photo.date ? `<span class="polaroid-date">${photo.date}</span>` : ''}
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                this.openLightbox(photo);
            });

            this.gridContainer.appendChild(card);
        });
    }

    setupLightbox() {
        if (!this.lightbox) return;

        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.closeLightbox();
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateLightbox(-1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateLightbox(1);
            });
        }

        // Keyboard arrow navigation
        window.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
            if (e.key === 'ArrowRight') this.navigateLightbox(1);
        });
    }

    openLightbox(photo) {
        this.currentIndex = this.photos.findIndex(p => p.id === photo.id);
        if (this.currentIndex === -1) this.currentIndex = 0;
        this.updateLightboxContent();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    navigateLightbox(step) {
        this.currentIndex = (this.currentIndex + step + this.photos.length) % this.photos.length;
        this.updateLightboxContent();
    }

    updateLightboxContent() {
        const photo = this.photos[this.currentIndex];
        if (!photo) return;

        this.lightboxImg.src = photo.image;
        this.lightboxImg.onerror = () => {
            // If image fails, replace with placeholder svg
            this.lightboxImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
                    <rect width="600" height="400" fill="#ffd1dc"/>
                    <text x="300" y="180" font-family="'Nunito', sans-serif" font-size="28" font-weight="bold" fill="#ff4d6d" text-anchor="middle">🌸 ${photo.title} 🌸</text>
                    <text x="300" y="220" font-family="'Nunito', sans-serif" font-size="18" fill="#4a4e69" text-anchor="middle">${photo.caption}</text>
                    <text x="300" y="260" font-family="'Nunito', sans-serif" font-size="14" fill="#6c757d" text-anchor="middle">Place your photo in ${photo.image} or click Upload Photos!</text>
                </svg>
            `);
        };

        if (this.lightboxCaption) this.lightboxCaption.textContent = photo.caption;
        if (this.lightboxTag) this.lightboxTag.textContent = photo.tag;
        if (this.lightboxDate) this.lightboxDate.textContent = photo.date;
    }

    // Modal for easy photo upload without coding!
    setupPhotoManagerModal() {
        const openBtn = document.getElementById('openPhotoUploaderBtn');
        const modal = document.getElementById('photoManagerModal');
        const closeBtn = document.getElementById('closePhotoManagerBtn');
        const form = document.getElementById('photoUploadForm');
        const targetSelect = document.getElementById('photoTargetSelect');
        const fileInput = document.getElementById('photoFileInput');
        const captionInput = document.getElementById('photoCaptionInput');
        const titleInput = document.getElementById('photoTitleInput');
        const previewContainer = document.getElementById('photoUploadPreview');
        const resetBtn = document.getElementById('resetPhotosBtn');

        if (!openBtn || !modal) return;

        openBtn.addEventListener('click', () => {
            // Populate select options
            if (targetSelect) {
                targetSelect.innerHTML = '';
                this.photos.forEach(p => {
                    const opt = document.createElement('option');
                    opt.value = p.id;
                    opt.textContent = `${p.tag} — ${p.title}`;
                    targetSelect.appendChild(opt);
                });
            }
            modal.classList.add('active');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });

        // Live preview of chosen image
        let uploadedBase64 = null;
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    uploadedBase64 = event.target.result;
                    if (previewContainer) {
                        previewContainer.innerHTML = `<img src="${uploadedBase64}" alt="Preview" style="max-height:160px; border-radius:12px;"/>`;
                    }
                };
                reader.readAsDataURL(file);
            });
        }

        // Form submit to update photo
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const selectedId = parseInt(targetSelect.value);
                const targetPhoto = this.photos.find(p => p.id === selectedId);

                if (!targetPhoto) return;

                if (uploadedBase64) {
                    targetPhoto.image = uploadedBase64;
                }
                if (titleInput && titleInput.value.trim()) {
                    targetPhoto.title = titleInput.value.trim();
                }
                if (captionInput && captionInput.value.trim()) {
                    targetPhoto.caption = captionInput.value.trim();
                }

                this.savePhotos(this.photos);
                this.renderPhotos();
                modal.classList.remove('active');
                alert("🩷 Photo updated successfully! It is now visible in Toji's gallery.");
            });
        }

        // Reset to initial photos
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm("Reset gallery back to initial storybook placeholders?")) {
                    localStorage.removeItem('toji_mishtyy_photos');
                    this.photos = [...window.loveStory.photos];
                    this.renderPhotos();
                    modal.classList.remove('active');
                }
            });
        }
    }
}

window.MemoryGallery = MemoryGallery;
