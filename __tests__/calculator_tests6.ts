import {Calculator} from "../src/calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('second calculation start', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('4');
    expect(calcobj.getPanelContents()).toBe("4");
});

test('continous calculation', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('+');
    calcobj.pressButton('1');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});