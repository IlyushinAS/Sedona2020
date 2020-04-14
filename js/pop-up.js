var form = document.querySelector(".review__form");
var formButton = document.querySelector(".review__button");
var popupFailure = document.querySelector(".pop-up--failure");
var popupSuccess = document.querySelector(".pop-up--success");
var closeFailure = document.querySelector(".pop-up__button--failure");
var closeSuccess = document.querySelector(".pop-up__button--success");
var firstname = document.querySelector(".field__input--firstname");
var lastname = document.querySelector(".field__input--lastname");
var tel = document.querySelector(".field__input--tel");
var email = document.querySelector(".field__input--email");

formButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (!firstname.value || !lastname.value || !tel.value || !email.value) {
    popupFailure.classList.add("pop-up--failure--show");
  } else {
    popupSuccess.classList.add("pop-up--success--show");
  };
});

closeFailure.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFailure.classList.remove("pop-up--failure--show");
});

closeSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("pop-up--success--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupFailure.classList.contains("pop-up--failure--show")) {
      popupFailure.classList.remove("pop-up--failure--show");
    }

    if (popupSuccess.classList.contains("pop-up--success--show")) {
      popupSuccess.classList.remove("pop-up--success--show");
    }
  }
});
