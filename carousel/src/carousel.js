const debounce = (fn, interval) => {
  let timer = null;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => fn(), interval);
  }
}


class Carousel {
  #selector = null;
  #el = null;
  #containerEl = null;
  #paginationEl = null;
  #activeSlide = 0;
  #slides = [];
  #dots = [];
  #slidesCount = 0;

  constructor({ selector, slides }) { // ['', '']
    this.#selector = selector;
    this.#el = document.querySelector(selector);
    this.#containerEl = this.#el.querySelector(`${selector}__container`);
    this.#paginationEl = this.#el.querySelector(`${selector}__pagination`);

    // console.log(this.#selector);

    slides.forEach((slide) => this.addSlide(slide));

    this.setActiveSlide(0);

    this.#containerEl.addEventListener('scroll', debounce((e) => {
      const newIndex = Math.round(this.#containerEl.scrollLeft / this.#el.clientWidth);

      this.setActiveSlide(newIndex);
    }, 200));
  }

  setActiveSlide(index) {
    this.#activeSlide = index;

    this.#dots.forEach((el) => {
      el.classList.remove('active');
    });

    this.#dots[index].classList.add('active');

    this.#containerEl.scrollTo({
      left: this.#el.clientWidth * index,
      behavior: "smooth"
    })
  }

  addSlide(image) {
    const slide = document.createElement('div');
    const img = document.createElement('img');

    img.src = image;
    img.loading = 'lazy';

    slide.appendChild(img);

    slide.classList.add(`${this.#selector}__item`.replace('.', ''));

    this.#containerEl.appendChild(slide);

    this.#slides.push(slide);

    const index = this.#slidesCount++;

    this.addDot(index);
  }

  addDot(index) {
    const dot = document.createElement('button');

    dot.classList.add(`${this.#selector}__dot`.replace('.', ''));

    dot.onclick = () => this.setActiveSlide(index);

    this.#paginationEl.appendChild(dot);

    this.#dots.push(dot);
  }
}

var carousel = new Carousel({
  selector: '.carousel',
  slides: new Array(4).fill('https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg')
});