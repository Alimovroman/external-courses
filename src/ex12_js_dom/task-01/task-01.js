let slider = {
    slides: ['asset/cats.jpg', 'asset/horse.jpg', 'asset/jaguar.jpg', 'asset/kroliki.jpg', 'asset/panda.jpg', 'asset/tigr.jpg'],
    frame: 0,
    set: function(image) {
      document.getElementById("scr").style.backgroundImage = "url("+image+")";
    },
    init: function() {
      this.set(this.slides[this.frame]);
    },
    left: function() {
      this.frame--;
      if(this.frame < 0) {
        this.frame = this.slides.length-1;
      }
      document.body.style.transform = "skew(20deg, -20deg)";
      setTimeout(() => {document.body.style.transform = ""}, 1000);
      this.set(this.slides[this.frame]);
    },
    right: function() {
      this.frame++;
      if(this.frame === this.slides.length) {
        this.frame = this.frame = 0;
      }
      document.body.style.transform = "skew(-20deg, 20deg)";
      setTimeout(() => {document.body.style.transform = ""}, 1000);
      this.set(this.slides[this.frame])
    }
  };
  window.onload = function() {
    slider.init();
  }