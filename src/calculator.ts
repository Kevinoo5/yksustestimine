class Calculator {
    protected panelContents: string = "";
    protected firstNumber: number = 0;
    protected markContents: string = "";
    protected marks: string[] = ["+", "-", "X", "/"];
    protected waitForNext: boolean = false;

    pressButton(b: string): void {
        if (b == "C") {
            this.panelContents = ""
            this.waitForNext = false;
        } else if (this.marks.indexOf(b) !== -1) {
            this.waitForNext = true;
            this.firstNumber = parseFloat(this.panelContents);
            this.markContents = b;
            this.panelContents = "";
        } else if (b == "=") {
            this.waitForNext = true;
            if (this.markContents.length == 1) {
                if (this.markContents == "+") {
                    this.panelContents = (this.firstNumber + parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "-") {
                    this.panelContents = (this.firstNumber - parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "X") {
                    this.panelContents = (this.firstNumber * parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "/") {
                    this.panelContents = (this.firstNumber / parseFloat(this.panelContents)).toString();
                }
                this.waitForNext = true;
            }
        } else {
            if (this.waitForNext) {
                this.panelContents = b;
                this.waitForNext = false;
            } else {
                this.panelContents += b;
            }
        }

    }

    getPanelContents(): string {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        else if (this.waitForNext) {
            return this.firstNumber.toString();
        }
        return "0";
    }
}

//export {
//    Calculator
//}