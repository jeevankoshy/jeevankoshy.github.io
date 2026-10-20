document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("terminal-splash");
  const mainContent = document.body;

  // Hide content initially
  mainContent.style.overflow = "hidden";

  // Typing logic here...
  const phrases = [
    "Post-Graduate in Data Science",
    " | Ex-Deloitte"
  ];
  let currentPhrase = 0;
  let currentLetter = 0;
  let typedText = document.getElementById("typed-text");
  let typingTimer = null;
  let dismissed = false;

  // Fade out the splash; safe to call more than once (typing end or user skip)
  function dismissSplash() {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(typingTimer);
    document.removeEventListener("keydown", dismissSplash);
    splash.style.transition = "opacity 0.6s ease";
    splash.style.opacity = 0;
    splash.style.pointerEvents = "none";
    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.overflow = "auto";
    }, 600);
  }

  // Click/tap or any key skips the intro
  splash.addEventListener("click", dismissSplash);
  document.addEventListener("keydown", dismissSplash);

  function typePhrase() {
    if (currentPhrase < phrases.length) {
      if (currentLetter < phrases[currentPhrase].length) {
        typedText.textContent += phrases[currentPhrase].charAt(currentLetter);
        currentLetter++;
        typingTimer = setTimeout(typePhrase, 40); // Typing speed
      } else {
        currentPhrase++;
        currentLetter = 0;
        typingTimer = setTimeout(typePhrase, 500); // Pause before next
      }
    } else {
      // Finished typing, fade out splash
      typingTimer = setTimeout(dismissSplash, 400);
    }
  }

  typePhrase();

  // Collapse the mobile menu after a nav link is tapped
  const navCollapse = document.getElementById("navbarNav");
  document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });
});



AOS.init({
    duration: 500,
    once: true,
  });

  window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});
