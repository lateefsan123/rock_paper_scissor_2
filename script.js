///these are the user buttons query selects
const your_button_1 = document.querySelector(".your-buttons-1");
const your_button_2 = document.querySelector(".your-buttons-2");
const your_button_3 = document.querySelector(".your-buttons-3");

const cpub1 = document.querySelector(".cpub1")
const cpub2 = document.querySelector(".cpub2")
const cpub3 = document.querySelector(".cpub3")

const displayer = document.querySelector(".displayer")

u_point = document.querySelector(".u_point")
c_point = document.querySelector(".c_point")



///restart button query select
const restart_button = document.querySelector(".rst");

let user_score = 0;
let cpu_score = 0;

restart_button.addEventListener("click", function() {
    user_score = 0
    cpu_score = 0
    u_point.textContent = user_score
    c_point.textContent = cpu_score
})




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




function cpu_choice() {
    let x = Math.floor(Math.random() * 3);
    return x;

}


function play_game() {
    let cpupick;
    cpu = cpu_choice()
    if (cpu == 0) {
        cpupick = "rock"
    } else if (cpu == 1) {
        cpupick = "paper"
    } else if (cpu == 2) {
        cpupick = "scissors"
    }


}

function flash(cpu) {
    if (cpu == 0) {
        cpub1.style.backgroundColor = "white";
        setTimeout(() => cpub1.style.backgroundColor = "lightgreen", 1000);  // Reset color after 0.5s
    } else if (cpu == 1) {
        cpub2.style.backgroundColor = "white";
        setTimeout(() => cpub2.style.backgroundColor = "lightgreen", 1000);  // Reset color after 0.5s
    } else if (cpu == 2) {
        cpub3.style.backgroundColor = "white";
        setTimeout(() => cpub3.style.backgroundColor = "lightgreen", 1000);  // Reset color after 0.5s
    }
}







your_button_1.addEventListener("click", function () {
    your_choice = "rock"
    let cpupick;
    cpu = cpu_choice()
    if (cpu == 0) {
        cpupick = "rock"
        displayer.textContent = "cpu picked ✊, its a tie"
    } else if (cpu == 1) {
        cpupick = "paper"
        displayer.textContent = "cpu picked ✋, you lost"
        cpu_score+=1
    } else if (cpu == 2) {
        cpupick = "scissors"
        displayer.textContent = "cpu picked ✌️, you won"
        user_score+=1
    }

    
    flash(cpu)
    u_point.textContent = user_score
    c_point.textContent = cpu_score

    if (user_score == 5) {
        u_point.textContent = user_score
        c_point.textContent = cpu_score
        alert("YOU WON")
        user_score = 0
        cpu_score = 0
        u_point.textContent = user_score
        c_point.textContent = cpu_score

    }
    
    if (cpu_score == 5) {
        u_point.textContent = user_score
        c_point.textContent = cpu_score
        alert("You Lost")
        user_score = 0
        cpu_score = 0
        u_point.textContent = user_score
        c_point.textContent = cpu_score
    }


    
})

your_button_2.addEventListener("click", function () {
    your_choice = "paper"
    let cpupick;
    cpu = cpu_choice()
    if (cpu == 0) {
        cpupick = "rock"
        displayer.textContent = "cpu picked ✊, You won"
        user_score+=1
    } else if (cpu == 1) {
        cpupick = "paper"
        displayer.textContent = "cpu picked ✋, its a tie"
    } else if (cpu == 2) {
        cpupick = "scissors"
        displayer.textContent = "cpu picked ✌️, you lost"
        cpu_score+=1
    }


    flash(cpu)
    u_point.textContent = user_score
    c_point.textContent = cpu_score

    if (user_score == 5) {
        u_point.textContent = user_score
        c_point.textContent = cpu_score
        alert("YOU WON")
        user_score = 0
        cpu_score = 0
        u_point.textContent = user_score
        c_point.textContent = cpu_score
    }
    
    if (cpu_score == 5) {
        u_point.textContent = user_score
        c_point.textContent = cpu_score
        alert("You Lost")
        user_score = 0
        cpu_score = 0
        u_point.textContent = user_score
        c_point.textContent = cpu_score
    }


    
})

your_button_3.addEventListener("click", function () {
    your_choice = "scissors"
    let cpupick;
    cpu = cpu_choice()
    if (cpu == 0) {
        cpupick = "rock"
        displayer.textContent = "cpu picked ✊, you lost"
        cpu_score+=1
    } else if (cpu == 1) {
        cpupick = "paper"
        displayer.textContent = "cpu picked ✋, you won"
        user_score+=1
    } else if (cpu == 2) {
        cpupick = "scissors"
        displayer.textContent = "cpu picked ✌️, it's a tie"
    }


    flash(cpu)
    u_point.textContent = user_score
    c_point.textContent = cpu_score

    if (user_score == 5) {
        u_point.textContent = user_score
        c_point.textContent = cpu_score
        alert("YOU WON")
        user_score = 0
        cpu_score = 0
        u_point.textContent = user_score
        c_point.textContent = cpu_score
    }
    
    if (cpu_score == 5) {
        u_point.textContent = user_score
        c_point.textContent = cpu_score
        alert("You Lost")
        user_score = 0
        cpu_score = 0
        u_point.textContent = user_score
        c_point.textContent = cpu_score
    }



})



