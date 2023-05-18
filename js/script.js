var validNumber = new RegExp(/^\d*\.?\d*$/);

var inputs = document.querySelectorAll("input[type=text]");
var errors = document.querySelectorAll(".error");

var bill = 0;
var tip = 0;
var people = 0;

var bill_input = document.getElementById("bill-input");
var tip_input = document.getElementById("tip-input");
var people_input = document.getElementById("people-input");
var tip_radios = document.querySelectorAll('input[type="radio"]');

var bill_value = "";
var tip_value = "";
var people_value = "";

bill_input.addEventListener("input", function () {
    bill = bill_input.value;

    if (bill_input.value == "0") {
        bill_input.classList.add("shake");
        errors[0].innerHTML = "Can't be Zero";
        setTimeout(function () {
            bill_input.classList.remove("shake");
            errors[0].innerHTML = "";
        }, 1000);
    } else if (!validNumber.test(bill_input.value)) {
        bill_input.value = bill_value;
        bill_input.classList.add("shake");
        errors[0].innerHTML = "Only number allowed";
        setTimeout(function () {
            bill_input.classList.remove("shake");
            errors[0].innerHTML = "";
        }, 1000);
    } else {
        bill_value = bill_input.value;
        console.log(bill_value);
    }
});

tip_input.addEventListener("input", function () {
    tip = tip_input.value;

    if (tip_input.value > 100) {
        console.log("Can't be more than 100");
        tip_input.value = "";

        tip_input.classList.add("shake");
        errors[1].innerHTML = "Can't be more than 100";
        setTimeout(function () {
            tip_input.classList.remove("shake");
            errors[1].innerHTML = "";
        }, 1000);
    }

    if (tip_input.value == "0") {
        tip_input.classList.add("shake");
        errors[1].innerHTML = "Can't be Zero";
        setTimeout(function () {
            tip_input.classList.remove("shake");
            errors[1].innerHTML = "";
        }, 1000);
    } else if (!validNumber.test(tip_input.value)) {
        tip_input.value = tip_value;
        tip_input.classList.add("shake");
        errors[1].innerHTML = "Only number allowed";
        setTimeout(function () {
            tip_input.classList.remove("shake");
            errors[1].innerHTML = "";
        }, 1000);
    } else {
        tip_value = tip_input.value;
        console.log(tip_value);
    }
});

people_input.addEventListener("input", function () {
    people = people_input.value;

    if (people_input.value == "0") {
        people_input.classList.add("shake");
        errors[2].innerHTML = "Can't be Zero";
        setTimeout(function () {
            people_input.classList.remove("shake");
            errors[2].innerHTML = "";
        }, 1000);
    } else if (!validNumber.test(people_input.value)) {
        people_input.value = people_value;
        people_input.classList.add("shake");
        errors[2].innerHTML = "Only number allowed";
        setTimeout(function () {
            people_input.classList.remove("shake");
            errors[2].innerHTML = "";
        }, 1000);
    } else {
        people_value = people_input.value;
        console.log(people_value);
    }
});

for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];

    element.addEventListener("input", function () {
        if (bill > 0 && tip > 00 && people > 0) {
            var tip_amount = (bill * (tip / 100)) / people;
            var total = tip_amount + bill / people;

            document.getElementById("tip-amount-value").innerHTML =
                "$" + Math.floor(tip_amount * 100) / 100;
            document.getElementById("total-value").innerHTML =
                "$" + Math.ceil(total * 100) / 100;

            console.log(parseFloat(tip_amount).toFixed(2));
            console.log(parseFloat(total).toFixed(2));

            document.getElementById("reset-btn").classList.add("active-btn");
            document.getElementById("reset-btn").classList.remove("inactive");
        }
    });
}

tip_radios.forEach((element) => {
    element.addEventListener("change", function (event) {
        tip = event.target.value;
    });
});

tip_input.addEventListener("focus", function () {
    tip_radios.forEach((element) => {
        element.checked = false;
    });
});

document.getElementById("reset-btn").addEventListener("click", function () {
    inputs.forEach((element) => {
        element.value = "";
    });

    bill = 0;
    tip = 0;
    people = 0;

    document.getElementById("tip-amount-value").innerHTML = "$0.00";
    document.getElementById("total-value").innerHTML = "$0.00";

    document.getElementById("reset-btn").classList.add("inactive");
    document.getElementById("reset-btn").classList.remove("active-btn");
});
