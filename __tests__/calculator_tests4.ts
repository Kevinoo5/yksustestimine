import {Calculator} from "../src/calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('adding 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('25');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("58");
});

test('subtracting 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1");
});




test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('divide 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1.5");
});

test('divide 2', ()=>{
    calcobj.pressButton('333');
    calcobj.pressButton('/');
    calcobj.pressButton('111');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("3");
});