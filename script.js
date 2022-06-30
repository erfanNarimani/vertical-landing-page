const container = document.querySelector(".showcase");
const rightColumn = document.querySelector(".right-col");
const leftColumn = document.querySelector(".left-col");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");
const titels = document.querySelectorAll(".title");
const subTitels = document.querySelectorAll(".sub-title");
// this variable is for the Lenght of the slides
console.log(titels);
const columnLength = leftColumn.querySelectorAll("div").length;
const arrayOfTitels = Array.from(titels);
let currentSlideIndex = 0;

rightColumn.style.top = `-${(columnLength - 1) * 100}vh`;
// Add left column style if nedded

nextBtn.addEventListener("click", () => changeSlide("up"));
previousBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = container.clientHeight;
  if (direction === "up") {
    currentSlideIndex++;
  }
  if (currentSlideIndex > columnLength - 1) {
    currentSlideIndex = 0;
  } else if (direction === "down") {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = columnLength - 1;
    }
  }

  leftColumn.style.transform = `translateY(-${
    currentSlideIndex * sliderHeight
  }px)`;
  rightColumn.style.transform = `translateY(${
    currentSlideIndex * sliderHeight
  }px)`;
};
