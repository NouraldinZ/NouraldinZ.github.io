	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.15
	},
                
    {
        name: "asparagus",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.75
    },
                
                
	{
		name: "Leafy greens",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.35
	},
                
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 1.99
    },
                
    {
        name: "carrots",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 3.15
    },
                
    {
        name: "beef",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 5.50
    },
                
    {
        name: "pork chops",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 3.55
    },
                
    {
        name: "Cookies",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        price: 1.49
    },
                
    {
        name: "fish",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 7.15
    },
                
    {
        name: "cereal",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.75
    },
                
    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 3.10
    },

    {
        name: "turkey",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 2.55
    },
                
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
        organic: false,
		price: 10.00
	}
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
    
    for (var i=0; i<prods.length-1 ; i++){
        if (i+1 != prods.length){
        if (prods[i].price > prods[i+1].price){
            var temp = prods[i];
            prods[i] = prods[i+1];
            prods[i+1] = temp;
        }}
        
    }
    
	for (let i=0; i<prods.length; i+=1) {
        
		if ((restriction == "Vegetarian-GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
            product_names.push(prods[i]);
        }
        else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
        else if ((restriction == "Organic") && (prods[i].organic == true)){
            product_names.push(prods[i]);
        }
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
