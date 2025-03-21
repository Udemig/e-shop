document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navIcons = document.querySelector(".nav-icons");

  if (menuBtn && navLinks && navIcons) {
    menuBtn.addEventListener("click", () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        const navLinksHeight = navLinks.clientHeight;

        navLinks.classList.toggle("active");
        navIcons.classList.toggle("active");
        menuBtn.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
          navIcons.style.top = `calc(100% + ${navLinksHeight}px)`;
        } else {
          navIcons.style.top = "100%";
        }

        const icon = menuBtn.querySelector("i");
        navLinks.classList.contains("active")
          ? icon.classList.replace("fa-bars", "fa-times")
          : icon.classList.replace("fa-times", "fa-bars");
      }
    });

    document.addEventListener("click", (e) => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (
        isMobile &&
        !menuBtn.contains(e.target) &&
        !navLinks.contains(e.target) &&
        !navIcons.contains(e.target)
      ) {
        navLinks.classList.remove("active");
        navIcons.classList.remove("active");
        menuBtn.classList.remove("active");
        navIcons.style.top = "100%";
        menuBtn.querySelector("i").classList.replace("fa-times", "fa-bars");
      }
    });
  }
});
