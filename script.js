/* ==========================================================================
   Жетісу облысы · Қаратал ауданы · №13 орта мектебі жанындағы интернатымен
   2025–2030 жылдарға арналған дамыту бағдарламасы — Интерактивті логика және фотолар
   ========================================================================== */
const EMBEDDED_IMAGES = {"image1": "images/image1.png", "image10": "images/image10.jpeg", "image11": "images/image11.jpeg", "image12": "images/image12.jpeg", "image13": "images/image13.jpeg", "image14": "images/image14.jpeg", "image15": "images/image15.png", "image16": "images/image16.jpeg", "image17": "images/image17.png", "image18": "images/image18.jpeg", "image19": "images/image19.jpeg", "image2": "images/image2.png", "image20": "images/image20.jpeg", "image21": "images/image21.jpeg", "image22": "images/image22.jpeg", "image23": "images/image23.jpeg", "image24": "images/image24.jpeg", "image25": "images/image25.jpeg", "image26": "images/image26.jpeg", "image27": "images/image27.png", "image28": "images/image28.jpeg", "image29": "images/image29.jpeg", "image3": "images/image3.png", "image30": "images/image30.jpeg", "image31": "images/image31.jpeg", "image32": "images/image32.jpeg", "image33": "images/image33.jpeg", "image34": "images/image34.jpeg", "image35": "images/image35.jpeg", "image36": "images/image36.jpeg", "image37": "images/image37.jpeg", "image38": "images/image38.png", "image39": "images/image39.jpeg", "image4": "images/image4.png", "image40": "images/image40.jpeg", "image41": "images/image41.jpeg", "image42": "images/image42.jpeg", "image43": "images/image43.jpeg", "image44": "images/image44.jpeg", "image45": "images/image45.jpeg", "image46": "images/image46.jpeg", "image47": "images/image47.jpeg", "image48": "images/image48.jpeg", "image49": "images/image49.jpeg", "image5": "images/image5.png", "image50": "images/image50.jpeg", "image51": "images/image51.jpeg", "image52": "images/image52.jpeg", "image53": "images/image53.png", "image6": "images/image6.png", "image7": "images/image7.png", "image8": "images/image8.png", "image9": "images/image9.png"};

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === tabId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openLightbox(imgKey, captionText) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-caption');
  if (!EMBEDDED_IMAGES[imgKey]) return;
  lbImg.src = EMBEDDED_IMAGES[imgKey];
  lbCap.textContent = captionText || '';
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  // Populate all images from EMBEDDED_IMAGES
  document.querySelectorAll('img[data-img]').forEach(img => {
    const key = img.dataset.img;
    if (EMBEDDED_IMAGES[key]) {
      img.src = EMBEDDED_IMAGES[key];
    }
  });

  // Tab navigation listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Direction card shortcuts on Home tab
  document.querySelectorAll('.dir-card[data-goto]').forEach(card => {
    card.addEventListener('click', () => switchTab(card.dataset.goto));
  });

  // Lightbox click triggers
  document.querySelectorAll('[data-zoom]').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(el.dataset.zoom, el.dataset.caption || '');
    });
  });

  // Close lightbox on backdrop click or Escape key
  const lb = document.getElementById('lightbox');
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
