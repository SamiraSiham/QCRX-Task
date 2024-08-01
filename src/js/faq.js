// const faqs = document.querySelectorAll(".icon-btn");
// import minus from '../icons/minus.svg';
// import plus from '../icons/plus.svg';
const faqs = document.querySelectorAll(".faq");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    console.log("click");
  });
});
