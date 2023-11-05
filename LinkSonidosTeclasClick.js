// "use strict";
// LINKEAR EL AUDIO A LOS BOTONES CON RETARDO
document.addEventListener("keydown", playSound);
const audio1 = document.getElementById("audioCrash");
const audio2 = document.getElementById("audioHihat-close");
const audio3 = document.getElementById("audioHihat-open");
const audio4 = document.getElementById("audioKick");
const audio5 = document.getElementById("audioRide");
const audio6 = document.getElementById("audioSnare");
const audio7 = document.getElementById("audioTom-high");
const audio8 = document.getElementById("audioTom-low");
const audio9 = document.getElementById("audioTom-mid");

function play1() {
  audio1.currentTime = 0;
  setTimeout(() => {
    audio1.play();
    document.getElementById("botonCrash").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonCrash").classList.remove("red-button");
    }, 200);
  }, 140);
}

function play2() {
  audio2.currentTime = 0;
  setTimeout(() => {
    audio2.play();
    document.getElementById("botonHihat-close").classList.add("red-button");
    setTimeout(() => {
      document
        .getElementById("botonHihat-close")
        .classList.remove("red-button");
    }, 200);
  }, 140);
}
function play3() {
  audio3.currentTime = 0;
  setTimeout(() => {
    audio3.play();
    document.getElementById("botonHihat-open").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonHihat-open").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play4() {
  audio4.currentTime = 0;
  setTimeout(() => {
    audio4.play();

    document.getElementById("botonKick").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonKick").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play5() {
  audio5.currentTime = 0;
  setTimeout(() => {
    audio5.play();
    document.getElementById("botonRide").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonRide").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play6() {
  audio6.currentTime = 0;
  setTimeout(() => {
    audio6.play();
    document.getElementById("botonSnare").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonSnare").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play7() {
  audio7.currentTime = 0;
  setTimeout(() => {
    audio7.play();
    document.getElementById("botonTom-high").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonTom-high").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play8() {
  audio8.currentTime = 0;
  setTimeout(() => {
    audio8.play();
    document.getElementById("botonTom-low").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonTom-low").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play9() {
  audio9.currentTime = 0;
  setTimeout(() => {
    audio9.play();
    document.getElementById("botonTom-mid").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("botonTom-mid").classList.remove("red-button");
    }, 200);
  }, 140);
}
// SIN RETARDO

// function play() {
//   var audio = document.getElementById("audio1");
//   audio.currentTime = 0;
//   audio.play();
// }

// function playB() {
//   var audioB = document.getElementById("audio2");
//   audioB.currentTime = 0;
//   audioB.play();
// }

// AÑADIR FUNCIONALIDAD A LOS BOTONES DEL TECLADO PARA QUE SUENEN
function playSound(event) {
  switch (event.key) {
    case "e":
      audio1.currentTime = 0;
      setTimeout(() => {
        audio1.play();
        document.getElementById("botonCrash").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("botonCrash").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "w":
      audio2.currentTime = 0;
      setTimeout(() => {
        audio2.play();
        document.getElementById("botonHihat-close").classList.add("red-button");
        setTimeout(() => {
          document
            .getElementById("botonHihat-close")
            .classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "q":
      audio3.currentTime = 0;
      setTimeout(() => {
        audio3.play();
        document.getElementById("botonHihat-open").classList.add("red-button");
        setTimeout(() => {
          document
            .getElementById("botonHihat-open")
            .classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "a":
      audio4.currentTime = 0;
      setTimeout(() => {
        audio4.play();
        document.getElementById("botonKick").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("botonKick").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "s":
      audio5.currentTime = 0;
      setTimeout(() => {
        audio5.play();
        document.getElementById("botonRide").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("botonRide").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "d":
      audio6.currentTime = 0;
      setTimeout(() => {
        audio6.play();
        document.getElementById("botonSnare").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("botonSnare").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "t":
      audio7.currentTime = 0;
      setTimeout(() => {
        audio7.play();
        document.getElementById("botonTom-high").classList.add("red-button");
        setTimeout(() => {
          document
            .getElementById("botonTom-high")
            .classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "f":
      audio8.currentTime = 0;
      setTimeout(() => {
        audio8.play();
        document.getElementById("botonTom-low").classList.add("red-button");
        setTimeout(() => {
          document
            .getElementById("botonTom-low")
            .classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "r":
      audio9.currentTime = 0;
      setTimeout(() => {
        audio9.play();
        document.getElementById("botonTom-mid").classList.add("claseNueva");
        setTimeout(() => {
          document
            .getElementById("botonTom-mid")
            .classList.remove("claseNueva");
        }, 200);
      }, 140);
      break;
    default:
      break;
  }
}
