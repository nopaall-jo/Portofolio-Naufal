/**
 * Main Application Logic
 * Clean, lightweight, modular JavaScript without external framework dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initProjectFiltering();
  initModalHandlers();
  initEmailCopy();
});

/**
 * 1. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('navToggleBtn');
  const mobileNav = document.getElementById('mobileNav');
  const toggleIcon = document.getElementById('toggleIcon');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      mobileNav.classList.remove('open');
      toggleIcon.className = 'fa-solid fa-bars';
    } else {
      mobileNav.classList.add('open');
      toggleIcon.className = 'fa-solid fa-xmark';
    }
  });

  // Close drawer when link clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggleIcon.className = 'fa-solid fa-bars';
    });
  });
}

/**
 * 2. Project Category Filtering
 */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-filter');

      // Update button active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory.includes(selectedCategory)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 3. Modal Details Viewer
 */
function initModalHandlers() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!modalOverlay) return;

  // Global open modal helper
  window.openProjectModal = function(projectId) {
    if (typeof PROJECTS_DATA === 'undefined') return;
    const project = PROJECTS_DATA[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modalContent');
    if (!modalBody) return;

    // Build media element
    let mediaHtml = '';
    if (project.video) {
      mediaHtml = `
        <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; background: var(--color-bg-subtle); border: 1px solid var(--color-border);">
          <video autoplay loop muted playsinline controls style="width: 100%; height: 100%; object-fit: cover;">
            <source src="${project.video}" type="video/mp4">
          </video>
        </div>
      `;
    } else if (project.image) {
      mediaHtml = `
        <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; background: var(--color-bg-subtle); border: 1px solid var(--color-border);">
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      `;
    }

    // Build tech pills
    const techTags = project.techStack.map(t => `<span class="badge badge-brown" style="font-family: var(--font-mono); font-size: 0.76rem;">${t}</span>`).join(' ');

    // Build features list
    const featuresList = project.features.map(f => `
      <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.88rem; color: var(--color-text-secondary); margin-bottom: 8px;">
        <i class="fa-solid fa-check" style="color: var(--color-accent-sage-dark); margin-top: 4px; font-size: 0.8rem; flex-shrink: 0;"></i>
        <span>${f}</span>
      </li>
    `).join('');

    modalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span class="badge badge-sage">${project.categoryLabel}</span>
          <span class="badge badge-brown">${project.year}</span>
        </div>
        <h3 style="font-size: 1.4rem; color: var(--color-text-primary); margin-bottom: 4px;">${project.title}</h3>
        <p style="font-size: 0.9rem; font-weight: 600; color: var(--color-accent-terracotta);">${project.subtitle}</p>
      </div>

      ${mediaHtml}

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 0.85rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 8px; letter-spacing: 0.05em;">Deskripsi Proyek</h4>
        <p style="font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.7;">${project.description}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 0.85rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 10px; letter-spacing: 0.05em;">Fitur Utama &amp; Implementasi</h4>
        <ul style="list-style: none;">
          ${featuresList}
        </ul>
      </div>

      <div style="margin-bottom: 20px; padding: 14px 18px; background-color: var(--color-bg-subtle); border-radius: var(--radius-sm); border-left: 3px solid var(--color-accent-terracotta);">
        <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 4px;">Catatan Metodologi &amp; Arsitektur:</h4>
        <p style="font-size: 0.84rem; color: var(--color-text-secondary); line-height: 1.6;">${project.technicalHighlights}</p>
      </div>

      <div style="padding-top: 16px; border-top: 1px solid var(--color-border);">
        <h4 style="font-size: 0.85rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 10px; letter-spacing: 0.05em;">Teknologi Digunakan</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${techTags}
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close modal function
  window.closeProjectModal = function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    const video = modalOverlay.querySelector('video');
    if (video) video.pause();
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Backdrop click to close
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeProjectModal();
    }
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

/**
 * 4. Copy Email & Toast Notification
 */
function initEmailCopy() {
  window.copyEmailAddress = function() {
    const email = 'naufal.rafif.2004@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email (' + email + ') berhasil disalin!');
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  };

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Email (' + text + ') berhasil disalin!');
  }

  function showToast(message) {
    const toast = document.getElementById('appToast');
    const toastText = document.getElementById('toastText');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}
