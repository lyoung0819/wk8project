import {v4 as uuidv4} from 'uuid';
let myuuid = uuidv4();
console.log('Your UUID is: ' + myuuid);

// Step 2: Create Some Types

type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

type User = {
    id: string,
    name: string,
    age: number,
    cart: Item[]
}


// Step 3: Create some functions
// createUser
//     this function will return an object of type User. It will autogenerate an UUID for the id. It will require name, and age to be passed in as arguments. It will also initialize an empty cart.

function createUser(name:string, age:number): User {
    let cart: Item[] = [] // initialize empty cart
    return { // return user info 
        id: uuidv4(),
        name: name,
        age: age,
        cart: cart
     }
}
    // createItem
    //     this function will return an object of type Item. It will autogenerate an UUID for the id. It will require name, price, and description to be passed in as arguments.
   
   function createItem(name:string, price:number, description:string): Item{
        return {
            id: uuidv4(),
            name: name,
            price: price,
            description: description
        }
   }
   
    // addToCart
    //     this function will bring an object of Item Type and an User object and it will add the item to the users cart
   
    function addToCart(item:Item, user:User):void {
     }

   
    // removeFromCart
    //     this function will bring an object of Item Type and an User object and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left)
    // removeQuantityFromCart
    //     this function will bring an object of Item Type and an User object and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass inthe red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart)
    // cartTotal
    //     this function will calculate the total price of all items in our cart and RETURNS that value
    // printCart
    //     this function will take a user and console log the items in the users cart
