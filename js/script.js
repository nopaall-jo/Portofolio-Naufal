/**
 * NAUFAL RAFIF — PERSONAL DEVELOPER PORTFOLIO
 * Vanilla JavaScript (Zero External Libraries, Zero Build Tools)
 */

document.addEventListener('DOMContentLoaded', () => {
  initWelcomeScreen();
  initDynamicDate();
  initMobileNav();
  initScrollSpy();
  initProjectModal();
  initEmailCopy();
});

/* --------------------------------------------------------------------------
   1. Welcome Loading Screen Experience
   -------------------------------------------------------------------------- */
function initWelcomeScreen() {
  const loader = document.getElementById('welcomeScreen');
  const progressFill = document.getElementById('welcomeProgressFill');
  const progressText = document.getElementById('welcomeProgressText');

  if (!loader || !progressFill || !progressText) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    loader.style.display = 'none';
    return;
  }

  // Smooth progress increment from 0% to 100%
  let currentProgress = 0;
  const targetDuration = 900; // ms
  const intervalTime = 20;
  const step = 100 / (targetDuration / intervalTime);

  const progressInterval = setInterval(() => {
    currentProgress += step;
    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(progressInterval);
      
      // Update DOM
      progressFill.style.width = '100%';
      progressText.textContent = '100%';

      // Dismiss loader with a slight delay for smooth reveal
      setTimeout(() => {
        dismissLoader();
      }, 250);
    } else {
      const displayVal = Math.floor(currentProgress);
      progressFill.style.width = displayVal + '%';
      progressText.textContent = displayVal + '%';
    }
  }, intervalTime);

  function dismissLoader() {
    loader.classList.add('hide');
    document.body.style.overflow = '';
  }

  // Fallback safety timeout: loader will always dismiss within 1.6s
  setTimeout(() => {
    if (!loader.classList.contains('hide')) {
      clearInterval(progressInterval);
      dismissLoader();
    }
  }, 1600);
}

/* --------------------------------------------------------------------------
   2. Dynamic Date Display in Bottom Info Bar
   -------------------------------------------------------------------------- */
function initDynamicDate() {
  const dateElement = document.getElementById('currentDateDisplay');
  if (!dateElement) return;

  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-GB', options).toUpperCase();
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const menuIcon = document.getElementById('menuToggleIcon');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
    } else {
      drawer.classList.add('open');
      if (menuIcon) menuIcon.className = 'fa-solid fa-xmark';
    }
  });

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
    });
  });
}

/* --------------------------------------------------------------------------
   3b. Scroll Spy — Highlight active nav link based on current section
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id="hero"]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function setActive(id) {
    // Desktop
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    // Mobile
    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   4. Project Details Modal (Pop-up Architecture)
   -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  wsvisual: {
    title: "WSVisualJKT",
    subtitle: "Creative Agency Company Profile — Photo, Video, Trip & Drone",
    year: "2026",
    category: "Web Development (PHP)",
    image: "assets/wsvisual.jpg",
    description: "A professional company profile website for WSVisualJKT, a creative visual agency providing commercial photography, cinematic videography, tour documentation, and high-resolution aerial drone services.",
    features: [
      "Responsive visual showcase featuring dynamic video reels and curated photo galleries.",
      "Direct WhatsApp-integrated service reservation and inquiry form.",
      "SEO-friendly semantic structure optimized for regional search visibility."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
  },
  minatbakat: {
    title: "Talent & Career Expert System",
    subtitle: "Certainty Factor (CF) Method for Potential Discovery",
    year: "2026",
    category: "Expert System (Artificial Intelligence)",
    image: "assets/expert_system.jpg",
    description: "An intelligent expert system replicating psychological counseling knowledge to identify individual interests and talents by handling user response uncertainty.",
    features: [
      "Calculation of Measure of Belief (MB) and Measure of Disbelief (MD).",
      "Parallel multi-rule expert inference to compute confidence percentages.",
      "Targeted study program and career path recommendations."
    ],
    tech: ["PHP", "MySQL", "Certainty Factor", "Forward Chaining"]
  },
  spkbazar: {
    title: "Bazaar Event Selection DSS",
    subtitle: "Analytical Hierarchy Process (AHP) Method",
    year: "2025",
    category: "Decision Support System (Java Desktop)",
    image: "assets/expert_system.jpg",
    description: "A structured multi-criteria decision support system built to assist event committees in evaluating vendor applicants and booth locations objectively and mathematically.",
    features: [
      "Construction of Saaty 1–9 pairwise comparison matrices.",
      "Eigenvector computation and Consistency Ratio validation (CR <= 0.10).",
      "Relational MySQL database storage with automated report generation via iReport."
    ],
    tech: ["Java", "NetBeans IDE", "MySQL", "AHP Algorithm", "iReport"]
  },
  apriori: {
    title: "Sales Transaction Mining System",
    subtitle: "Market Basket Analysis with Apriori Algorithm",
    year: "2025",
    category: "Data Mining / Business Analytics",
    image: "assets/super_cellular.jpg",
    description: "A business analytics data mining system that processes retail transaction history to uncover associative purchasing patterns and items frequently bought together.",
    features: [
      "Frequent Itemset extraction based on configurable Minimum Support thresholds.",
      "Association Rule formation evaluated with Minimum Confidence metrics.",
      "Actionable product layout recommendations and promotional bundling strategies."
    ],
    tech: ["PHP", "MySQL", "Apriori Algorithm", "HTML5", "CSS3"]
  },
  ikannila: {
    title: "Tilapia Disease Diagnostic System",
    subtitle: "Java Desktop Expert System with Certainty Factor",
    year: "2025",
    category: "Expert System (Java Desktop)",
    video: "motow.mp4",
    description: "An integrated desktop application designed to help fish farmers quickly and accurately diagnose tilapia diseases based on clinical physical, fin, and water symptoms.",
    features: [
      "Rule-based inference engine combining CF and Forward Chaining logic.",
      "NetBeans graphical user interface for streamlined symptom input.",
      "Medication guidelines, treatment recipes, and infection prevention instructions."
    ],
    tech: ["Java (Swing/OOP)", "MySQL", "Certainty Factor", "NetBeans"]
  },
  supercellular: {
    title: "Super Cellular",
    subtitle: "POS & Mobile Inventory Management Application",
    year: "2025",
    category: "Point of Sale & Inventory (Java Desktop)",
    image: "assets/super_cellular.jpg",
    description: "An integrated Point of Sale (POS) and inventory control system for cellular service counters, top-up vouchers, and smartphone accessories with automatic ledger recap.",
    features: [
      "Rapid checkout transaction module with instant thermal receipt printing.",
      "Real-time inventory management with automated low-stock warnings.",
      "Periodic sales recap, net profit margin calculation, and printable reporting."
    ],
    tech: ["Java OOP", "MySQL", "NetBeans", "JasperReports"]
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!modal || !modalBody) return;

  window.openProjectModal = function(key) {
    const data = PROJECT_DETAILS[key];
    if (!data) return;

    let mediaHtml = '';
    if (data.video) {
      mediaHtml = `
        <div style="width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; border: var(--border-width) solid var(--border-color); background: var(--bg-muted);">
          <video autoplay loop muted playsinline controls style="width: 100%; height: 100%; object-fit: cover;">
            <source src="${data.video}" type="video/mp4">
          </video>
        </div>
      `;
    } else if (data.image) {
      mediaHtml = `
        <div style="width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; border: var(--border-width) solid var(--border-color); background: var(--bg-muted);">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      `;
    }

    const featuresHtml = data.features.map(f => `
      <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.88rem; color: #404040; margin-bottom: 6px;">
        <i class="fa-solid fa-check" style="margin-top: 4px; font-size: 0.75rem;"></i>
        <span>${f}</span>
      </li>
    `).join('');

    const techBadges = data.tech.map(t => `<span class="pill-badge" style="font-size: 0.68rem; padding: 3px 10px;">${t}</span>`).join(' ');

    modalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span class="pill-badge" style="font-size: 0.68rem; padding: 3px 10px;">${data.category}</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${data.year}</span>
        </div>
        <h3 style="font-size: 1.6rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.03em;">${data.title}</h3>
        <p style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-top: 2px;">${data.subtitle}</p>
      </div>

      ${mediaHtml}

      <div style="display: flex; flex-direction: column; gap: 16px; text-align: left;">
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 4px;">Project Overview</h4>
          <p style="font-size: 0.9rem; color: #333333; line-height: 1.6;">${data.description}</p>
        </div>

        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 8px;">Key Features</h4>
          <ul style="list-style: none;">
            ${featuresHtml}
          </ul>
        </div>

        <div style="padding-top: 14px; border-top: 1px solid var(--border-light);">
          <h4 style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 8px;">Technologies</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${techBadges}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const video = modal.querySelector('video');
    if (video) video.pause();
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Copy Email Action with Toast
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  window.copyEmail = function() {
    const email = 'naufal.rafif.2004@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email (' + email + ') copied to clipboard!');
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
    showToast('Email (' + text + ') copied to clipboard!');
  }

  function showToast(message) {
    const toast = document.getElementById('appToast');
    const toastText = document.getElementById('toastText');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}
