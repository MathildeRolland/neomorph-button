const button = document.querySelector('.button');
button.addEventListener("click", () => {
    button.classList.add('animated');
    //500ms before the class is removed:
    setTimeout(function() {
        button.classList.remove("animated");
    }, 500);
});
