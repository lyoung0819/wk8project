import {v4 as uuidv4} from 'uuid';
let myuuid = uuidv4();
console.log('Your UUID is: ' + myuuid);

// Step 2: Create Some Types

type Item = {
    readonly id: string,
    name: string,
    price: number,
    description: string
}

type User = {
    readonly id: string,
    name: string,
    age: number,
    cart: Item[]
}


// Step 3: Create some functions

// Create new user
function createUser(name:string, age:number): User {
    const newUser:User = {
        id: uuidv4(),
        name: name,
        age: age,
        cart: []
     }
    console.log(`You have created a new user: ${newUser.name}`)
    return newUser
}


// createItem   
   function createItem(name:string, price:number, description:string): Item{
        return {
            id: uuidv4(),
            name: name,
            price: price,
            description: description
        }
   }
   

// addToCart   
    function addToCart(item:Item, user:User):void {
        user.cart.push(item)
        console.log(`You've added ${item.name} to your cart!`)
     }

// removeFromCart    
    function removeFromCart(item:Item, user:User):void {
        user.cart = user.cart.filter( cartItem => cartItem.id !== item.id ) // resetting value to replace the original list, filter for all non-instances of id
        console.log(`All of your ${item.name}s have been deleted from your cart.`)
    }

// removeQuantityFromCart   
    function removeQuantityFromCart(item:Item, user:User, quantity:number):void {
        for (let idx=0; idx < quantity; idx++){
            let indexOfItem = user.cart.findIndex( createItem => createItem.id == item.id )
            user.cart.splice(indexOfItem, 1)
        }
        console.log(`You have removed ${quantity} ${item.name}s from your cart.`)
    }
    

// cartTotal    
    function cartTotal(user:User):string {
        let total = 0; // total starts at zero, for each item in our cart, add that price to the total 
        for (let item of user.cart){
            total += item.price
        }
        return `Your current total is ${total}`
    }

    // printCart
    function printCart(user:User):void {
        console.log('Your cart:')
        for (let item of user.cart){
            console.log(item.name)
        }
    }
                 
let lex = createUser('Lexie', 27)
console.log(lex)

let itemA = createItem('Coffee', 2.75, 'Medium Roast Coffee, no mods')
let itemB = createItem('Flat White', 4.25, 'Blend of micro-foamed milk, poured over espresso')
let itemC = createItem('Latte', 5.00, 'Milk coffee with esporesson, steamed milk and frother milk top layer' )

console.log('---------------')
addToCart(itemA, lex)
addToCart(itemA, lex)
printCart(lex)
cartTotal(lex)

console.log('---------------')
addToCart(itemB, lex)
addToCart(itemB, lex)
addToCart(itemB, lex)
printCart(lex)
cartTotal(lex)

console.log('---------------')
addToCart(itemC, lex)
addToCart(itemC, lex)
addToCart(itemC, lex)
printCart(lex)
cartTotal(lex)

console.log('---------------')
removeFromCart(itemB, lex)
printCart(lex)
cartTotal(lex)

console.log('---------------')
removeQuantityFromCart(itemC, lex, 2)
cartTotal(lex)
printCart(lex)