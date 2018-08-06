import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
 const PIZZAS = [
  {id: 1, name: 'Diavola', ingredients: ['Chilli','Hot Sauce','Pepper'], 
    base: 'Flour', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/Diavola.jpg"},
    {id: 2, name: 'Vegetariana', ingredients: ['Tomatoes','Pickles','Corn'], 
    base: 'Slim', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/vegetariana.jpg"},
    {id: 3, name: 'Capriciosa', ingredients:['Tomatoes','Salami','Pepper'], 
    base: 'Fluffy', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/capriciosa.jpg"},
    {id: 4, name: 'Quattro Formaggi',ingredients:['Tomatoes','Salami','Pepper'], 
    base: 'Medium Fluffy', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/quattroformagi.jpg"},
    {id: 5, name: 'Amatriciana',ingredients:['Tomatoes','Salami','Pepper'], 
    base: 'Slim', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/amatriciana.jpg"},
    {id: 6, name: 'Calzone',ingredients:['Tomatoes','Salami','Pepper'], 
    base: 'Flour', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/calzone.jpg"},
    {id: 7, name: 'Carnivora',ingredients:['Tomatoes','Salami','Meat'], 
    base: 'Slim', price: 20, numberOfPizzas: 0, numberOfAllowedToppings: 3,
    image:"../../assets/carnivora.jpg"}
  ];
    return {PIZZAS};
  }
}