describe('Function typescript', () => {
    it('should support void function', () => {
        function sayHello(name:string):void {
            console.info(`Hello ${name}`)
        }
        sayHello("Denis")
    });
    it('should support default parameters', () => {
        function sayGrade(grade: number = 0):void {
            console.info(`My grade is ${grade}`)
        }
        sayGrade()
    });
    it('should support rest parameters', () => {
        function sumData(...values:number[]):number {
            let total = 0
            for(const value of values){
                total += value
            }
            return total
        }
        console.info(sumData(2,3,12,4,12))
    });
    
    it('should support optional parameter', () => {
        function sayFullName(firstName: string, lastName?:string):string {
            return lastName ?  `Hello my name ${firstName} ${lastName}` :  `Hello my name ${firstName}`
        }
       console.info(sayFullName("Denis"))
    });

    it('should support function overloading', () => {
        function callMe(value: string):string;
        function callMe(value: number):number;
        function callMe(value:any) {
            if (typeof value == 'string') {
                return value
            }else if(typeof value == 'number'){
                return value
            }
        }
        expect(typeof callMe('hello')).toBe('string')
        expect(typeof callMe(892929)).toBe('number')
    });

    it('should support function as parameter', () => {
        function sayHello(name:string, toUpperCase : (value : string)=>string): string{
            return `Hello ${toUpperCase(name)}`
        }

        function toUpperCase(value:string):string{
            return value.toUpperCase();
        }

        expect(sayHello("Kevin", toUpperCase)).toBe("Hello KEVIN");
        expect(sayHello("Kevin", (value:string)=>value.toLowerCase())).toBe("Hello kevin");


    });
    
    
});
