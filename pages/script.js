const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-button');
const getName = document.querySelector('.profile__title');
const getCaption= document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input-name');
let jobInput = document.querySelector('.form__input-caption');


function openPopup () {
    popup.classList.add ('popup_opened');
    nameInput.value = getName.textContent;
    jobInput.value = getCaption.textcontent;
}

function closePopup () {
    popup.classList.remove ('popup_opened');
}

function formSubmitHandler (event) {
    event.preventDefault();
    getName.textContent = `${nameInput.value}`;
    getCaption.textContent = `${jobInput.value}`;
    closePopup ();
}

buttonOpenPopup.addEventListener ('click', openPopup);
popupClose.addEventListener ('click', closePopup);
formElement.addEventListener ('submit', formSubmitHandler);