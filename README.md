# React Shopping App

![Nike Shoes](https://i.pinimg.com/236x/1f/9d/ca/1f9dcac4e16c4b2582b43f70cfb0f630.jpg)

## Description

This repository contains a simple React shopping app with two main components - `CartItem` and `Search`. The app allows users to search for shoes, view search results, and interact with individual shop items.

## Components

### 1. CartItem Component

The `CartItem` component represents an item in the shopping cart. It includes a price button that toggles between displaying the actual price and the text "Price". Users can increment and decrement the item count.

#### Usage

```jsx
import CartItem from "./CartItem";

// Example usage in another component
<CartItem item={/* item data */} decrement={/* decrement function */} increment={/* increment function */} />
2. Search Component
The Search component enables users to search for shoes within the available shop items. It includes a search input, a search button, and displays the search results using the ShopItem component.

Usage
jsx
Copy code
import Search from "./Search";

// Example usage in another component
<Search shopItems={/* array of shop items */} addToCart={/* addToCart function */} />
3. ShopItem Component
The ShopItem component represents an individual item in the shop. It includes an image, name, description, price, and an "ADD TO CART" button that dynamically changes based on the item's inCart status.

Usage
jsx
Copy code
import ShopItem from "./ShopItem";

// Example usage in another component
<ShopItem item={/* item data */} addToCart={/* addToCart function */} />
Installation
Clone the repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run npm start to start the development server.
Feel free to explore and enhance the app based on your requirements. Happy coding!
