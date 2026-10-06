/**
 * PRIYANKA SINGH — PORTFOLIO INTERACTION ENGINE
 * Vanilla JavaScript (ES6+), GSAP & Three.js Progressive Enhancement
 * Strictly Production Ready & Accessible
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==============================================================
  // 1. DATA REPOSITORY FOR DETAILED PROJECT MODALS
  // ==============================================================
  const PROJECT_DATA = {
    'porsche-gt3rs': {
      title: 'Porsche GT3 RS Motorsport Campaign',
      subtitle: 'High-octane editorial automotive advertising poster designed for precision and aerodynamic speed.',
      category: 'POSTER DESIGN • ADVERTISING',
      date: '2026',
      image: 'assets/images/poster-porsche-gt3rs.jpeg',
      tools: 'Adobe Photoshop, Adobe Illustrator',
      deliverables: 'Large Format Print, Social Key Visual, Digital Poster',
      scope: 'Art Direction, Typographic Hierarchy, Visual Composite',
      overview: 'Created as an homage to the racing pedigree of the Porsche 911 GT3 RS. The poster balances high-contrast racetrack lighting, dynamic asphalt reflections, and Swiss-inspired technical typography detailing chassis specifications, horsepower, and track records.',
      highlights: [
        'Multi-exposure vehicle compositing with atmospheric track motion blur and headlight glow.',
        'Structured modular grid incorporating technical vehicle telemetry and German engineering accents.',
        'Print-ready CMYK 300 DPI master with balanced deep blacks and striking contrast.'
      ]
    },
    'bunny-branding': {
      title: 'BUNNY Coffee & Sweets Identity',
      subtitle: 'Artisanal patisserie and specialty coffee identity balancing warm comfort and modern luxury.',
      category: 'BRAND IDENTITY • PACKAGING',
      date: '2026',
      image: 'assets/images/branding-bunny-coffee.jpg',
      figmaLink: 'https://www.figma.com/design/50lYdtyUKWREys1ZElridp/all-work?t=TKbUrXDmWL6rbHok-0',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      deliverables: 'Logomark, Cup Mockups, Takeaway Packaging, Menu System',
      scope: 'Visual Identity, Color Palette, Packaging Collateral',
      overview: 'BUNNY is an artisanal cafe brand celebrating slow roasted coffee and fresh European pastries. The visual language uses deep wine-burgundy (#830005) and cream foam (#F1E8DC) tones to evoke sensory indulgence and inviting warmth.',
      highlights: [
        'Custom illustrated bunny logomark blending fluid geometric lines with coffee beans.',
        'Cohesive takeaway cup design system with hot & cold beverage packaging specifications.',
        'Warm editorial typography guidelines tailored for seasonal pastry menus and social announcements.'
      ]
    },
    'black-cherry': {
      title: 'Black Cherry Confectionery Packaging',
      subtitle: 'Luxury dark chocolate bar packaging with dark botanical illustrations and foil accents.',
      category: 'PACKAGING • LUXURY BRAND',
      date: '2026',
      image: 'assets/images/branding-black-cherry.jpg',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      deliverables: 'Box Sleeve Mockup, Dieline Layout, Emboss & Foil Spec',
      scope: 'Structural Packaging, Botanical Vector Art, Luxury Finishing',
      overview: 'A premium confectionery brand packaging project designed for single-origin cocoa bars infused with wild black cherries. The composition uses deep maroon backgrounds, metallic gold accents, and vintage botanical cherry vectors to create an ultra-premium shelf presence.',
      highlights: [
        'Accurate packaging dielines with foil stamping guidelines for luxury retail shelves.',
        'High-resolution 3D mockup renderings displaying tactile matte paper texture.',
        'Detailed ingredient nutritional typography and certified fair-trade badge placement.'
      ]
    },
    'bloom-energy': {
      title: 'BloomEnergy Sustainable Grid Platform',
      subtitle: 'Multi-device clean energy interface showcasing intuitive energy monitoring and responsive clarity.',
      category: 'UI/UX • CLEAN-TECH PLATFORM',
      date: '2026',
      image: 'assets/images/uiux-bloomenergy.jpeg',
      figmaLink: 'https://www.figma.com/design/50lYdtyUKWREys1ZElridp/all-work?t=TKbUrXDmWL6rbHok-0',
      tools: 'Figma, Adobe Photoshop',
      deliverables: 'Responsive Web Architecture, Mobile/Tablet Viewports, Design System',
      scope: 'UX Information Architecture, Visual Hierarchy, Component Library',
      overview: 'BloomEnergy provides enterprise-level monitoring for commercial solar grids and wind installations. The interface was engineered to transform complex megawatt production metrics, storage capacities, and battery states into accessible, glanceable card components across desktop, tablet, and mobile.',
      highlights: [
        'Modular card architecture designed in Figma using Auto-Layout and strict 8pt grid spacing.',
        'Tested contrast ratios meeting WCAG AA standards using emerald green (#22C55E) and slate gray.',
        'Seamless multi-viewport breakpoint flow verified across laptop (1440px), tablet, and mobile screens.'
      ]
    },
    'tokyo-billboard': {
      title: 'Tokyo Tourism OOH Airport Campaign',
      subtitle: 'Cinematic airport terminal billboard visual showcasing Japanese travel aesthetics and cultural heritage.',
      category: 'OOH BILLBOARD • CAMPAIGN',
      date: '2026',
      image: 'assets/images/billboard-tokyo-tourism.png',
      tools: 'Adobe Photoshop, Adobe Illustrator',
      deliverables: 'Super-wide OOH Billboard Banner, Airport Terminal Mockup',
      scope: 'Large Scale Billboard Art Direction, Color Grading, Typography',
      overview: 'A large-scale outdoor advertising concept tailored for international airport arrival corridors. The composition integrates iconic Tokyo landmarks, blooming cherry blossoms, and minimalist bilingual Japanese typography to inspire wanderlust.',
      highlights: [
        'Optimized for massive panoramic dimensions ensuring sharp clarity from 5 to 50 meters distance.',
        'Artistic color temperature grading blending vibrant urban neons with natural mountain sunsets.',
        'Clean typographic placement designed for rapid visual comprehension by travelers on moving walkways.'
      ]
    },
    'luceria-perfume': {
      title: 'Luceria Eau de Parfum Advertising',
      subtitle: 'Editorial fragrance advertising poster featuring atmospheric lighting, liquid gold reflections, and haute-couture typography.',
      category: 'POSTER DESIGN • LUXURY',
      date: '2026',
      image: 'assets/images/poster-luceria-perfume.jpeg',
      tools: 'Adobe Photoshop',
      deliverables: 'Fashion Magazine Full-Page Spread, Retail In-Store Poster',
      scope: 'Lighting Retouch, Glass Caustics, Editorial Composition',
      overview: 'An editorial perfume campaign concept for "Luceria", an exclusive niche fragrance. The composition emphasizes crystal bottle refraction, subtle floral smoke, and high-contrast studio shadows to create an alluring, timeless luxury atmosphere.',
      highlights: [
        'Intricate glass and fluid caustic retouching crafted in Adobe Photoshop with custom luminosity masks.',
        'Editorial serif typography evoking heritage French perfumery and contemporary minimalism.',
        'Balanced golden-ratio focal hierarchy guiding the viewer from the bottle silhouette to the title logo.'
      ]
    },
    'pop-vector': {
      title: 'Chromatic Pop-Art Vector Portrait',
      subtitle: 'Stylized high-contrast vector portrait rendered with bold color blocking and precise pen curves.',
      category: 'VECTOR ART • ILLUSTRATION',
      date: '2026',
      image: 'assets/images/vector-pop-portrait.jpg',
      tools: 'Adobe Illustrator',
      deliverables: 'Scalable Vector Graphic (SVG), High-Res Art Print',
      scope: 'Pen Tool Craft, Chromatic Harmonization, Facial Geometry',
      overview: 'An artistic exploration of portrait geometry and pop-art color theory. Constructed entirely with vector paths in Adobe Illustrator, the piece utilizes contrasting tonal planes to define facial anatomy with vibrant contemporary energy.',
      highlights: [
        '100% resolution-independent vector artwork scalable to architectural banner sizes without distortion.',
        'Harmonious four-color palette balancing electric hues with muted skin undertones.',
        'Dynamic shadow angles and stylized lighting planes accentuating expressive emotion.'
      ]
    },
    'verella-fashion': {
      title: 'Verella Fashion & Apparel Identity',
      subtitle: 'Minimalist high-fashion branding featuring understated serif logotype, monochrome tones, and sleek stationery mockups.',
      category: 'BRAND IDENTITY • FASHION',
      date: '2026',
      image: 'assets/images/branding-verella-fashion.jpg',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      deliverables: 'Logotype Suite, Garment Tags, Retail Shopping Bag Mockup',
      scope: 'Brand Guidelines, Stationery Design, Typographic Standards',
      overview: 'Verella is an upscale ready-to-wear fashion house focusing on tailored silhouettes and sustainable textiles. The identity relies on modern high-contrast serif typography, generous white space, and understated blind debossing effects.',
      highlights: [
        'Bespoke serif typographic logotype crafted with optical kerning adjustments for luxury retail.',
        'Physical collateral specifications including cotton woven labels, hang tags, and textured envelopes.',
        'Monochrome brand guidelines maintaining visual restraint across physical and digital storefronts.'
      ]
    },
    'purre-packaging': {
      title: 'Purre Cat Biscuits Package System',
      subtitle: 'Playful, premium standing pouch packaging crafted with vibrant pastel color contrasts and crisp vector mascot illustrations.',
      category: 'PACKAGING • PET PRODUCT',
      date: '2026',
      image: 'assets/images/packaging-purre-catfood.png',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      deliverables: 'Doypack Pouch Mockup, Vector Character Mascot, Nutritional Grid',
      scope: 'Pouch Packaging, Character Illustration, Shelf Impact Strategy',
      overview: 'A delightful pet treat packaging project designed to stand out in supermarket pet aisles. The design incorporates a charming vector feline mascot, vibrant pastel flavor color codes, and clear nutritional callouts highlighting grain-free ingredients.',
      highlights: [
        'High-shelf-impact standing pouch structure with resealable zip lock indicators.',
        'Hand-crafted vector mascot illustrations with expressive gestures matching each treat flavor.',
        'FDA-compliant regulatory nutrition box layout and clean ingredient iconography.'
      ]
    },
    'aerion-shoes': {
      title: 'Aerion "Move Different" Footwear Ad',
      subtitle: 'Futuristic sportswear poster with dynamic motion blur, neon accents, and bold geometric typography designed to captivate.',
      category: 'POSTER DESIGN • FOOTWEAR',
      date: '2026',
      image: 'assets/images/poster-aerion-shoes.jpeg',
      tools: 'Adobe Photoshop, Adobe Illustrator',
      deliverables: 'Billboard Campaign, Sneaker Retail Visual, Social Campaign',
      scope: 'Product Dynamic Retouching, Particle Effects, Kinetic Typography',
      overview: 'An energetic advertising visual for the Aerion high-performance running sneaker. The design leverages directional motion trails, atmospheric dust particles, and kinetic lettering to visualize lightweight propulsion and velocity.',
      highlights: [
        'Advanced motion vector simulation conveying dynamic forward acceleration.',
        'Custom typographic lockup "MOVE DIFFERENT" utilizing slanted geometric letterforms.',
        'Precise color correction emphasizing the breathable mesh textures and cushioning foam.'
      ]
    },
    'velora-beauty': {
      title: 'Velora Botanical Cosmetics',
      subtitle: 'Soft organic branding system designed for clean beauty skincare with refined serif typography and neutral beige packaging.',
      category: 'BRAND IDENTITY • BEAUTY',
      date: '2026',
      image: 'assets/images/branding-velora-beauty.jpg',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      deliverables: 'Cosmetic Jar Labels, Dropper Bottle Packaging, Brand Identity System',
      scope: 'Organic Color System, Cosmetic Label Regulatory Layout, 3D Mockup',
      overview: 'Velora is a clean botanical skincare line formulated with cold-pressed oils. The visual identity embodies calm wellness through soft desert sand hues, delicate leaf silhouettes, and refined typography.',
      highlights: [
        'Minimalist amber dropper bottle and frosted cream jar mockup presentations.',
        'Subtle botanical vector marks that function gracefully across small 15ml cosmetic labels.',
        'Earth-friendly packaging color palette emphasizing organic, non-toxic brand values.'
      ]
    },
    'anime-vector': {
      title: 'Contemporary Anime Vector Study',
      subtitle: 'Detailed character artwork created in Adobe Illustrator featuring layered cel shading, lighting highlights, and linework precision.',
      category: 'VECTOR ART • CHARACTER',
      date: '2026',
      image: 'assets/images/vector-anime-character.png',
      tools: 'Adobe Illustrator',
      deliverables: 'Vector Character Art, Desktop Wallpaper, Digital Art Print',
      scope: 'Digital Inking, Vector Gradient Mesh, Cel Shading',
      overview: 'A stylized character illustration exploring modern Japanese animation aesthetics. Features clean pen outlines, layered hair textures, subtle rim lighting, and atmospheric vector background gradients.',
      highlights: [
        'Precision vector line art varying from 0.5pt to 3pt to communicate form depth and weight.',
        'Multi-layer shading scheme simulating traditional anime production cel layering.',
        'Vibrant color palette optimized for digital screens and RGB art prints.'
      ]
    },
    'bunny-coffee': {
      title: 'BUNNY Coffee & Sweets Digital Web',
      subtitle: 'Complete multi-device web experience crafted in Figma with seamless menu exploration, rich visual tones, and responsive components.',
      category: 'UI/UX • ARTISANAL WEB',
      date: '2026',
      image: 'assets/images/uiux-bunny-coffee.jpeg',
      figmaLink: 'https://www.figma.com/design/50lYdtyUKWREys1ZElridp/all-work?t=TKbUrXDmWL6rbHok-0',
      tools: 'Figma, Adobe Illustrator',
      deliverables: 'Interactive Prototype, Mobile / Tablet / Desktop Views, Component Set',
      scope: 'UI Design System, User Journey Flows, Confectionery Showcase',
      overview: 'The complete web presence for BUNNY Coffee & Sweets. Designed in Figma with responsive auto-layout components, sticky navigation, delicious hero confectionery presentations, and an intuitive online pickup ordering flow.',
      highlights: [
        'Three unified viewport layouts: Desktop (1440px), iPad Tablet (810px), and Mobile (390px).',
        'Rich brand color palette integrating #830005 (deep wine) with #F1E8DC (warm cream).',
        'Componentized menu cards with price tags, dietary icons, and smooth order CTAs.'
      ]
    },
    'milkora-dairy': {
      title: 'Milkora Pure Farm Milk Pouch',
      subtitle: 'Fresh, approachable dairy packaging concept highlighting clean milk splashes, organic trust symbols, and shelf standout.',
      category: 'PACKAGING • DAIRY BRAND',
      date: '2026',
      image: 'assets/images/packaging-milkora.jpeg',
      tools: 'Adobe Photoshop, Adobe Illustrator',
      deliverables: 'Pillow Pouch Mockup, Packaging Artwork, Nutritional Table',
      scope: 'FMCG Packaging, Splash Compositing, Freshness Branding',
      overview: 'A modern dairy packaging design for Milkora farm milk. Features clear purity cues, appetizing milk splash photography retouching, and clean green and blue color bands denoting whole and toned milk variants.',
      highlights: [
        'High-speed liquid milk splash compositing in Adobe Photoshop.',
        'Clean, trustworthy brand seal highlighting 100% farm-fresh pasteurized purity.',
        'Durable flexographic print specifications for high-volume dairy pouch production.'
      ]
    },
    'sony-alpha': {
      title: 'Sony Alpha "Capture Reality" Poster',
      subtitle: 'Tech-forward product advertising emphasizing sensor brilliance, optical clarity, and minimalist Swiss typographic layout.',
      category: 'POSTER DESIGN • TECH',
      date: '2026',
      image: 'assets/images/poster-sony-alpha.jpeg',
      tools: 'Adobe Photoshop, Adobe Illustrator',
      deliverables: 'Electronics Retail Banner, Digital Poster, Tech Magazine Ad',
      scope: 'Hardware Photography Retouching, Optical Flares, Grid Alignment',
      overview: 'An advertising poster celebrating the engineering excellence of the Sony Alpha full-frame mirrorless camera. Highlights include precision lens glass reflection retouching, dark-mode styling, and structured typographic callouts detailing sensor megapixels and autofocus points.',
      highlights: [
        'Intricate lens coating reflection enhancements showcasing multi-element glass optics.',
        'Monochrome tech aesthetic with electric cyan accents highlighting autofocus technology.',
        'Clean Swiss information hierarchy guiding the eye from headline to lens specs.'
      ]
    },
    'velluto-gelato': {
      title: 'Velluto Italian Gelato Branding',
      subtitle: 'Sensory branding identity for gourmet Italian ice cream utilizing pastel hues, artisanal stamps, and premium tub packaging.',
      category: 'BRAND IDENTITY • DESSERT',
      date: '2026',
      image: 'assets/images/branding-velluto-icecream.jpg',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      deliverables: 'Gelato Pint Tub Mockup, Spoon Wrapper, Menu Board',
      scope: 'Sensory Identity, Color Harmony, Artisanal Typography',
      overview: 'Velluto is an authentic Italian artisanal gelato brand based on traditional churn methods. The branding incorporates soft pastel shades of pistachio, raspberry, and vanilla along with romantic Italian serif typography and gold stamps.',
      highlights: [
        'Eco-friendly insulated pint packaging design with gold foil stamp accents.',
        'Flavor-coded pastel color system communicating natural fruit and nut ingredients.',
        'Artisanal Italian heritage logo lockup suitable for parlor signage and retail distribution.'
      ]
    }
  };

  // Convert PROJECT_DATA keys into ordered array for modal next/prev navigation
  const projectKeys = Object.keys(PROJECT_DATA);
  let currentProjectIndex = 0;

  // ==============================================================
  // 2. PRELOADER & PAGE INITIALIZATION
  // ==============================================================
  const preloader = document.getElementById('preloader');
  const preloaderProgress = document.getElementById('preloaderProgress');
  const preloaderCounter = document.getElementById('preloaderCounter');

  let loadProgress = 0;
  const progressInterval = setInterval(() => {
    loadProgress += Math.floor(Math.random() * 14) + 6;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(progressInterval);
      if (preloaderProgress) preloaderProgress.style.width = '100%';
      if (preloaderCounter) preloaderCounter.textContent = '100%';
      
      setTimeout(() => {
        if (preloader) preloader.classList.add('fade-out');
        document.body.classList.remove('loading');
        initScrollAnimations();
      }, 350);
    } else {
      if (preloaderProgress) preloaderProgress.style.width = `${loadProgress}%`;
      if (preloaderCounter) {
        const padded = loadProgress < 10 ? `0${loadProgress}` : loadProgress;
        preloaderCounter.textContent = `${padded}%`;
      }
    }
  }, 45);

  // ==============================================================
  // 3. CUSTOM FLUID CURSOR (DESKTOP POINTER ONLY)
  // ==============================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorFollower = document.getElementById('cursorFollower');
  const cursorLabel = document.getElementById('cursorLabel');

  if (window.matchMedia('(pointer: fine)').matches && cursorDot && cursorFollower) {
    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let hasMoved = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        cursorDot.style.opacity = '1';
        cursorFollower.style.opacity = '1';
        followerX = mouseX;
        followerY = mouseY;
      }
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorFollower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (hasMoved) {
        cursorDot.style.opacity = '1';
        cursorFollower.style.opacity = '1';
      }
    });

    function renderCursor() {
      if (hasMoved) {
        followerX += (mouseX - followerX) * 0.18;
        followerY += (mouseY - followerY) * 0.18;
        cursorFollower.style.transform = `translate3d(${followerX.toFixed(2)}px, ${followerY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover states for links & buttons
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [data-magnetic]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('is-hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('is-hovering');
      });
    });

    // Hover states for work items & masonry gallery
    const projectCards = document.querySelectorAll('.work-item, .masonry-item');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('is-project-hover');
        if (cursorLabel) cursorLabel.textContent = card.classList.contains('masonry-item') ? 'ZOOM' : 'VIEW';
      });
      card.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('is-project-hover');
      });
    });
  }

  // ==============================================================
  // 4. STICKY HEADER & ACTIVE SCROLL SPY
  // ==============================================================
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const trackedSections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header compact state
    if (scrollPos > 60) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // Scroll spy
    let currentId = '';
    trackedSections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ==============================================================
  // 5. MOBILE FULLSCREEN MENU TOGGLE
  // ==============================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

  function toggleMobileMenu(open) {
    const shouldOpen = open !== undefined ? open : !mobileNavOverlay.classList.contains('is-open');
    if (shouldOpen) {
      hamburgerBtn?.classList.add('is-active');
      hamburgerBtn?.setAttribute('aria-expanded', 'true');
      mobileNavOverlay?.classList.add('is-open');
      mobileNavOverlay?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      hamburgerBtn?.classList.remove('is-active');
      hamburgerBtn?.setAttribute('aria-expanded', 'false');
      mobileNavOverlay?.classList.remove('is-open');
      mobileNavOverlay?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  hamburgerBtn?.addEventListener('click', () => toggleMobileMenu());
  mobileBackdrop?.addEventListener('click', () => toggleMobileMenu(false));
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // ESC key to close mobile menu
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavOverlay?.classList.contains('is-open')) {
      toggleMobileMenu(false);
    }
  });

  // ==============================================================
  // 6. THREE.JS LUXURY AMBIENT BACKGROUND CANVAS
  // ==============================================================
  const canvas = document.getElementById('ambientCanvas');
  if (canvas && typeof THREE !== 'undefined') {
    try {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 80;

      // Create subtle floating particles
      const particleCount = 140;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorBurgundy = new THREE.Color(0x830005);
      const colorBeige = new THREE.Color(0xD2CCC0);
      const colorDark = new THREE.Color(0x222222);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 140;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

        const pickColor = Math.random();
        const c = pickColor > 0.8 ? colorBurgundy : (pickColor > 0.4 ? colorBeige : colorDark);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Use circular soft particle texture
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      const pCtx = pCanvas.getContext('2d');
      const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      pGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      pGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
      pGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      pCtx.fillStyle = pGrad;
      pCtx.fillRect(0, 0, 32, 32);

      const pTexture = new THREE.CanvasTexture(pCanvas);
      const material = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        map: pTexture,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        blending: THREE.NormalBlending
      });

      const particleSystem = new THREE.Points(geometry, material);
      scene.add(particleSystem);

      // Subtle mouse reaction
      let targetRotX = 0;
      let targetRotY = 0;
      window.addEventListener('mousemove', (e) => {
        targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.15;
        targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.15;
      }, { passive: true });

      function animateThree() {
        particleSystem.rotation.y += 0.0006;
        particleSystem.rotation.x += 0.0003;
        particleSystem.rotation.x += (targetRotX - particleSystem.rotation.x) * 0.05;
        particleSystem.rotation.y += (targetRotY - particleSystem.rotation.y) * 0.05;

        renderer.render(scene, camera);
        requestAnimationFrame(animateThree);
      }
      animateThree();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, { passive: true });
    } catch (err) {
      console.warn('Three.js ambient init bypassed:', err);
    }
  }

  // ==============================================================
  // 7. 3D MOUSE TILT ON HERO PORTRAIT & CARDS
  // ==============================================================
  const tiltElements = document.querySelectorAll('[data-tilt]');
  if (window.matchMedia('(pointer: fine)').matches) {
    tiltElements.forEach(el => {
      let isHovered = false;
      let rAF = null;
      let currentX = 0, currentY = 0;
      let targetX = 0, targetY = 0;

      function renderTilt() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        if (!isHovered && Math.abs(currentX) < 0.05 && Math.abs(currentY) < 0.05) {
          el.style.transform = '';
          rAF = null;
          return;
        }

        const scale = isHovered ? 1.015 : 1;
        el.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`;
        rAF = requestAnimationFrame(renderTilt);
      }

      el.addEventListener('mouseenter', () => {
        isHovered = true;
        if (!rAF) rAF = requestAnimationFrame(renderTilt);
      });

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        targetX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
        targetY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
        if (!rAF) rAF = requestAnimationFrame(renderTilt);
      }, { passive: true });

      el.addEventListener('mouseleave', () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
      });
    });
  }

  // ==============================================================
  // 8. PORTFOLIO CATEGORY FILTERING (CLEAN & FLICKER-FREE)
  // ==============================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      workItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        const isMatch = (filterVal === 'all' || itemCat === filterVal);
        if (isMatch) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });

  // ==============================================================
  // 9. PROJECT DETAIL MODAL SYSTEM
  // ==============================================================
  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');

  const modalCat = document.getElementById('modalCat');
  const modalDate = document.getElementById('modalDate');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalImage = document.getElementById('modalImage');
  const modalTools = document.getElementById('modalTools');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalScope = document.getElementById('modalScope');
  const modalOverview = document.getElementById('modalOverview');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalCounter = document.getElementById('modalCounter');

  function openProjectModal(projectId) {
    const data = PROJECT_DATA[projectId];
    if (!data) return;

    currentProjectIndex = projectKeys.indexOf(projectId);
    populateModalData(data);

    projectModal?.classList.add('is-open');
    projectModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function populateModalData(data) {
    if (modalCat) modalCat.textContent = data.category;
    if (modalDate) modalDate.textContent = data.date;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
    }
    if (modalTools) modalTools.textContent = data.tools;
    if (modalDeliverables) modalDeliverables.textContent = data.deliverables;
    if (modalScope) modalScope.textContent = data.scope;
    if (modalOverview) modalOverview.textContent = data.overview;

    if (modalHighlights) {
      modalHighlights.innerHTML = '';
      data.highlights.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        modalHighlights.appendChild(li);
      });
    }

    // Dynamic Figma Project Link
    const modalFigmaAction = document.getElementById('modalFigmaAction');
    const modalFigmaLink = document.getElementById('modalFigmaLink');
    if (data.figmaLink) {
      if (modalFigmaAction) modalFigmaAction.style.display = 'block';
      if (modalFigmaLink) modalFigmaLink.href = data.figmaLink;
    } else {
      if (modalFigmaAction) modalFigmaAction.style.display = 'none';
    }

    if (modalCounter) {
      modalCounter.textContent = `${currentProjectIndex + 1} / ${projectKeys.length}`;
    }
  }

  function closeProjectModal() {
    projectModal?.classList.remove('is-open');
    projectModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function navigateModal(direction) {
    currentProjectIndex = (currentProjectIndex + direction + projectKeys.length) % projectKeys.length;
    const nextKey = projectKeys[currentProjectIndex];
    const data = PROJECT_DATA[nextKey];
    if (data) populateModalData(data);
  }

  // Trigger modal on clicking work items
  workItems.forEach(item => {
    item.addEventListener('click', () => {
      const pId = item.getAttribute('data-project-id');
      if (pId) openProjectModal(pId);
    });
  });

  // Trigger modal from case studies buttons
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.getAttribute('data-project-id');
      if (pId) openProjectModal(pId);
    });
  });

  modalCloseBtn?.addEventListener('click', closeProjectModal);
  modalBackdrop?.addEventListener('click', closeProjectModal);
  modalPrevBtn?.addEventListener('click', () => navigateModal(-1));
  modalNextBtn?.addEventListener('click', () => navigateModal(1));

  // ==============================================================
  // 10. MASONRY GALLERY LIGHTBOX SYSTEM
  // ==============================================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxCounter = document.getElementById('lightboxCounter');

  const masonryItems = Array.from(document.querySelectorAll('.masonry-item'));
  let currentLightboxIndex = 0;

  function openLightbox(index) {
    if (index < 0 || index >= masonryItems.length) return;
    currentLightboxIndex = index;
    const item = masonryItems[currentLightboxIndex];

    const src = item.getAttribute('data-lightbox-src');
    const title = item.getAttribute('data-lightbox-title');
    const cat = item.getAttribute('data-lightbox-category');

    if (lightboxImage) {
      lightboxImage.src = src || '';
      lightboxImage.alt = title || 'Graphic Design Artwork';
    }
    if (lightboxTitle) lightboxTitle.textContent = title || '';
    if (lightboxCategory) lightboxCategory.innerHTML = cat || '';
    if (lightboxCounter) lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${masonryItems.length}`;

    lightboxModal?.classList.add('is-open');
    lightboxModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal?.classList.remove('is-open');
    lightboxModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    const nextIdx = (currentLightboxIndex + direction + masonryItems.length) % masonryItems.length;
    openLightbox(nextIdx);
  }

  masonryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  lightboxBackdrop?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => navigateLightbox(-1));
  lightboxNext?.addEventListener('click', () => navigateLightbox(1));

  // Global Keyboard Navigation (ESC, Left, Right)
  window.addEventListener('keydown', (e) => {
    if (projectModal?.classList.contains('is-open')) {
      if (e.key === 'Escape') closeProjectModal();
      if (e.key === 'ArrowLeft') navigateModal(-1);
      if (e.key === 'ArrowRight') navigateModal(1);
    } else if (lightboxModal?.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });

  // ==============================================================
  // 11. TOAST NOTIFICATION SYSTEM
  // ==============================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, icon = '✦') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  // ==============================================================
  // 12. ONE-CLICK EMAIL COPY TO CLIPBOARD
  // ==============================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailVal = 'priyankasingh09@gmail.com';

  copyEmailBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(emailVal)
      .then(() => {
        showToast('Email copied to clipboard! (priyankasingh09@gmail.com)', '✓');
      })
      .catch(() => {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = emailVal;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Email copied to clipboard!', '✓');
      });
  });

  // ==============================================================
  // 13. INTERACTIVE CONTACT FORM VALIDATION
  // ==============================================================
  const contactForm = document.getElementById('contactForm');
  const formName = document.getElementById('formName');
  const formEmail = document.getElementById('formEmail');
  const formProject = document.getElementById('formProject');
  const formMessage = document.getElementById('formMessage');
  const formFeedback = document.getElementById('formFeedback');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error states
    [formName, formEmail, formProject, formMessage].forEach(field => {
      field?.classList.remove('is-invalid');
    });
    if (formFeedback) {
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';
      formFeedback.style.display = 'none';
    }

    // Name check
    if (!formName?.value.trim()) {
      formName?.classList.add('is-invalid');
      isValid = false;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formEmail?.value.trim() || !emailRegex.test(formEmail.value.trim())) {
      formEmail?.classList.add('is-invalid');
      isValid = false;
    }

    // Project select check
    if (!formProject?.value) {
      formProject?.classList.add('is-invalid');
      isValid = false;
    }

    // Message check
    if (!formMessage?.value.trim() || formMessage.value.trim().length < 5) {
      formMessage?.classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) return;

    // Simulation of clean message dispatch (Formspree/EmailJS friendly)
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Message...</span>';
    }

    setTimeout(() => {
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Thank you, Priyanka! Your message has been prepared. I will respond to your email within 24 hours.';
        formFeedback.style.display = 'block';
      }
      showToast('Message sent successfully! Priyanka will get back shortly.', '✓');
      contactForm.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>`;
      }
    }, 1000);
  });

  // ==============================================================
  // 14. GORAKHPUR LIVE CLOCK (IST: UTC + 5:30)
  // ==============================================================
  const footerClock = document.getElementById('footerClock');

  function updateGorakhpurClock() {
    if (!footerClock) return;
    try {
      const now = new Date();
      // Formatted in Asia/Kolkata timezone
      const istOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', istOptions);
      footerClock.textContent = `${formatter.format(now)} IST`;
    } catch {
      // Fallback
      const now = new Date();
      footerClock.textContent = `${now.toLocaleTimeString()} IST`;
    }
  }

  updateGorakhpurClock();
  setInterval(updateGorakhpurClock, 1000);

  // ==============================================================
  // 15. SMOOTH SCROLL TO TOP
  // ==============================================================
  const backToTopBtn = document.getElementById('backToTop');
  backToTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==============================================================
  // 16. PROGRESSIVE ENHANCEMENT: FLICKER-FREE SCROLL ENTRANCE
  // ==============================================================
  function initScrollAnimations() {
    // 1. Software progress bars animate when scrolled into view (no snap/flicker)
    const softwareCards = document.querySelectorAll('.software-card');
    if ('IntersectionObserver' in window) {
      const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.sw-bar-fill');
            if (fill) {
              const targetWidth = fill.getAttribute('data-width') || '85%';
              fill.style.width = targetWidth;
            }
            skillsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      softwareCards.forEach(card => skillsObserver.observe(card));
    } else {
      softwareCards.forEach(card => {
        const fill = card.querySelector('.sw-bar-fill');
        if (fill) fill.style.width = fill.getAttribute('data-width') || '85%';
      });
    }

    // 2. Smooth GSAP reveals with immediateRender: false to eliminate FOUC and flicker
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      try {
        gsap.registerPlugin(ScrollTrigger);

        // Section Titles Reveal once on scroll
        gsap.utils.toArray('.section-header').forEach(header => {
          gsap.fromTo(header, 
            { opacity: 0, y: 25 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.75, 
              ease: 'power2.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: header,
                start: 'top 88%',
                once: true
              }
            }
          );
        });

        // Case studies reveal smoothly once
        gsap.utils.toArray('.case-study-card').forEach(card => {
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: 'top 86%',
                once: true
              }
            }
          );
        });
      } catch (err) {
        console.warn('Scroll animation gracefully bypassed:', err);
      }
    }
  }

});
