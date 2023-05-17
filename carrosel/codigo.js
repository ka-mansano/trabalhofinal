import { LightningElement } from 'lwc';

export default class Carousel extends LightningElement {
  currentSlide = 1;

  handleNextClick() {
    this.currentSlide = this.currentSlide === 3 ? 1 : this.currentSlide + 1;
    this.showSlide(this.currentSlide);
  }

  handlePrevClick() {
    this.currentSlide = this.currentSlide === 1 ? 3 : this.currentSlide - 1;
    this.showSlide(this.currentSlide);
  }

  showSlide(slideNumber) {
    const slides = this.template.querySelectorAll('.carroselImg');
    slides.forEach((slide, index) => {
      if (index === slideNumber - 1) {
        slide.classList.add('acao');
      } else {
        slide.classList.remove('acao');
      }
    });
  }
}



