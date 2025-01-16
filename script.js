const menuIcon = document.querySelector(".menu_icon");

const mobileNav = document.querySelector(".mobile_nav");

menuIcon.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
  // Check the current style and just do the opposite

  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
  }
}

// Have the menu icon change depending on status of mobile menu
