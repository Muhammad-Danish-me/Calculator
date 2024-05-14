var input = document.getElementById("input-box");
var buttons = document.querySelectorAll("button");

var string = "";
var arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "Clear") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "Backspace") {
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
