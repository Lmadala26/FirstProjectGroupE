// "use strict";
// LINKEAR EL AUDIO A LOS BOTONES CON RETARDO
document.addEventListener("keydown", playSound);
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");

function play1() {
  audio1.currentTime = 0;
  setTimeout(() => {
    audio1.play();
    document.getElementById("boton1").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton1").classList.remove("red-button");
    }, 200);
  }, 140);
}

function play2() {
  audio2.currentTime = 0;
  setTimeout(() => {
    audio2.play();
    document.getElementById("boton2").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton2").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play3() {
  audio3.currentTime = 0;
  setTimeout(() => {
    audio3.play();
    document.getElementById("boton3").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton3").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play4() {
  audio4.currentTime = 0;
  setTimeout(() => {
    audio4.play();

    document.getElementById("boton4").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton4").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play5() {
  audio5.currentTime = 0;
  setTimeout(() => {
    audio5.play();
    document.getElementById("boton5").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton5").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play6() {
  audio6.currentTime = 0;
  setTimeout(() => {
    audio6.play();
    document.getElementById("boton6").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton6").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play7() {
  audio7.currentTime = 0;
  setTimeout(() => {
    audio7.play();
    document.getElementById("boton7").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton7").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play8() {
  audio8.currentTime = 0;
  setTimeout(() => {
    audio8.play();
    document.getElementById("boton8").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton8").classList.remove("red-button");
    }, 200);
  }, 140);
}
function play9() {
  audio9.currentTime = 0;
  setTimeout(() => {
    audio9.play();
    document.getElementById("boton9").classList.add("red-button");
    setTimeout(() => {
      document.getElementById("boton9").classList.remove("red-button");
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
    case "7":
      audio1.currentTime = 0;
      setTimeout(() => {
        audio1.play();
        document.getElementById("boton1").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton1").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "8":
      audio2.currentTime = 0;
      setTimeout(() => {
        audio2.play();
        document.getElementById("boton2").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton2").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "9":
      audio3.currentTime = 0;
      setTimeout(() => {
        audio3.play();
        document.getElementById("boton3").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton3").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "4":
      audio4.currentTime = 0;
      setTimeout(() => {
        audio4.play();
        document.getElementById("boton4").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton4").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "5":
      audio5.currentTime = 0;
      setTimeout(() => {
        audio5.play();
        document.getElementById("boton5").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton5").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "6":
      audio6.currentTime = 0;
      setTimeout(() => {
        audio6.play();
        document.getElementById("boton6").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton6").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "1":
      audio7.currentTime = 0;
      setTimeout(() => {
        audio7.play();
        document.getElementById("boton7").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton7").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "2":
      audio8.currentTime = 0;
      setTimeout(() => {
        audio8.play();
        document.getElementById("boton8").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton8").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    case "3":
      audio9.currentTime = 0;
      setTimeout(() => {
        audio9.play();
        document.getElementById("boton9").classList.add("red-button");
        setTimeout(() => {
          document.getElementById("boton9").classList.remove("red-button");
        }, 200);
      }, 140);
      break;
    default:
      break;
  }
}
