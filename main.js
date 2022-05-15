"use strict";

const body = document.getElementById("body");
const form = document.querySelector(".form-container");
const btn = document.querySelector(".tildaflash");
const forvard1 = document.querySelector(".forvard1");
const forvard2 = document.querySelector(".forvard2");
const forvard3 = document.querySelector(".forvard3");
const forvard4 = document.querySelector(".forvard4");
const forvard5 = document.querySelector(".forvard5");
const forvard6 = document.querySelector(".forvard6");
let modal = document.querySelector(".quest1");
const modal2 = document.querySelector(".quest2");
const modal3 = document.querySelector(".quest3");
const modal4 = document.querySelector(".quest4");
const modal5 = document.querySelector(".quest5");
const modal6 = document.querySelector(".quest6");
const modal7 = document.querySelector(".quest7");
const back2 = document.querySelector(".back2");
const back3 = document.querySelector(".back3");
const back4 = document.querySelector(".back4");
const back5 = document.querySelector(".back5");
const back6 = document.querySelector(".back6");
const back7 = document.querySelector(".back7");
const closeBtn = document.querySelector(".close1");
//let submit = document.getElementById('submit');
//submit.onclick = function(){

//   if (!rules.checked) { alert("Чекбокс нажат -вариант №1"); } else { alert("Чекбокс не нажат-вариант №1"); }

//   }
let proba = 1;
btn.onclick = function (open) {
  open.preventDefault();
  if (proba > 1) {
    form.classList.add("active");
    body.classList.add("t_body");
    closeBtn.onclick = () => {
      form.classList.remove("active");
      body.classList.remove("t_body");
    };
  } else {
    proba++;
    form.classList.add("active");
    modal.classList.add("active");
    body.classList.add("t_body");
    closeBtn.onclick = () => {
      form.classList.remove("active");
      body.classList.remove("t_body");
    };
  }
};
forvard1.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "none";
  modal2.classList.add("active");
  back2.onclick = function (event11) {
    event11.preventDefault();
    modal.style.display = "block";
    modal2.classList.remove("active");
  };
  closeBtn.onclick = () => {
    form.classList.remove("active");
    body.classList.remove("t_body");
  };
};
forvard2.onclick = function (event2) {
  event2.preventDefault();
  modal2.style.display = "none";
  modal3.classList.add("active");
  back3.onclick = function (event11) {
    event11.preventDefault();
    modal2.style.display = "block";
    modal3.classList.remove("active");
  };
  closeBtn.onclick = () => {
    form.classList.remove("active");
    body.classList.remove("t_body");
  };
};
forvard3.onclick = function (event3) {
  event3.preventDefault();
  modal3.style.display = "none";
  modal4.classList.add("active");
  back4.onclick = function (event11) {
    event11.preventDefault();
    modal3.style.display = "block";
    modal4.classList.remove("active");
  };
  closeBtn.onclick = () => {
    form.classList.remove("active");
    body.classList.remove("t_body");
  };
};
forvard4.onclick = function (event2) {
  event2.preventDefault();
  modal4.style.display = "none";
  modal5.classList.add("active");
  back5.onclick = function (event11) {
    event11.preventDefault();
    modal4.style.display = "block";
    modal5.classList.remove("active");
  };
  closeBtn.onclick = () => {
    form.classList.remove("active");
    body.classList.remove("t_body");
  };
};
forvard5.onclick = function (event2) {
  event2.preventDefault();
  modal5.style.display = "none";
  modal6.classList.add("active");
  back6.onclick = function (event11) {
    event11.preventDefault();
    modal5.style.display = "block";
    modal6.classList.remove("active");
  };
  closeBtn.onclick = () => {
    form.classList.remove("active");
    body.classList.remove("t_body");
  };
};
forvard6.onclick = function (event2) {
  event2.preventDefault();
  modal6.style.display = "none";
  modal7.classList.add("active");
  back7.onclick = function (event11) {
    event11.preventDefault();
    modal6.style.display = "block";
    modal7.classList.remove("active");
  };
  closeBtn.onclick = () => {
    form.classList.remove("active");
    body.classList.remove("t_body");
  };
};

let forma = document.getElementById("forma");
const forvard8 = document.querySelector(".forvard8");
forvard8.onclick = function formSend(ev) {
  let error = formValidate(forma);
  let formData = new FormData(forma);

  if (error === 0) {
  } else {
    ev.preventDefault();
  }
};

function formValidate(forma) {
  let error = 0;
  const formReq = document.querySelectorAll("._req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formremoveError(input);
    if (input.classList.contains("_phone")) {
      if (phoneTest(input)) {
        formaddError(input);
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError(input);
      error++;
    } else {
      if (input.value === "") {
        formaddError(input);
        error++;
      }
    }
  }
  return error;
}
function formaddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}
function formremoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}
function phoneTest(input) {
  return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
}
