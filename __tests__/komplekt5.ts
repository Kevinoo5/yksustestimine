import {täishäälikute_arv} from "../src/f3";
test("täishäälikute arv", ()=>{
    expect(täishäälikute_arv("Tere")).toBe(2);
    expect(täishäälikute_arv("Ämblik")).toBe(2);
    expect(täishäälikute_arv("Toomas")).toBe(3);
    expect(täishäälikute_arv("Koer")).toBe(2);
});