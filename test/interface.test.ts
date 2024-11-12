import { Manager } from "../src/employee";
import { Seller } from "../src/seller"

describe('interface', () => {
    it('shoud be interface', () => {
        
    const seller: Seller = {
        id : 2,
        name: "Kevin",
        nib: "123213123",
        npwp:"123139191"
    }
    console.info(seller)
    });
    
    it('shouldbe interface function',()=>{
        interface SumFunction{
            (value1:number, value2:number):number
        }
        const sumFunction: SumFunction = (value1: number, value2:number):number=>{
            return value1 + value2
        }
        expect(sumFunction(12,3)).toBe(15)
    })
    it('should support index interface', () => {
        interface StringArray{
            [index:number]:string
        }
        const namaMakanan:StringArray = ['Bakso', 'Nasi Goreng']
        console.info(namaMakanan)
    });
    it('shouldbe support extends interface', () => {
        const manager: Manager = {
            id:1,
            name: "joko martin",
            address: "Kajarta",
            numberOfEmployee: 200
        }
        console.info(manager)
    });
    
    it('sould support function interface', () => {
        interface Person {
            name: string,
            sayHello(name:string): string
        }
        const helloHegi:Person = {
            name :  "Hegi",
            sayHello : (name)=>{
                return `Hello ${name}`
            }
        }
        console.info(helloHegi.sayHello("Hegi"))
    });
    it('should support intersection types', () => {
        interface HasId{
            id: number
        }
        interface HasName{
            name: string
        }
        type Domain = HasId & HasName
        const domain:Domain= {
            id:2,
            name:"biawak.com"
        }
        console.info(domain)
    });
    
 })