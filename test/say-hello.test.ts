import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
    it('should return Hello Kevin', () => {
        expect(sayHello("Kevin")).toBe("Hello Kevin");
    });
});
