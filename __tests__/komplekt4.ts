import {aLoendaja} from '../f2';
test('aLoendaja', () => {
    expect(aLoendaja("a")).toBe(1);
    expect(aLoendaja("b")).toBe(0);
    expect(aLoendaja("aabits")).toBe(2);
    expect(aLoendaja("AAbitsad")).toBe(3);
});