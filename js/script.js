function setUpMobileMenu() {
  const hamburger = document.querySelector(".hamburger-menu");
  const links = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (hamburger && links) {
    // Toggle dropdown
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      links.classList.toggle("active");
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !e.target.closest(".nav-links") &&
        !e.target.closest(".hamburger-menu")
      ) {
        links.classList.remove("active");
      }
    });

    // Close when clicking a nav link (on mobile only)
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          links.classList.remove("active");
        }
      });
    });
  }
}

function handleResize() {
  const links = document.querySelector(".nav-links");
  if (window.innerWidth > 768) {
    links.classList.remove("active"); // Let CSS handle display
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setUpMobileMenu();
  window.addEventListener("resize", handleResize);
  handleResize(); // Ensure initial correct state
});
