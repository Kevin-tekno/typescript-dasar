describe('Optional Parameter', () => {
    it('should use null parameter', () => {
        function printName(name?:string | null) {
            if (name) {
                console.info(`Hello ${name}`)
            }else{
                console.info("Name undefined")
            }
        }
        printName(null)
    });
    
});
