export enum CustomerType{
    Regular = 'Regular',
    Gold = 'Gold',
    Platinum = 'Platinum'
}
export type Customer = {
    id:number,
    name: string,
    type: CustomerType
}