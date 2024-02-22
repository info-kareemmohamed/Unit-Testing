
const {capitalizeTextFirstChar, createArray, random } = require('../lab1')

describe("capitalizeTextFirstChar", () => {

    it("should return a string when given a string input", () => {
        const inputText = "this is a test";
    
        const result = capitalizeTextFirstChar(inputText);
    
        expect(typeof result).toEqual("string");
      });

      it("should capitalize the first character of each word in the string", () => {
        const result = capitalizeTextFirstChar("test case for capitalizing");
        expect(result).toEqual("Test Case For Capitalizing");
    });


    })


    describe("createArray function", () => {
        it("should return an array", () => {
            const result = createArray(5);
            expect(Array.isArray(result)).toBe(true);
        });
    
        it("should return an array of length 'length' and includes 1", () => {
            const length = 2;
            const result = createArray(length);
            expect(result.length).toEqual(length);
            expect(result.includes(1)).toBe(true);
        });
    
        it("should return an array of length 'length' and does not include 'length'", () => {
            const length = 3;
            const result = createArray(length);
            expect(result.length).toEqual(length);
            expect(result.includes(length)).toBe(false);
        });
    });

    describe("random function", () => {
        it("should return a number", () => {
            const result = random(1, 10);
            expect(typeof result).toBe("number");
        });
    
        it("should return a number >= min and <= max", () => {
            const min = 5;
            const max = 7;
            const result = random(min, max);
            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        });
    
        it("should return NaN if only one argument is passed", () => {
            const result = random(3);
            expect(isNaN(result)).toBe(true);
        });
    });

// describe("removeDuplicate function",()=>{

//     it("expect to return [1,2,3] when passing [1,1,2,3,3]",()=>{
//       expect(removeDuplicate([1,1,2,3,3])).toEqual([1,2,3])
//     })

//     it("expect to return array of length 3 when passing [1,1,2,3,3]",()=>{
//       expect(removeDuplicate([1,1,2,3,3])).toHaveSize(3)
//     })

//     it("expect to return array type",()=>{
//        expect(removeDuplicate([1,1,2])).toEqual(jasmine.any(Array))
//     })

// })


// // describe("",()=>{

// // })