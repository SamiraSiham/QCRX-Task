// document.addEventListener('scroll', () => {
//     const cardContainer = document.querySelector('.card-container-stack');
//     const scrollPosition = window.scrollY;
//     const triggerHeight = window.innerHeight / 2  ;

//     if (scrollPosition > triggerHeight) {
//         cardContainer.classList.add('grid-layout');
//     } else {
//         cardContainer.classList.remove('grid-layout');
//     }
// });

document.addEventListener("scroll", () => {
  const lastSection = document.querySelector("#tour-section");
  if (lastSection) {
    const cardContainer = lastSection.querySelector(".card-container-stack");
    const sectionTop = lastSection.getBoundingClientRect().top;
    const sectionHeight = lastSection.offsetHeight + 10;
    const triggerPoint = sectionHeight / 3 - 300;

    if (sectionTop <= triggerPoint) {
      // if (sectionTop <= sectionHeight / 4) {
      cardContainer.classList.add("grid-layout");
    } else {
      cardContainer.classList.remove("grid-layout");
    }
  }
});
