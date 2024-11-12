import { Customer, CustomerType } from "../src/enum";
describe('Enum Type', () => {
    it('should enum data type', () => {
        const customerDetail:Customer={
            id:12,
            name:"denis",
            type: CustomerType.Gold
        }
        console.info(customerDetail)
    });
    
    
});
