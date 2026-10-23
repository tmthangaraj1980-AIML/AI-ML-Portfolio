// Edit these values before publishing your portfolio.
const CONFIG = {
  email: 'tmthanagaraj1980@gmail.com',
  github: 'https://github.com/tmthangaraj1980-AIML',
  linkedin: 'https://linkedin.com/in/thangaraj-t-340169158',
  resumePath: 'assets/resume.pdf'
};

// Replace each empty repo value with the exact GitHub URL for that project.
const projects = [
  {
    "title": "AI-Based Smart Waste Segregation & Recycling Assistant",
    "category": "cv",
    "label": "COMPUTER VISION",
    "description": "MobileNetV2 transfer-learning waste image classification with English/Tamil recycling and disposal guidance.",
    "tags": [
      "MobileNetV2",
      "Transfer Learning",
      "Waste Classification"
    ],
    "ppt": "presentations/02_Waste_Segregation_MobileNetV2.pptx",
    "image": "assets/projects/project-01.jpg"
  },
  {
    "title": "AI-Based Student Face Recognition System",
    "category": "cv",
    "label": "COMPUTER VISION",
    "description": "Face-based classroom attendance system with enrollment, face embeddings, period reports and a student portal.",
    "tags": [
      "Face Recognition",
      "Flask",
      "SQLite"
    ],
    "ppt": "presentations/06_Student_Face_Recognition.pptx",
    "image": "assets/projects/project-02.jpg"
  },
  {
    "title": "Intelligent Helpdesk Ticket Classification",
    "category": "ml",
    "label": "NLP / MACHINE LEARNING",
    "description": "Flask-based IT ticket classification using TF-IDF and Logistic Regression with routing guidance.",
    "tags": [
      "TF-IDF",
      "Logistic Regression",
      "Flask"
    ],
    "ppt": "presentations/10_Helpdesk_Ticket_Classifier.pptx",
    "image": "assets/projects/project-03.jpg"
  },
  {
    "title": "Aqua Genesis — Flood Resilience Engine",
    "category": "genai",
    "label": "AGENTIC AI",
    "description": "Autonomous flood-mitigation concept combining agentic workflows, hydrologic digital twins and simulation.",
    "tags": [
      "Agentic AI",
      "Digital Twin",
      "Flood Prediction"
    ],
    "ppt": "presentations/Aqua Genesis Flood Control.pptx",
    "image": "assets/projects/project-04.jpg"
  },
  {
    "title": "ClearCustoms AI",
    "category": "genai",
    "label": "DOCUMENT AI",
    "description": "In-progress automated extraction and semantic interpretation of customs and trade documents.",
    "tags": [
      "OCR",
      "Document AI",
      "LLMs"
    ],
    "ppt": "presentations/ClearCustoms AI.pptx",
    "image": "assets/projects/project-05.jpg"
  },
  {
    "title": "Resume Classification",
    "category": "ml",
    "label": "NLP / MACHINE LEARNING",
    "description": "Natural-language processing project for resume categorization and talent-screening workflows.",
    "tags": [
      "NLP",
      "Text Classification",
      "Recruitment"
    ],
    "ppt": "presentations/Resume Classification.pptx",
    "image": "assets/projects/project-06.jpg"
  },
  {
    "title": "Smart Waste Detection — YOLO26",
    "category": "cv",
    "label": "OBJECT DETECTION",
    "description": "In-development real-time multi-class waste material detection using YOLO26 Nano.",
    "tags": [
      "YOLO26",
      "Object Detection",
      "Computer Vision"
    ],
    "ppt": "presentations/Smart Waste Detection YOLO26.pptx",
    "image": "assets/projects/project-07.jpg",
    "repo": "https://github.com/tmthangaraj1980-AIML/YOLO26_project_Waste_Detetection"
  },
  {
    "title": "StudyLens AI",
    "category": "genai",
    "label": "RAG / GENERATIVE AI",
    "description": "Document-intelligence application using retrieval-augmented generation to answer questions from uploaded documents.",
    "tags": [
      "RAG",
      "Document Intelligence",
      "FastAPI"
    ],
    "ppt": "presentations/StudyLens AI.pptx",
    "image": "assets/projects/project-08.jpg"
  },
  {
    "title": "ThangarajAI Chatbot",
    "category": "genai",
    "label": "CONVERSATIONAL AI",
    "description": "AI/ML learning and interview-preparation chatbot combining FAQ retrieval with Gemini fallback.",
    "tags": [
      "Chatbot",
      "Gemini",
      "Retrieval"
    ],
    "ppt": "presentations/ThangarajAI Chatbot.pptx",
    "image": "assets/projects/project-09.jpg"
  },
  {
    "title": "Urban Heat Island Prediction",
    "category": "ml",
    "label": "GEOSPATIAL MACHINE LEARNING",
    "description": "Geospatial prediction of land surface temperature from satellite and spatial features.",
    "tags": [
      "Geospatial AI",
      "Satellite Data",
      "Regression"
    ],
    "ppt": "presentations/Urban Heat Island.pptx",
    "image": "assets/projects/project-10.jpg"
  }
];

const grid = document.querySelector('#project-grid');
const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderProjects(filter='all') {
  const selected = projects.filter(p => filter === 'all' || p.category === filter);
  grid.innerHTML = selected.map((p,i) => `
    <article class="project-card" style="--delay:${Math.min(i,6)*45}ms">
      <div class="project-art project-cover"><img src="${encodeURI(p.image)}" alt="Illustration for ${escapeHTML(p.title)}" loading="lazy" /></div>
      <div class="project-body"><div class="project-meta"><span>${escapeHTML(p.label)}</span></div>
      <h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p>
      <div class="project-tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>
      <div class="project-actions"><a class="project-link ppt-button" href="${encodeURI(p.ppt)}" download>📊 PPTX ↓</a><a class="project-link github-button" href="${p.repo || CONFIG.github}" target="_blank" rel="noopener noreferrer" title="${p.repo ? "Project GitHub repository" : "GitHub profile — project repository not yet confirmed"}">⌘ ${p.repo ? "GitHub" : "GitHub Profile"} ↗</a></div>
      </div>
    </article>`).join('');
}
renderProjects();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
  btn.classList.add('active');btn.setAttribute('aria-pressed','true');renderProjects(btn.dataset.filter);
}));
const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'Open menu':'Close menu');navLinks.classList.toggle('open',!expanded);});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');}));
document.querySelector('#year').textContent=new Date().getFullYear();
let toastTimer;
function showToast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3800);}
const emailLink=document.querySelector('#email-link');
if(CONFIG.email && !CONFIG.email.startsWith('YOUR_')) emailLink.href=`mailto:${CONFIG.email}`;
else emailLink.addEventListener('click',e=>{e.preventDefault();showToast('Add your email address in script.js before publishing.');});
for(const [id,url,label] of [['github-link',CONFIG.github,'GitHub'],['linkedin-link',CONFIG.linkedin,'LinkedIn']]){
  const link=document.getElementById(id);
  if(/^https:\/\//.test(url)){link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.removeAttribute('data-placeholder-link');}
  else link.addEventListener('click',e=>{e.preventDefault();showToast(`Add your ${label} profile URL in script.js before publishing.`);});
}
document.querySelectorAll('[data-resume]').forEach(link=>link.addEventListener('click',async e=>{
  // A resume is not included. This prevents a confusing 404 until the PDF is supplied.
  try{const response=await fetch(CONFIG.resumePath,{method:'HEAD'});if(!response.ok)throw new Error('missing');}
  catch{e.preventDefault();showToast('Add your resume as assets/resume.pdf to enable this download.');}
}));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
