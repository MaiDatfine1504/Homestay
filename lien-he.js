const FormField = document.querySelectorAll(".form__field");
const FormInput = document.querySelectorAll(".form__input");
const AnimationClass = "is-focus";

function getSelectValue() {
    const FormFieldSelect = document.getElementById("form__phonenumber");
    const FormSelect = document.querySelector(".form__input.form__select");
    const SelectValue = FormSelect.value;
    var ValueDisplay = document.querySelector(".form__phonenumber");

    if(SelectValue != "") {
        FormFieldSelect.classList.add(AnimationClass);
        ValueDisplay.innerHTML = "+ " + SelectValue + " | ";
        FormInput[2].style.marginLeft = "65px";
        FormInput[2].style.width = "calc(100% - 60px)";
    }
    return SelectValue;
}

for(let i = 0; i < FormInput.length; ++i) {
    FormInput[i].addEventListener("focus", () => {
        FormField[i].classList.add(AnimationClass);
    });
}
for(let i = 0; i < FormInput.length; ++i) {
    FormInput[i].addEventListener("blur", () => {
        if(placeholderShown(FormInput[i]) || ((i == 1 && getSelectValue() != ""))) {
            return;
        }
        else {
            FormField[i].classList.remove(AnimationClass);
        }
    });
}

function placeholderShown(Input) {
    if(Input.getAttribute('placeholder') && Input.value != "") {
        return true;
    }
    return false;
}