document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {t:"Minimal Linux-Based OS Build",d:"Designed and assembled a lightweight custom OS environment using Linux tools and shell scripting."},
    {t:"Custom Web Browser Prototype",d:"Developed a simple browser using JavaScript, HTML, and Python-based backend logic."},
    {t:"Image Compressor Web Application",d:"Created a web app that compresses images using Python (Pillow/OpenCV) with drag-and-drop and instant preview."},
    {t:"Flashcard Learning Web App",d:"Built a flashcard-style study application with spaced repetition and user-defined decks."},
    {t:"Fake News Classification",d:"Developed an NLP model to classify news articles as real or fake using TF-IDF and deep learning."},
    {t:"Image Classification Model",d:"Implemented a CNN-based image classification system using TensorFlow/PyTorch."}
  ];

  const container = document.getElementById('projects');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'grimoire';
    card.innerHTML = `<h3>${p.t}</h3><p>${p.d}</p>`;
    card.onclick = () => {
      document.getElementById('modal-title').textContent = p.t;
      document.getElementById('modal-desc').textContent = p.d;
      document.getElementById('blood-modal').style.display = 'flex';
    };
    container.appendChild(card);
  });

  window.closeModal = () => document.getElementById('blood-modal').style.display = 'none';

  // Ouija spirit moves when typing
  document.addEventListener('keydown', () => {
    const p = document.querySelector('.planchette');
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    p.style.left = x + '%';
    p.style.top = y + '%';
    p.style.transform = 'rotate(' + Math.random()*360 + 'deg) scale(1.5)';
    setTimeout(() => p.style.transform = 'rotate(0deg) scale(1)', 400);
  });
});
