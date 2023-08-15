const slider__wrapper = document.querySelector(".slider__wrapper");
firstImg = slider__wrapper.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".slider i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        slider__wrapper.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});


const autoSlide = () => {
    if(slider__wrapper.scrollLeft == (slider__wrapper.scrollWidth - slider__wrapper.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let varDifference = firstImgWidth - positionDiff;
    if(slider__wrapper.scrollLeft > prevScrollLeft) {
        return slider__wrapper.scrollLeft += positionDiff > firstImgWidth / 4 ? varDifference : -positionDiff;
    }
    return slider__wrapper.scrollLeft -= positionDiff > firstImgWidth / 4 ? varDifference : -positionDiff;
}
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider__wrapper.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider__wrapper.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider__wrapper.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
    isDragStart = false;
    slider__wrapper.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slider__wrapper.addEventListener("mousedown", dragStart);
slider__wrapper.addEventListener("touchstart", dragStart);
slider__wrapper.addEventListener("mousemove", dragging);
slider__wrapper.addEventListener("touchmove", dragging);
slider__wrapper.addEventListener("mouseup", dragStop);
slider__wrapper.addEventListener("mouseleave", dragStop);
slider__wrapper.addEventListener("touchend", dragStop);

//Horizontal Menu
const ButtonOn = document.querySelector(".btn__menu__on");
const ButtonOff = document.querySelector(".btn__menu__off");
const Menu = document.querySelector(".hz__menu__wrapper");
const FocusClass = "is-focus";

ButtonOn.addEventListener("touchstart", () => {
    Menu.classList.add(FocusClass);
    ButtonOn.style.display = "none";
    ButtonOff.style.display = "block";
});
ButtonOff.addEventListener("touchstart", () => {
    Menu.classList.remove(FocusClass);
    ButtonOn.style.display = "block";
    ButtonOff.style.display = "none";
});

//Header
const Header = document.querySelector(".header");
const ToggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const CurrentScroll = window.pageYOffset;
    var Width = window.clientWidth;
    var MaxScroll;

    if(Width > 900) {
        MaxScroll = 600;
    }
    else {
        MaxScroll = 200;
    }
    if(CurrentScroll > MaxScroll) {
        Header.classList.add(ToggleClass);
    }
    else {
        Header.classList.remove(ToggleClass);
    }
});

