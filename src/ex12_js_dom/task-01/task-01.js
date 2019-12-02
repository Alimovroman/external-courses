let slider = {
    slides: ['asset/cats.jpg', 'asset/horse.jpg', 'asset/jaguar.jpg', 'asset/kroliki.jpg', 'asset/panda.jpg', 'asset/tigr.jpg'],
    frame: 0,
    implant: function(image) {
      document.getElementById("screen").style.backgroundImage = `url( ${image} )`;
    },
    init: function() {
      this.implant(this.slides[this.frame]);
    },
    left: function() {
      slider.frame--;
      if(slider.frame < 0) {
        slider.frame = slider.slides.length-1;
      }
      document.body.style.transform = "skew(20deg, -20deg)";
      setTimeout(() => {document.body.style.transform = ""}, 1000);
      slider.implant(slider.slides[slider.frame]);
    },
    right: function() {
      slider.frame++;
      if(slider.frame === slider.slides.length) {
        slider.frame = slider.frame = 0;
      }
      document.body.style.transform = "skew(-20deg, 20deg)";
      setTimeout(() => {document.body.style.transform = ""}, 1000);
      slider.implant(slider.slides[slider.frame]);
    }
  };
window.onload = function() {
  slider.init();
}
document.querySelector(`.back`).addEventListener(`click`, slider.left);
document.querySelector(`.next`).addEventListener(`click`, slider.right);