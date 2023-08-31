// NAVIGATION BURGER MENU
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.menu-toggle').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
});


const contentContainers = document.querySelectorAll('.content-container');
const contentContainersTwo = document.querySelectorAll('.content-container-two');

function checkContainerInView() {
  contentContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1 && rect.bottom > 0) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
    setTimeout(() => {
  section.classList.add('fadeIn');
}, index * 1000); // Delay each section by 1000ms
  });
}
function itemContainer() {
  contentContainersTwo.forEach((containerTwo, index) => {
    const rect = containerTwo.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
      containerTwo.classList.add('active');
    } else {
      containerTwo.classList.remove('active');
    }
    setTimeout(() => {
  section.classList.add('fadeIn');
}, index * 1000); // Delay each section by 1000ms
  });
}

window.addEventListener('scroll', checkContainerInView);
window.addEventListener('scroll', itemContainer);
window.addEventListener('load', itemContainer);
window.addEventListener('load', checkContainerInView);