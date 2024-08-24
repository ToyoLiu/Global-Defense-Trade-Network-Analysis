const nav = document.querySelector(".nav");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);

document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll('.image-container');

  containers.forEach(function(container) {
      if (container.querySelectorAll('.image').length === 1) {
          container.classList.add('single-image');
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const id = entry.target.id;
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('current');
          } else {
            link.classList.remove('current');
          }
        });
      }
    });
  }, {
    threshold: 0.5  // 当至少50%的元素可见时触发
  });

  // 观察页面中的每个h2标签
  document.querySelectorAll('h2[id]').forEach(h2 => {
    observer.observe(h2);
  });
});

