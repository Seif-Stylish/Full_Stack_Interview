var outputs = [];
var globalIndex = 0;
var side_bar_index = 0;

$(".calculate_btn").click(function () {

    var input1 = Number(Array.from(document.querySelectorAll(".input"))[0].value);
    var input2 = Number(Array.from(document.querySelectorAll(".input"))[1].value);
    var selectedElement = document.querySelector(".operation").value;
    var output;

    if (selectedElement == 1) {
        output = input1 + input2
    }
    else if (selectedElement == 2) {
        output = input1 - input2
    }
    else if (selectedElement == 3) {
        output = input1 * input2
    }
    else if (selectedElement == 4) {
        output = input1 / input2
    }
    else {
        alert("invalid operator");
    }

    outputs.push(
        {
            input1,
            input2,
            selectedElement,
            output
        }
    );

    Array.from(document.querySelectorAll(".input"))[0].value = "";
    Array.from(document.querySelectorAll(".input"))[1].value = "";
    document.querySelector(".operation").value = 1;

    document.querySelector(".output").innerHTML += `
        <h2 class='text-primary'>input 1: ${output}</h2>
        <div class="p-3">
            <select class="form-control new_operation">
                <option value="1">Addition</option>
                <option value="2">Subctraction</option>
                <option value="3">Multiplication</option>
                <option value="4">Division</option>
            </select>
        </div>
        <div class='p-3'>
            <input type="number" class="form-control new_input" placeholder="input 2">
            <button class="btn btn-primary m-3 new_calc_btn" onclick='calculate_new_operation(${globalIndex} , ${output})'>calculate</button>
        </div>
    `;

    $(".calculate_btn").css("display", "none");

    side_bar_index++;

})

function calculate_new_operation(index, output) {

    var input1 = Number(output);
    var input2 = Number(document.querySelectorAll(".new_input")[index].value);
    var selectedElement = document.querySelectorAll(".new_operation")[index].value;
    var new_output;

    if (selectedElement == 1) {
        new_output = input1 + input2
    }
    else if (selectedElement == 2) {
        new_output = input1 - input2
    }
    else if (selectedElement == 3) {
        new_output = input1 * input2
    }
    else if (selectedElement == 4) {
        new_output = input1 / input2
    }
    else {
        alert("invalid operator");
    }

    outputs.push(
        {
            input1,
            input2,
            selectedElement,
            output: new_output
        }
    );

    Array.from(document.querySelectorAll(".new_input"))[index].value = "";

    Array.from(document.querySelectorAll(".new_calc_btn"))[index].style.display = "none";

    globalIndex++;

    document.querySelector(".output").innerHTML += `
        <h2 class='text-primary'>input 1: ${new_output}</h2>
        <div class="p-3">
            <select class="form-control new_operation">
                <option value="1">Addition</option>
                <option value="2">Subctraction</option>
                <option value="3">Multiplication</option>
                <option value="4">Division</option>
            </select>
        </div>
        <div class='p-3'>
            <input type="number" class="form-control new_input" placeholder="input 2">
            <button class="btn btn-primary m-3 new_calc_btn" onclick='calculate_new_operation(${globalIndex} , ${new_output})'>calculate</button>
        </div>
    `;

    side_bar_index++;

}

var side_bar_operations = Array.from(document.querySelectorAll(".side_bar .container h2"));

for (var i = 0; i < side_bar_operations.length; i++) {
    side_bar_operations[i].addEventListener("click", getSelectedOption);
}

function getSelectedOption() {
    var index = side_bar_operations.indexOf(this);

    if (side_bar_index >= 1) {
        document.querySelectorAll(".new_operation")[globalIndex].value = index + 1;
    }
    else {
        document.querySelector(".operation").value = index + 1;
    }
}




