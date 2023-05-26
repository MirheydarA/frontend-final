const products = {
    drinks: [
        {
            name: "Oleato™",
            imageurl:"https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_tight_288"
        },
        {
            name: "Hot Coffees",
            imageurl:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
        },   
        {
            name:"Hot Teas",
            imageurl:"https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288"
        }, 
        {
            name:"Hot Drinks",
            imageurl:"https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_tight_288"
        }, 
        {
            name: "Frappuccino® Blended Beverages",
            imageurl:"https://globalassets.starbucks.com/assets/7FD73D3C93AF43FFA84400A42EFC9F87.jpg?impolicy=1by1_tight_288"
        }, 
        {
            name:"Cold Coffees",
            imageurl:"https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_tight_288"
        }, 
        {
            name:"Iced Teas",
            imageurl:"https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg?impolicy=1by1_tight_288"
        }, 
        {
            name:"Cold Drinks",
            imageurl:"https://globalassets.starbucks.com/assets/358b62402a844a3e9567d70a9790032f.jpg?impolicy=1by1_tight_288"
        } 
    ],

    foods: [
        {
            name:"Hot Breakfast",
            imageurl:"https://globalassets.starbucks.com/assets/012cdfb74d294be28ca6604768408c4b.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Oatmeal & Yogurt",
            imageurl:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Bakery",
            imageurl:"https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Lunch",
            imageurl:"https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Snacks & Sweets",
            imageurl:"https://globalassets.starbucks.com/assets/d76e82a4f5434f719083b3b2d03bf008.jpg?impolicy=1by1_tight_288"
        }
    ],

    athomecoffees:[
        {
            name:"Whole Bean",
            imageurl:"https://globalassets.starbucks.com/assets/E318F702B9F6464DAF0E710B13A18AFD.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"VIA® Instant",
            imageurl:"https://globalassets.starbucks.com/assets/713f533b151b4d4d92d76eddeb06d4a2.jpg?impolicy=1by1_tight_288"
        }
    ],

    merchandises:[
        {
            name:"Cold Cups",
            imageurl:"https://globalassets.starbucks.com/assets/2F53599DD11F427CAA25B3A0D94B2AA6.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Tumblers",
            imageurl:"https://globalassets.starbucks.com/assets/fc26a4ccaf384086b701951d956b3ea8.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Mugs",
            imageurl:"https://globalassets.starbucks.com/assets/240ba4012d1447779f329e349720f374.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Water Bottles",
            imageurl:"https://globalassets.starbucks.com/assets/cbae1e06960c4bf2be4669ff9d1c68a9.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Other",
            imageurl:"https://globalassets.starbucks.com/assets/5814e3b108464af6bf3352e87576206b.jpg?impolicy=1by1_tight_288"
        }

    ],

    giftcards:[
        {
            name:"Happy Birthday",
            imageurl:"https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Thank You",
            imageurl:"https://globalassets.starbucks.com/assets/21ee04ff3a5340979275e3b9ffd2824d.jpg?impolicy=1by1_tight_288"
        },
        {
            name:"Traditional",
            imageurl:"https://globalassets.starbucks.com/assets/9e2617bd4b0744cb940c67b3fad9ca35.jpg?impolicy=1by1_tight_288"
        }
    ]


}

const containerdrink = document.querySelector(".products-row-drink");
products.drinks.forEach((drink) => {
    const imgandandname = document.createElement("div")
    const drinkNameElement = document.createElement("span");
    const drinkimg = document.createElement("img")
    drinkimg.src = drink.imageurl
    drinkNameElement.innerHTML = drink.name
    imgandandname.appendChild(drinkimg)
    imgandandname.appendChild(drinkNameElement);
    containerdrink.appendChild(imgandandname)
    imgandandname.classList.add("col-lg-6", "imgandname")
    
    const nameleft = document.createElement("a")
    const containerdrinksleft = document.querySelector(".drinks-left")
    nameleft.innerHTML = drink.name
    nameleft.classList.add("color")
    containerdrinksleft.appendChild(nameleft)
});

    const containerfood = document.querySelector(".products-row-food");
    products.foods.forEach((food) => {
    const imgandandname = document.createElement("div")
    const drinkNameElement = document.createElement("span");
    const drinkimg = document.createElement("img")
    drinkimg.src = food.imageurl
    drinkNameElement.innerHTML = food.name
    imgandandname.appendChild(drinkimg)
    imgandandname.appendChild(drinkNameElement);
    containerfood.appendChild(imgandandname)
    imgandandname.classList.add("col-lg-6", "imgandname")

    const nameleft = document.createElement("a")
    const containerfoodsleft = document.querySelector(".foods-left")
    nameleft.innerHTML = food.name
    nameleft.classList.add("color")
    containerfoodsleft.appendChild(nameleft)
});

const containermerchandise = document.querySelector(".products-row-merchandise");
products.merchandises.forEach((merchandise) => {
const imgandandname = document.createElement("div")
const drinkNameElement = document.createElement("span");
const drinkimg = document.createElement("img")
drinkimg.src = merchandise.imageurl
drinkNameElement.innerHTML = merchandise.name
imgandandname.appendChild(drinkimg)
imgandandname.appendChild(drinkNameElement);
containermerchandise.appendChild(imgandandname)
imgandandname.classList.add("col-lg-6", "imgandname")


    const nameleft = document.createElement("a")
    const containermerchandiseleft = document.querySelector(".merchandise-left")
    nameleft.innerHTML = merchandise.name
    nameleft.classList.add("color")
    containermerchandiseleft.appendChild(nameleft)
});

const containerathomecoffee = document.querySelector(".products-row-athomecoffee");
products.athomecoffees.forEach((athomecoffee) => {
const imgandandname = document.createElement("div")
const drinkNameElement = document.createElement("span");
const drinkimg = document.createElement("img")
drinkimg.src = athomecoffee.imageurl
drinkNameElement.innerHTML = athomecoffee.name
imgandandname.appendChild(drinkimg)
imgandandname.appendChild(drinkNameElement);
containerathomecoffee.appendChild(imgandandname)
imgandandname.classList.add("col-lg-6", "imgandname")

const nameleft = document.createElement("a")
    const containerathomecoffeeleft = document.querySelector(".athomecoffee-left")
    nameleft.innerHTML = athomecoffee.name
    nameleft.classList.add("color")
    containerathomecoffeeleft.appendChild(nameleft)
});



const containergiftcard = document.querySelector(".products-row-giftcard");
products.giftcards.forEach((giftcard) => {
const imgandandname = document.createElement("div")
const drinkNameElement = document.createElement("span");
const drinkimg = document.createElement("img")
drinkimg.src = giftcard.imageurl
drinkNameElement.innerHTML = giftcard.name
imgandandname.appendChild(drinkimg)
imgandandname.appendChild(drinkNameElement);
containergiftcard.appendChild(imgandandname)
imgandandname.classList.add("col-lg-6", "imgandname")

const nameleft = document.createElement("a")
    const containergiftcardleft = document.querySelector(".giftcard-left")
    nameleft.innerHTML = giftcard.name
    nameleft.classList.add("color")
    containergiftcardleft.appendChild(nameleft)
});


