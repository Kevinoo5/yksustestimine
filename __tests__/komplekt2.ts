import {kasPositiivne} from "../src/f1";
test("sugu m", ()=>{
    expect(kasPositiivne(3)).toBe(true);
    expect(kasPositiivne(0)).toBe(false);
    expect(kasPositiivne(-5)).toBe(false);
});