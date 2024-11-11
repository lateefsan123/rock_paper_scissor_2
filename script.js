///these are the user buttons query selects
const your_button_1 = document.querySelector(".your-buttons-1");
const your_button_2 = document.querySelector(".your-buttons-2");
const your_button_3 = document.querySelector(".your-buttons-3");


///restart button query select
const restart_button = document.querySelector(".rst");


const icons = document.querySelector("i");

restart_button.addEventListener("mouseover", function (e) {
    e.target.style.width = "120px";
    e.target.style.height = "60px";
})

restart_button.addEventListener("mouseout", function (e) {
    e.target.style.width = "110px";
    e.target.style.height = "50px";
})

///mouse over your button function
function over (e) {
    e.target.style.backgroundColor = "greenyellow";
};


function over_2 (e) {
    e.target.style.backgroundColor = "greenyellow";
    your_button_1.backgroundColor = "greenyellow"

}


///mouse out of your button function
function out (e) {
    e.target.style.backgroundColor = "lightgreen";
    const icon = e.target.querySelector("i");
    if (icon) {
    icon.style.backgroundColor = "transparent";  // Change the icon's color when hovered
    }
};


your_button_1.addEventListener("mouseover", over);
your_button_2.addEventListener("mouseover", over);
your_button_3.addEventListener("mouseover", over);
your_button_1.addEventListener("mouseout", out);
your_button_2.addEventListener("mouseout", out);
your_button_3.addEventListener("mouseout", out);

