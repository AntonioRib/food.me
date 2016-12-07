angular.module('starter.services', [])
    .factory('Users', function () {
        var users = [{
            id: 0,
            name: 'Jose Alcino',
            check: 0,
        }];
        return {
            all: function () {
                return users;
            },
            getById: function (userID) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === parseInt(userID)) {
                        return users[i];
                    }
                }
                return null;
            },
        };
    })
.factory('Foods', function () {
    var foods = [{
        id: 0,
        name: 'Normal Burguer',
        img: 'img/hamburguer.jpg',
        description: 'A nice burguer',
        price: 7.99,
        categories: ['Recommended', 'Meat'],
        ingredients: ['Bread', 'Meat', 'Lettuce']
    },
    {
        id: 1,
        name: 'Deluxe Burguer',
        img: 'img/hamburguer.jpg',
        description: 'A nice premium burguer',
        price: 9.99,
        categories: ['Recommended', 'Meat'],
        ingredients: ['Bread', 'Meat', 'Egg', 'Lettuce']
    },
    {
        id: 2,
        name: 'Salt-and-Pepper Steak',
        img: 'img/meat.jpg',
        description: 'versatile, and crazy tasty? Skirt steak. It also cooks in a flash, which make it tailor-made for grilling.',
        price: 7.99,
        categories: ['Meat'],
        ingredients: ['Salt', 'Pepper', 'Meat']
    },
{
    id: 3,
    name: 'Chicken Schnitzel',
    img: 'img/meat.jpg',
    description: 'This classic chicken Schnitzel recipe sounds harder to make than it is. Plus, you get to pound out the days stress.',
    price: 5.35,
    categories: ['Recommended', 'Meat'],
    ingredients: ['Chicken', 'Salt', 'Pepper', 'Egg', 'Mustard']
},
{
    id: 4,
    name: 'Parmesan Chicken Cutlets',
    img: 'img/meat.jpg',
    description: 'If you cut the chicken into smaller pieces before breading, theyre nuggets, the guilt-free kind.',
    price: 7.99,
    categories: ['Meat'],
    ingredients: ['Chicken', 'Salt', 'Pepper', 'Egg', 'Mustard']
},
{
    id: 5,
    name: 'Slow-Roasted Salmon',
    img: 'img/fish.jpg',
    description: 'Slow-Roasted Salmon With Fennel, Citrus, And Chiles Dont bother trying to divide this fillet into tidy portions. Instead, use a spoon to break it into perfectly imperfect pieces.',
    price: 9.99,
    categories: ['Recommended', 'Fish'],
    ingredients: ['Salmon', 'Orange', 'Lemon', 'Salt']
},
{
    id: 6,
    name: 'Baked Sardines in Pepperonata',
    img: 'img/fish.jpg',
    description: 'If you dont like sardines, says Gjelina chef Travis Lett, youre going to today. Make sure to ask your fishmonger to remove the center bones for these baked sardines but leave the head and tail intact and serve over pepperonata.',
    price: 8.99,
    categories: ['Fish'],
    ingredients: ['Sardines', 'Red Pepper', 'White wine']
},
{
    id: 7,
    name: 'Tuna Salad',
    img: 'img/fish.jpg',
    description: 'Instead of using canned tuna, this recipe puts you in control of the quality of the tuna and how long to cook it. We like it on the medium-rare side.',
    price: 7.99,
    categories: ['Fish'],
    ingredients: ['Tuna', 'Beans', 'Olive oil']
},
{
    id: 8,
    name: 'Stir-Fried Grains with Shrimp and Eggs',
    img: 'img/fish.jpg',
    description: 'Stir-Fried Grains With Shrimp And Eggs Make extra grains on Sunday and use them for this lightning-quick weeknight dinner.',
    price: 14.99,
    categories: ['Fish'],
    ingredients: ['Shrimp', 'Egg', 'Soy']
},
{
    id: 9,
    name: 'Margherita Pizza',
    img: 'img/pizza.jpg',
    description: 'Simple pizza',
    price: 5.99,
    categories: ['Recommended', 'Pizzas'],
    ingredients: ['Bread', 'Tomato', 'Cheese']
},
{
    id: 10,
    name: 'Eggs Florentine pizzas',
    img: 'img/pizza.jpg',
    description: 'Indulge in a bit of pizza at home during the week with this delicious dish that is ready in a flash.',
    price: 8.99,
    categories: ['Pizzas'],
    ingredients: ['Bread', 'Tomato', 'Cheese', 'Egg']
},
{
    id: 11,
    name: 'Meatlovers mini pizzas',
    img: 'img/pizza.jpg',
    description: 'Meat lovers unite with these tasty 20-minute pizzas loaded with crispy bacon, chorizo, onion and cheese.',
    categories: ['Recommended', 'Pizzas', 'Meat'],
    price: 7.99,
    ingredients: ['Bread', 'Tomato', 'Cheese', 'Meat']
},
{
    id: 12,
    name: 'Pizza Cubano',
    img: 'img/pizza.jpg',
    description: 'Each slice is piled with toppings from your favorite sandwich',
    price: 7.99,
    categories: ['Recommended', 'Pizzas', 'Meat'],
    ingredients: ['Bread', 'Tomato', 'Cheese', 'Meat']
},
{
    id: 13,
    name: 'Pizza Primavera',
    img: 'img/pizza.jpg',
    description: 'Preheat a cookie sheet in a hot oven: This turns it into a baking stone for perfect pizza crust.',
    price: 6.99,
    categories: ['Pizzas', 'Fish'],
    ingredients: ['Bread', 'Tomato', 'Cheese', 'Anchovy']
}];

    return {
        all: function () {
            return foods;
        },
        getById: function (foodId) {
            for (var i = 0; i < foods.length; i++) {
                if (foods[i].id === parseInt(foodId)) {
                    return foods[i];
                }
            }
            return null;
        },
        getByCategory: function (category) {
            var list = [];
            for (var i = 0; i < foods.length; i++) {
                if (foods[i].categories.indexOf(category) !== -1) {
                    list.push(foods[i]);
                }
            }
            return list;
        },
    };
})

.factory('Ingredients', function () {
    var ingredients = [{
        id: 0,
        name: "Bacon"
    },
    {
        id: 1,
        name: "Extra Cheese"
    },
    {
        id: 2,
        name: "Espargus"
    },
    {
        id: 3,
        name: "Orange"
    }];
    return {
        all: function () {
            return ingredients;
        },
    }
});