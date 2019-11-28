let slider = {
    slides: ['asset/cats.jpg', 'asset/horse.jpg', 'asset/jaguar.jpg', 'asset/kroliki.jpg', 'asset/panda.jpg', 'asset/tigr.jpg'],
    frame: 0,
    set: function(image) {
      document.getElementById("screen").style.backgroundImage = `url( ${image} )`;
    },
    init: function() {
      this.set(this.slides[this.frame]);
    },
    left: function() {
      slider.frame--;
      if(slider.frame < 0) {
        slider.frame = slider.slides.length-1;
      }
      document.body.style.transform = "skew(20deg, -20deg)";
      setTimeout(() => {document.body.style.transform = ""}, 1000);
      slider.set(slider.slides[slider.frame]);
    },
    right: function() {
      slider.frame++;
      if(slider.frame === slider.slides.length) {
        slider.frame = slider.frame = 0;
      }
      document.body.style.transform = "skew(-20deg, 20deg)";
      setTimeout(() => {document.body.style.transform = ""}, 1000);
      slider.set(slider.slides[slider.frame]);
    }
  };
window.onload = function() {
  slider.init();
}
document.querySelector(`.left`).addEventListener(`click`, slider.left);
document.querySelector(`.right`).addEventListener(`click`, slider.right);