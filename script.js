// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Copy email fallback
const copyBtn = document.getElementById('copy-email');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = 'Jana.de-vries@web.de';
    try {
      await navigator.clipboard.writeText(email);
      alert('Email address copied ✅');
    } catch {
      prompt('Copy this address:', email);
    }
  });
}

// Formspree AJAX submit
const fsForm = document.getElementById('fs-form');
const fsStatus = document.getElementById('fs-status');
if (fsForm && fsStatus) {
  fsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(fsForm);
    try {
      const res = await fetch(fsForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        fsStatus.textContent = "Thanks! We'll reply soon.";
        fsStatus.style.display = 'block';
        fsForm.reset();
      } else {
        fsStatus.textContent = "Sorry—couldn't send. Please use the Copy email button.";
        fsStatus.style.display = 'block';
      }
    } catch (err) {
      fsStatus.textContent = "Network error. Please try again later or use the Copy email button.";
      fsStatus.style.display = 'block';
    }
  });
}
