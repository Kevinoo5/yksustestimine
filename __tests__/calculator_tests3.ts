import {Calculator} from "../src/calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('multiply 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("2");
});

test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('multiply 3', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('5');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("825");
});
