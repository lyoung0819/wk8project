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
   
    function addToCart(itemObj:Item, userObj:User):void {
        userObj.cart.push(itemObj)
        console.log(`You've added ${itemObj.name} to your cart!`)
     }


    // removeFromCart
    //     this function will bring an object of Item Type and an User object and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left)
    
    function removeFromCart(itemObj:Item, userObj:User):void {
        // check to see if item is in cart
        for (let item in userObj.cart){
            if (itemObj.name === item[1]){
                //delete the item... ???
            }
        }
        console.log(`You've removed all ${itemObj.name}(s) from your cart!`)
     }
    
    // removeQuantityFromCart
    //     this function will bring an object of Item Type and an User object and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass inthe red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart)
    
    // function removeQuantityFromCart(item:Item, quantitiy:number):void{
    // }
    
    // cartTotal
    //     this function will calculate the total price of all items in our cart and RETURNS that value



    // printCart
    //     this function will take a user and console log the items in the users cart


    // -----

//     Step 4: Create Driver Code to emulate a front end user
        // use the functions created to accomplish these tasks in order
        // Create a User
    // Create 3 Items to Sellfor this example we will call them Item A Item B and Item C (you can name them anything that make sense)
    // Add Item A to the users Cart
    //   print the contents of the user's cart
    //      print the Total of the user's cart
    // Add 3 Item B to the users Cart
    //      print the contents of the user's cart
    //      print the Total of the user's cart
    // Add 3 Item c to the users Cart
    //      print the contents of the user's cart
    //      print the Total of the user's cart
    // Use your remove (not remove by Quantity function) to remove all of Item B from your cart
    //      print the contents of the user's cart
    //      print the Total of the user's cart
    // Use your remove Quantity function to remove 2 of Item C from the user's cart
    //       print the contents of the user's cart
    //      print the Total of the user's cart
     
    
    // Verify all functions work as expected, if they don't figure out why not and fix your functions.