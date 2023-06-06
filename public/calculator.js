var Calculator = /** @class */ (function () {
    function Calculator() {
        this.panelContents = "";
        this.firstNumber = 0;
        this.markContents = "";
        this.marks = ["+", "-", "X", "/"];
        this.waitForNext = false;
    }
    Calculator.prototype.pressButton = function (b) {
        if (b == "C") {
            this.panelContents = "";
            this.waitForNext = false;
        }
        else if (this.marks.indexOf(b) !== -1) {
            this.waitForNext = true;
            this.firstNumber = parseFloat(this.panelContents);
            this.markContents = b;
            this.panelContents = "";
        }
        else if (b === "=") {
            this.waitForNext = true;
            if (this.markContents.length === 1) {
                if (this.markContents === "+") {
                    this.panelContents = (this.firstNumber + parseFloat(this.panelContents)).toString();
                }
                if (this.markContents === "-") {
                    this.panelContents = (this.firstNumber - parseFloat(this.panelContents)).toString();
                }
                if (this.markContents === "X") {
                    this.panelContents = (this.firstNumber * parseFloat(this.panelContents)).toString();
                }
                if (this.markContents === "/") {
                    this.panelContents = (this.firstNumber / parseFloat(this.panelContents)).toString();
                }
                this.waitForNext = true;
            }
        }
        else {
            if (this.waitForNext) {
                this.panelContents = b;
                this.waitForNext = false;
            }
            else {
                this.panelContents += b;
            }
        }
    };
    Calculator.prototype.getPanelContents = function () {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        else if (this.waitForNext) {
            return this.firstNumber.toString();
        }
        return "0";
    };
    return Calculator;
}());

var calc = new Calculator();
var panel = document.getElementById("panel");
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function (event) {
        var value = event.target.textContent;
        calc.pressButton(value);
        panel.value = calc.getPanelContents();
    });
}
