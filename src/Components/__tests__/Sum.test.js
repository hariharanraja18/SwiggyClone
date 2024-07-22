import { Sum } from "../../utils/Sum"

test("should return sum of two numbers",()=>{
    const result = Sum(3,4);
    expect(result).toBe(7);
})