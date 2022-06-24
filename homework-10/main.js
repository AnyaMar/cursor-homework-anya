const button = document.querySelectorAll('button');
const audio = document.querySelectorAll("audio");


for(let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
      let id = this.id;
      for(let j = 0; j < button.length; j++) {
          if(audio[j].id == id) {
              audio[j].currentTime = 0;
              audio[j].play();
          }
      }
  });
}

window.addEventListener("keydown", function(event) {
  let keyCode = event.keyCode;
  for(let j = 0; j < button.length; j++) {
      if(audio[j].id == keyCode) {
          audio[j].currentTime = 0;
          audio[j].play();
      }
  }
});

