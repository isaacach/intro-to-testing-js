// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return false when passed "" as an input', function() {
        expect(sayHello("")).toBe(false);
    });
    it('should return false when passed "23" as an input', function() {
        expect(sayHello("23")).toBe(false);
    });
    it('should return false when passed 23 as an input', function() {
        expect(sayHello(23)).toBe(false);
    });
    it('should return false when passed null as an input', function() {
        expect(sayHello(null)).toBe(false);
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when passed 5 as an input', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed "5" as an input', function() {
        expect(isFive("5")).toBe(false);
    });
    it('should return false when passed 23 as an input', function() {
        expect(isFive(23)).toBe(false);
    });
    it('should return false when passed null as an input', function() {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when passed undefined as an input', function() {
        expect(isFive(undefined)).toBe(false);
    });

});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return true when passed 6 as an input', function() {
        expect(isEven(6)).toBe(true);
    });
    it('should return true when passed "8" as an input', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return true when passed -4 as an input', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 23 as an input', function() {
        expect(isEven(23)).toBe(false);
    });
    it('should return false when passed "banana" as an input', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return false when passed Infinity as an input', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed false as an input', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed null as an input', function() {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when passed undefined as an input', function() {
        expect(isFive(undefined)).toBe(false);
    });

});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when passed "a" as an input', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed "E" as an input', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "g" as an input', function() {
        expect(isVowel('g')).toBe(false);
    });
    it('should return false when passed 23 as an input', function() {
        expect(isVowel(23)).toBe(false);
    });
    it('should return false when passed "banana" as an input', function() {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when passed false as an input', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed true as an input', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed as an open function', function() {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return true when passed -3, -9 as inputs', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed "5", 6 as inputs', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 5 when passed 2, 3 as inputs', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return NaN when passed "banana", "split" as inputs', function() {
        expect(Number.isNaN(add('banana', 'split'))).toBe(true);
    });
    it('should return NaN when passed 2, "apples" an inputs', function() {
        expect(Number.isNaN(add(2, 'apples'))).toBe(true);
    });
    it('should return NaN when passed as an open function', function() {
        expect(Number.isNaN(add())).toBe(true);
    });
});
// add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN