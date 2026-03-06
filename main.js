/* ═══════════════════════════════════════════
   DIAMOND DEV — ULTRA-PREMIUM PORTFOLIO
   INTERACTION & 3D LOGIC
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursor();
    initNavbar();
    initHero3D();
    initHeroText();
    initSkills();
    initProjects();
    initLab();
    initResume();
    initScrollReveal();
    lucide.createIcons();
});

// ═══ LOADER ═══
function initLoader() {
    const loader = document.getElementById('loader');
    const fill = document.getElementById('loaderFill');
    const percent = document.getElementById('loaderPercent');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
        fill.style.width = `${progress}%`;
        percent.innerText = `${Math.round(progress)}%`;
    }, 100);
}

// ═══ CURSOR ═══
function initCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const spotlight = document.getElementById('spotlight');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        spotlight.style.left = `${mouseX}px`;
        spotlight.style.top = `${mouseY}px`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });
}

// ═══ NAVBAR ═══
function initNavbar() {
    const nav = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const current = window.pageYOffset;
        if (current > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');

        if (current > lastScroll && current > 200) nav.classList.add('hidden');
        else nav.classList.remove('hidden');
        lastScroll = current;
    });

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            menu.classList.remove('open');
        });
    });
}

// ═══ HERO 3D ═══
function initHero3D() {
    const canvas = document.getElementById('heroCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const ambient = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambient);

    const p1 = new THREE.PointLight(0x7b2fff, 1.5); p1.position.set(5, 5, 5); scene.add(p1);
    const p2 = new THREE.PointLight(0x00d4ff, 1); p2.position.set(-5, -3, 3); scene.add(p2);

    // Orb
    const geo = new THREE.IcosahedronGeometry(2.2, 4);
    const mat = new THREE.MeshStandardMaterial({
        color: 0x7b2fff, emissive: 0x4a0fb0, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.8
    });
    const orb = new THREE.Mesh(geo, mat);
    scene.add(orb);

    // Core
    const coreMat = new THREE.MeshStandardMaterial({ color: 0x00d4ff, emissive: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.5 });
    const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), coreMat);
    scene.add(core);

    function animate() {
        orb.rotation.y += 0.005;
        orb.rotation.x += 0.003;
        core.rotation.y -= 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ═══ HERO TEXT ═══
function initHeroText() {
    const container = document.querySelector('.char-wrap');
    const text = 'DIAMOND DEV';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = char === ' ' ? 'char-space' : 'char';
        span.innerText = char;
        span.style.animationDelay = `${0.8 + i * 0.05}s`;
        container.appendChild(span);
    });
}

// ═══ SKILLS ═══
const skillsData = [
    { name: 'Dev', skills: ['JavaScript', 'Python', 'Node.js', 'React', 'Next.js', 'Three.js'], color: '#00d4ff' },
    { name: 'Discord', skills: ['Bot Development', 'API Integrations', 'Custom Systems'], color: '#7b2fff' },
    { name: 'Automation', skills: ['Workflow Automation', 'Python Scripts', 'Cron Jobs'], color: '#ff2d95' }
];

function initSkills() {
    const tabs = document.getElementById('skillTabs');
    const grid = document.getElementById('skillGrid');
    const marquee = document.getElementById('marquee');

    skillsData.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = `skill-tab ${i === 0 ? 'active' : ''}`;
        btn.innerText = cat.name;
        btn.onclick = () => {
            document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(cat);
        };
        tabs.appendChild(btn);
    });

    function renderSkills(cat) {
        grid.innerHTML = '';
        cat.skills.forEach(s => {
            const item = document.createElement('div');
            item.className = 'glass-card skill-item';
            item.innerHTML = `<div class="skill-dot-wrap" style="background:${cat.color}15"><i data-lucide="check-circle" style="color:${cat.color}; width:16px; height:16px;"></i></div><p>${s}</p>`;
            grid.appendChild(item);
        });
        lucide.createIcons(); // Refresh for dynamic icons
    }

    renderSkills(skillsData[0]);

    // Marquee
    const all = skillsData.flatMap(x => x.skills);
    [...all, ...all].forEach(s => {
        const span = document.createElement('span');
        span.innerText = s;
        marquee.appendChild(span);
    });
}

// ═══ PROJECTS ═══
const projects = [
    { title: 'NexusBot', cat: 'Discord', img: 'assets/nexusbot.png', desc: 'Advanced management platform serving 50K+ users.', tech: ['Node.js', 'MongoDB'], accent: 'from-violet-600 to-indigo-800' },
    { title: 'AutoFlow', cat: 'Automation', img: 'assets/autoflow.png', desc: 'Visual workflow builder for complex API chains.', tech: ['Python', 'FastAPI'], accent: 'from-cyan-500 to-blue-700' },
    { title: 'SynapseAI', cat: 'AI Product', img: 'assets/synapseai.png', desc: 'Intelligence dashboard for real-time data insights.', tech: ['Next.js', 'TensorFlow'], accent: 'from-pink-500 to-rose-700' }
];

function initProjects() {
    const grid = document.getElementById('projectGrid');
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.innerHTML = `
            <div class="project-header" style="background-image:linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)), url('${p.img}'); background-size: cover; background-position: center;">
                <div class="project-cat">${p.cat}</div>
                <h3>${p.title}</h3>
                <div class="project-line"></div>
            </div>
            <div class="project-body">
                <p>${p.desc}</p>
                <div class="project-tags">${p.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
            </div>`;
        grid.appendChild(card);
    });
}

// ═══ LAB ═══
const labProjects = [
    { title: 'Particle Field Study', cat: 'Motion', img: 'assets/particle_study.png' },
    { title: 'Shader Playground', cat: 'WebGL', img: 'assets/shader_playground.png' },
    { title: 'Generative Patterns', cat: 'Code', img: 'assets/generative_art.png' },
    { title: 'Fluid Motion UI', cat: 'Interface', img: 'assets/fluid_ui.png' },
    { title: 'Audio Reactive Vis', cat: 'Visuals', img: 'assets/audio_reactive.png' },
    { title: 'Neural Net Viz', cat: 'AI', img: 'assets/neural_viz.png' }
];

function initLab() {
    const grid = document.getElementById('labGrid');
    labProjects.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'lab-card reveal';
        card.innerHTML = `
            <div class="lab-visual" style="min-height:${200 + (i % 3) * 50}px">
                <img src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;opacity:0.6;display:block">
                <div class="lab-overlay">
                    <span>${p.cat}</span>
                    <h3>${p.title}</h3>
                </div>
                <div class="lab-tag">${p.cat}</div>
                <div class="lab-expand"><i data-lucide="arrow-up-right"></i></div>
            </div>`;
        grid.appendChild(card);
    });
    lucide.createIcons(); // Refresh for dynamic icons
}

// ═══ RESUME ═══
// ═══ RESUME ═══
const resumeData = {
    experience: [
        { period: '2023 - Present', title: 'Lead Creative Developer', company: 'Independent / Freelance', desc: 'Architecting high-end 3D web experiences and complex Discord ecosystems. Specialized in blending cinematic design with performant code.' },
        { period: '2022 - 2023', title: 'Automation Engineer', company: 'Tech Pulse Systems', desc: 'Developed proprietary workflow automation tools and API integrations that optimized operation costs by 40% for SaaS startups.' },
        { period: '2021 - 2022', title: 'Frontend Developer', company: 'Visionary Media', desc: 'Built interactive marketing landing pages using Framer Motion and Three.js, focusing on micro-interactions.' }
    ],
    toolkit: [
        { name: 'Core', skills: ['JavaScript', 'TypeScript', 'Python', 'Node.js'] },
        { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind', 'GSAP', 'Three.js'] },
        { name: 'Backend', skills: ['FastAPI', 'MongoDB', 'PostgreSQL', 'Redis'] }
    ],
    education: [
        { period: '2019 - 2023', title: 'B.Sc. in Computer Science', company: 'American University in Dubai', desc: 'Specialized in Advanced Algorithms and UX Engineering.' }
    ]
};

function initResume() {
    const tabs = document.getElementById('resumeTabs');
    const content = document.getElementById('resumeContent');
    const categories = ['Experience', 'Toolkit', 'Education'];

    categories.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = `resume-tab ${i === 0 ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => {
            document.querySelectorAll('.resume-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderResumeSection(cat.toLowerCase());
        };
        tabs.appendChild(btn);
    });

    function renderResumeSection(key) {
        content.innerHTML = '';
        if (key === 'toolkit') {
            const grid = document.createElement('div');
            grid.className = 'toolkit-grid';
            resumeData.toolkit.forEach(group => {
                const box = document.createElement('div');
                box.className = 'glass-card toolkit-box';
                box.innerHTML = `<h4>${group.name}</h4><div class="tag-grid">${group.skills.map(s => `<div class="tag-item">${s}</div>`).join('')}</div>`;
                grid.appendChild(box);
            });
            content.appendChild(grid);
        } else {
            resumeData[key].forEach(item => {
                const entry = document.createElement('div');
                entry.className = 'timeline-item reveal';
                entry.innerHTML = `
                    <div class="timeline-card glass">
                        <span class="period">${item.period}</span>
                        <h4>${item.title}</h4>
                        <p class="company">${item.company}</p>
                        <p class="desc">${item.desc}</p>
                    </div>`;
                content.appendChild(entry);
            });
        }
        lucide.createIcons();
        initScrollReveal(); // Re-trigger for new items
    }

    renderResumeSection('experience');
}

// ═══ SCROLL ═══
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
