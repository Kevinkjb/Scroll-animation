// NAVIGATION BURGER MENU FUNCTIONALITY
const menuList = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menuList.classList.toggle("active");
});

menuList.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menuList.classList.remove("active");
});

// SELECTING THE WHOLE DOCUMENT AND CHECKING THE EVENT
document.addEventListener("click", (e) => {
  if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
    menuList.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

// SCROLL ANIMATION EFFECT
const contentContainers = document.querySelectorAll(".content-container");
const contentContainersTwo = document.querySelectorAll(".content-container-two");
const contentContainerThree = document.querySelectorAll(".content-container-three");
const contentContainerFour = document.querySelectorAll(".content-container-four");

function checkContainerInView() {
  contentContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1 && rect.bottom > 0) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
    setTimeout(() => {
      section.classList.add("fadeIn");
    }, index * 1000); // Delay each section by 1000ms
  });
  contentContainersTwo.forEach((containerTwo, index) => {
    const rectTwo = containerTwo.getBoundingClientRect();
    if (rectTwo.top < window.innerHeight * 0.8 && rectTwo.bottom > 0) {
      containerTwo.classList.add("active");
    } else {
      containerTwo.classList.remove("active");
    }
    setTimeout(() => {
      section.classList.add("fadeIn");
    }, index * 3000); // Delay each section by 1000ms
  });
  contentContainerThree.forEach((containerThree, index) => {
    const rectThree = containerThree.getBoundingClientRect();
    if (rectThree.top < window.innerHeight * 0.8 && rectThree.bottom > 0) {
      containerThree.classList.add("active");
    } else {
      containerThree.classList.remove("active");
    }
    setTimeout(() => {
      section.classList.add("fadeIn");
    }, index * 5000); // Delay each section by 1000ms
  });
    contentContainerFour.forEach((containerFour, index) => {
    const rectFour = containerFour.getBoundingClientRect();
    if (rectFour.top < window.innerHeight * 0.8 && rectFour.bottom > 0) {
      containerFour.classList.add("active");
    } else {
      containerFour.classList.remove("active");
    }
    setTimeout(() => {
      section.classList.add("fadeIn");
    }, index * 6000); // Delay each section by 1000ms
  });
}

window.addEventListener("scroll", checkContainerInView);
window.addEventListener("load", checkContainerInView);

// CAROUSEL FUNCTION

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
