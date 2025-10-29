// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Side menu toggle
const sideToggle = document.getElementById("side-toggle");
const sideNavbar = document.getElementById("side-navbar");

if (sideToggle && sideNavbar) {
  // Toggle via hamburger/side toggle button
  sideToggle.addEventListener("click", () => {
    sideNavbar.classList.toggle("active");
  });

  // Toggle via bookmark tab (click on the right edge)
  sideNavbar.addEventListener("click", (e) => {
    // Detect click near the right edge (pseudo-element area)
    if (e.offsetX > sideNavbar.offsetWidth - 30) {
      sideNavbar.classList.toggle("active");
    }
  });
}