function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

  let slideIndex = 1;
  let offset = 0;
  
  const slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector(field),
    slider = document.querySelector(container);

  addZero(slides.length, total);
  addZero(slideIndex, current);

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const dots = document.createElement("ol"),
    dotsArr = [];
  dots.classList.add("carousel-indicators");
  slider.append(dots);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.append(dot);
    dotsArr.push(dot);
  }

  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    addZero(slideIndex, current);

    showActiveIndicator(slideIndex);
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    addZero(slideIndex, current);

    showActiveIndicator(slideIndex);
  });

  dotsArr.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;

      offset = deleteNotDigits(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      addZero(slideIndex, current);
      showActiveIndicator(slideIndex);
    });
  });

  function addZero(n, item) {
    if (slides.length < 10) {
      item.textContent = `0${n}`;
    } else {
      item.textContent = n;
    }
  }

  function showActiveIndicator(n) {
    dotsArr.forEach((dot) => (dot.style.opacity = ".5"));
    dotsArr[n - 1].style.opacity = 1;
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }
}

export default slider;
