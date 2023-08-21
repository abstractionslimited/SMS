# Application

- contains application business rules

## Use Cases

- contains applications specific business rules/logic
- It encapsulates and implements all of the use cases of the system.
- Use cases manage (orchestrate) the flow of data to and from entities
- This layer’s changes must not affect entities
- This layer should also not be affected by changes in database, the ui or any of the common frameworks

> Its a set of instructions from executing things from start to finish using a block of code. Its like a recipe that helps the computer know what to do.
>

```jsx
// Use Case: Adding an Item to the Cart

// Step 1: User clicks on "Add to Cart" button
document
  .getElementById("add-to-cart-button")
  .addEventListener("click", function () {
    // Step 2: Get the details of the selected item
    const itemName = document.getElementById("item-name").innerText;
    const itemPrice = parseFloat(
      document.getElementById("item-price").innerText
    );

    // Step 3: Create an object to represent the item
    const newItem = {
      name: itemName,
      price: itemPrice,
      quantity: 1,
    };

    // Step 4: Add the item to the user's cart
    // This is where you would have code to manage the cart, like an array or an object

    // Step 5: Update the cart total and display
    // This is where you would update the total price and show the cart contents to the user

    // Step 6: Show a message to the user that the item was added
    alert("Item added to cart: " + itemName);
  });
```