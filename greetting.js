const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetting = document.querySelector(".js-greettings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName (text) {
    localStorage.getItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greetting.classList.add(SHOWING_CN);
    greetting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null) {
        askForName();
        //she is not
    } else {
        //she is
        paintGreeting(currentUser);
    }
}



function init() {
    loadName();
}

init();