describe('Data Type', () => {
    it('should be use same data type', () => {
        const name: string = "1231"
        const array: any[]= ["Kevin",1212,300,true];
        console.info(array)
    });
    it('read only array', () => {
        const hobby: ReadonlyArray<string>= ["membaca", "makan", "minum"]
        console.info(hobby)
    });
    it('should tuple', () => {
        const menu: readonly[string, number]= ["jus",2]
        console.info(menu[0])
    });
    
    
});
