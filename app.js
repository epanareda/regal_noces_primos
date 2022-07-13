// Safe combination
var combination = [7,3,6,2,0,7,4]
var opened = false

// Safe sounds
var correct_snd = new Audio("audio/correct.mp3")
var incorrect_snd = new Audio("audio/incorrect.mp3")


// button to change the number of the safe combination
var btn_up_1 = document.getElementById("up-1")
var num_1 = document.getElementById("num-1")
var btn_down_1 = document.getElementById("down-1")

var btn_up_2 = document.getElementById("up-2")
var num_2 = document.getElementById("num-2")
var btn_down_2 = document.getElementById("down-2")

var btn_up_3 = document.getElementById("up-3")
var num_3 = document.getElementById("num-3")
var btn_down_3 = document.getElementById("down-3")

var btn_up_4 = document.getElementById("up-4")
var num_4 = document.getElementById("num-4")
var btn_down_4 = document.getElementById("down-4")

var btn_up_5 = document.getElementById("up-5")
var num_5 = document.getElementById("num-5")
var btn_down_5 = document.getElementById("down-5")

var btn_up_6 = document.getElementById("up-6")
var num_6 = document.getElementById("num-6")
var btn_down_6 = document.getElementById("down-6")

var btn_up_7 = document.getElementById("up-7")
var num_7 = document.getElementById("num-7")
var btn_down_7 = document.getElementById("down-7")

// buttons to check and open the safe
var button = document.getElementById("safe-button")
var open_btn = document.getElementById("safe-handler")

// Event when checking safe combination
button.addEventListener("click", function() {
    result = get_combination()
    if(result) {
        correct_snd.play()
        alert("CORRECTEEEE!!!!!! Com us hem fet suar la cansalada eeh??💗")
        unlock_safe()
    }
    else {
        incorrect_snd.play()
        alert("MEEEEEEC!!!\nIncorrecte!!!")
        reset_combination()
    }
    
});

// Event when opening the safe
open_btn.addEventListener("click", function() {
    location.href = "location.html"
})

// Event when changing the numbers on the safe
btn_up_1.addEventListener("click", function() {
    if(!opened){
        up_pos(1)
    }
})
btn_down_1.addEventListener("click", function() {
    if(!opened){
        down_pos(1)
    }
})

btn_up_2.addEventListener("click", function() {
    if(!opened){
        up_pos(2)
    }
})
btn_down_2.addEventListener("click", function() {
    if(!opened){
        down_pos(2)
    }
})

btn_up_3.addEventListener("click", function() {
    if(!opened){
        up_pos(3)
    }
})
btn_down_3.addEventListener("click", function() {
    if(!opened){
        down_pos(3)
    }
})

btn_up_4.addEventListener("click", function() {
    if(!opened){
        up_pos(4)
    }
})
btn_down_4.addEventListener("click", function() {
    if(!opened){
        down_pos(4)
    }
})

btn_up_5.addEventListener("click", function() {
    if(!opened){
        up_pos(5)
    }
})
btn_down_5.addEventListener("click", function() {
    if(!opened){
        down_pos(5)
    }
})

btn_up_6.addEventListener("click", function() {
    if(!opened){
        up_pos(6)
    }
})
btn_down_6.addEventListener("click", function() {
    if(!opened){
        down_pos(6)
    }
})

btn_up_7.addEventListener("click", function() {
    if(!opened){
        up_pos(7)
    }
})
btn_down_7.addEventListener("click", function() {
    if(!opened){
        down_pos(7)
    }
})

function num_change(up=true, num) {
    if(up) {
        if(parseInt(num.innerText)+1 == 10) {
            num.innerText = 0
        } else {
            num.innerText = parseInt(num.innerText)+1
        }
    } else {
        if(parseInt(num.innerText)-1 == -1) {
            num.innerText = 9
        } else {
            num.innerText = parseInt(num.innerText)-1
        }
    }
}

function up_pos(num) {
    if(num == 1) {
        num_change(true, num_1)
    } else if(num == 2) {
        num_change(true, num_2)
    } else if(num == 3) {
        num_change(true, num_3)
    } else if(num == 4) {
        num_change(true, num_4)
    } else if(num == 5) {
        num_change(true, num_5)
    } else if(num == 6) {
        num_change(true, num_6)
    } else if(num == 7) {
        num_change(true, num_7)
    }
}

function down_pos(num) {
    if(num == 1) {
        num_change(false, num_1)
    } else if(num == 2) {
        num_change(false, num_2)
    } else if(num == 3) {
        num_change(false, num_3)
    } else if(num == 4) {
        num_change(false, num_4)
    } else if(num == 5) {
        num_change(false, num_5)
    } else if(num == 6) {
        num_change(false, num_6)
    } else if(num == 7) {
        num_change(false, num_7)
    }
}

function check_combination(arr) {
    if(arr[0] != combination[0]) {
        return false
    }
    else if(arr[1] != combination[1]) {
        return false
    }
    else if(arr[2] != combination[2]) {
        return false
    }
    else if(arr[3] != combination[3]) {
        return false
    }
    else if(arr[4] != combination[4]) {
        return false
    }
    else if(arr[5] != combination[5]) {
        return false
    }
    else if(arr[6] != combination[6]) {
        return false
    }
    else {
        return true
    }
}

function get_combination() {
    var num1 = num_1.innerText;
    var num2 = num_2.innerText;
    var num3 = num_3.innerText;
    var num4 = num_4.innerText;
    var num5 = num_5.innerText;
    var num6 = num_6.innerText;
    var num7 = num_7.innerText;

    comb_arr = [num1, num2, num3, num4, num5, num6, num7]

    return check_combination(comb_arr)
}

function reset_combination() {
    num_1.innerText = 0
    num_2.innerText = 0
    num_3.innerText = 0
    num_4.innerText = 0
    num_5.innerText = 0
    num_6.innerText = 0
    num_7.innerText = 0
}

function unlock_safe() {
    opened = true
    button.disabled = true
    button.classList.remove("safe-button")
    open_btn.style.visibility = "visible"
    document.getElementsByClassName("lock-img")[0].src = "images/lock-open.png"

    btn_up_1.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_1.classList = "down-button-opened unselectable"

    btn_up_2.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_2.classList = "down-button-opened unselectable"

    btn_up_3.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_3.classList = "down-button-opened unselectable"

    btn_up_4.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_4.classList = "down-button-opened unselectable"

    btn_up_5.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_5.classList = "down-button-opened unselectable"

    btn_up_6.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_6.classList = "down-button-opened unselectable"

    btn_up_7.classList = "up-button-opened unselectable"
    document.getElementsByClassName("num-selector")[0].classList = "num-selector-opened unselectable"
    btn_down_7.classList = "down-button-opened unselectable"
}