window.onload = () => {
  /******** 
    VARIABLES
    *********/
  let emailState = false;
  const emailModal = document.getElementsByClassName("email-modal")[0];
  const closeButton = document.getElementsByClassName("email-modal__close-btn")[0];
  const emailInput = document.getElementsByClassName("email-modal__input")[0];
  const emailButton = document.getElementsByClassName("email-modal__button")[0];
  const thankContainer = document.getElementsByClassName("email-thank")[0];
  const declineOffer = document.getElementsByClassName("email-modal__decline-offer")[0];

  const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const showModal = () => {
    if (emailState == false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  const closeModal = () => emailModal.classList.remove("email-modal--visible");

  const addErrors = () => {
    document.getElementsByClassName("email-modal__form-group")[0].classList.add("email-modal__form-group--error");
    document.getElementsByClassName("email-modal__error-message")[0].classList.add("email-modal__error-message--active");
  };

  const removeErrors = () => {
    document.getElementsByClassName("email-modal__form-group")[0].classList.remove("email-modal__form-group--error");
    document.getElementsByClassName("email-modal__error-message")[0].classList.remove("email-modal__error-message--active");
  };

  const showThankMessage = () => {
    thankContainer.classList.add("email-thank--success");
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  /***************
   EVENT LISTENERS 
   ***************/
  //   Event that triggers when the mouse leaves the window & populates the modal
  document.body.addEventListener("mouseleave", () => {
    showModal();
  });

  //    Event that allows us to close the modal by clicking the "X" and simply removing the class so the modal is not visible anymore
  closeButton.addEventListener("click", () => {
    closeModal();
  });

  //   email button event listener
  emailButton.addEventListener("click", () => {
    // this is validating if the email entered is a valid email address. if it is then it gets logged to the console, IF NOT then we activate classes to show that it is not a valid email
    emailIsValid(emailInput.value) ? showThankMessage() : addErrors();
  });

  //   this removes the modal error class when someone tries again to add their email
  emailInput.addEventListener("click", () => {
    removeErrors();
  });

  //   when someone hits "not interested", the modal is closed
  declineOffer.addEventListener("click", () => {
    closeModal();
  });
};
