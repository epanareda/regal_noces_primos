var combination = [1,2,3,4,5,6,7]

var button = document.getElementById("safe-button");
var open_btn = document.getElementById("safe-handler")

button.addEventListener("click", function (){
    result = get_combination()
    if(result) {
        alert("VAMOS ALLA!!!")
        unlock_safe()
    }
    else {
        alert("MEEEEEEC!!!\nIncorrecte!\nA veure si estem més el cas... ¬¬")
        reset_combination()
    }
    
});

open_btn.addEventListener("click", function(){
    location.href = "location.html"
})

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
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;
    var num7 = document.getElementById("num7").value;

    comb_arr = [num1, num2, num3, num4, num5, num6, num7]

    return check_combination(comb_arr)
}

function reset_combination() {
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    document.getElementById("num3").value = 0;
    document.getElementById("num4").value = 0;
    document.getElementById("num5").value = 0;
    document.getElementById("num6").value = 0;
    document.getElementById("num7").value = 0;
}

function unlock_safe() {
    button.disabled = true
    button.classList.remove("safe-button")
    open_btn.style.visibility = "visible"
    document.getElementsByClassName("lock-img")[0].src = "images/lock-open.png"
    document.getElementById("num1").disabled = "disabled";
    document.getElementById("num2").disabled = "disabled";
    document.getElementById("num3").disabled = "disabled";
    document.getElementById("num4").disabled = "disabled";
    document.getElementById("num5").disabled = "disabled";
    document.getElementById("num6").disabled = "disabled";
    document.getElementById("num7").disabled = "disabled";
}