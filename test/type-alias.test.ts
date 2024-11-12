import { Category,Product } from "../src/type-alias";
describe('Type Alias', () => {
    it('should be alias', () => {
        const category: Category = {
            id:1,
            name: "Shirt"
        }
        const product: Product = {
            id:1,
            name:"Baju panjang",
            price:200000000,
            category: category
        }
        console.info(product)
    });
    
});
