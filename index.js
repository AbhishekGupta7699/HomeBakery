// Automatically set active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        
        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
  }
});

// Product card hover effect enhancement
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Current year in footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.querySelector("#current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add animation to hero section on load
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroTitle.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      heroTitle.style.opacity = "1";
      heroTitle.style.transform = "translateY(0)";
    }, 300);
  }
});

// Order button confirmation
document
  .querySelectorAll(
    'a[href*="ubereats"], a[href*="doordash"], a[href*="grubhub"]',
  )
  .forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.getAttribute("href").includes("http")) {
        // Optional: Add analytics or tracking here
        console.log(
          "Redirecting to food delivery service:",
          this.getAttribute("href"),
        );
      }
    });
  });

function selectMood(mood, btn) {
  // Set hidden input value
  document.getElementById("moodInput").value = mood;

  // Highlight selected emoji
  document
    .querySelectorAll(".feedback-emoji-btn")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
}
