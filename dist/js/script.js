window.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {
      document.getElementById("search-bar").classList.toggle("open");
    });
  }

  const toTopArrow = document.getElementById("to-top");
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  document.addEventListener("scroll", function () {
    if (isInViewport(toTopArrow)) {
      toTopArrow.style.opacity = "0.6";
    } else {
      toTopArrow.style.opacity = "0";
    }
  });

  toTopArrow.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
});
