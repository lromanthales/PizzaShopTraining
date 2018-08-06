export class Pizza {
    id: number;
    name: string;
    price: number;
    ingredients: Array<any> = []; //topping
    base: string; //base
    numberOfPizzas: number;
    numberOfAllowedToppings?: number;
    image?:string;
}