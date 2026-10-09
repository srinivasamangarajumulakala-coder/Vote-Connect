document.addEventListener("DOMContentLoaded", function () {

    console.log("VoteConnect loaded successfully.");

    // Small animation when buttons are clicked
    const buttons = document.querySelectorAll("a");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Opening:", button.innerText);

        });

    });

});