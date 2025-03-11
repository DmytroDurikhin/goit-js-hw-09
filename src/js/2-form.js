
const LS_KEY_FEEDBACK_FORM = "feedback-form-state";

function addDataToLocalStorage(key, value) {
    const normalisetData = JSON.stringify(value);
    localStorage.setItem(key, normalisetData);
}

function getDataFromLocalStorage(key) {
    const lsData = localStorage.getItem(key);

    return lsData === null ? undefined : JSON.parse(lsData); 
}

function clearDataFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function removeAllDataFromLocalStorage() {
    localStorage.clear();
}

const refs = {
    form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener("input", onInputClick);
refs.form.addEventListener("submit", onSubmit);
document.addEventListener("DOMContentLoaded", renderPage);

function onInputClick(event) {
    const { email, message } = event.currentTarget.elements;

    const userData = { email: email.value.trim(), message: message.value.trim() }

    addDataToLocalStorage(LS_KEY_FEEDBACK_FORM, userData);
}
function onSubmit(event) {
    event.preventDefault();

    const { email, message } = event.currentTarget.elements;

    if (!email.value || !message.value) {
        return alert("Fill please all fields");

        
    }

    console.log({ email: email.value.trim(), message: message.value.trim() });

    event.currentTarget.reset();
    clearDataFromLocalStorage(LS_KEY_FEEDBACK_FORM);
}

function renderPage() {
    const lsData = getDataFromLocalStorage(LS_KEY_FEEDBACK_FORM); 

    if (lsData) {
        refs.form.elements.email.value = lsData.email;
        refs.form.elements.message.value = lsData.message;
    }
}

// renderPage();

