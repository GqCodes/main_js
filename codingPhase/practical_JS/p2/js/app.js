const init = () => {
  // Variables
  let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    current = 1,
    time = 6000;

  // add animation class to slide
  slides[0].classList.add("jumbo-slider__slide--active");
  links[current - 1].classList.add("jumbo-slider__link--active");

  //   update elipsis and links
  const updateNav = (current) => {
    for (let i = 0; i < slides.length; i++) {
      links[i].classList.remove("jumbo-slider__link--active");
      circles[i].classList.remove("jumbo-slider__circle--filled");
    }

    links[current - 1].classList.add("jumbo-slider__link--active");
    circles[current - 1].classList.add("jumbo-slider__circle--filled");
  };
  const startSliding = () => {
    setInterval(() => {
      // remove active class from first slide & add to the second slide so it can become the first slide with the class activated so that the animation class is NOT on every slide throwing everything off.
      slides[1].classList.add("jumbo-slider__slide--active");
      slides[0].classList.remove("jumbo-slider__slide--active");

      // clone the first slide and place it on the last space
      container.appendChild(slides[0].cloneNode([true]));
      //   then remove the first slide after its been cloned
      container.removeChild(slides[0]);

      if (current < slides.length) {
        current++;
        updateNav(current);
      } else {
        current = 1;
        updateNav(current);
      }
    }, time);
  };
  startSliding();
};

// init();
