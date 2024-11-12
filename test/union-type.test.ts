describe('Union Type', () => {
    it('should support union', () => {
        let sample: string | number | boolean = "Kevin"
        sample = true

        console.info(sample)
    });
    it('should union function', () => {
        function process(value:string | number | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value + 2
            }else{
                return !value
            }
        }
        expect(process("kevin")).toBe("KEVIN")
        expect(process(100)).toBe(102)
        expect(process(false)).toBe(true)
    });
    
});
