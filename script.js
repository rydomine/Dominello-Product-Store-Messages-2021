var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];


//adding popup function
function popUp(id) {
  var that = this;
  this.popupEle = document.createElement("div");
  this.popupEle.classList.add("popUp");
  this.imageEle = document.createElement("img");
  this.imageEle.setAttribute("src", products[id].image);
  
  this.nameEle = document.createElement("p");
  this.priceEle = document.createElement("p");
  this.nameEle.innerHTML = "Name: " + products[id].name;
  this.priceEle.innerHTML = "Price:$" + products[id].price;
  
  this.popupEle.addEventListener("click", function() 
  {
    that.popupEle.style.display = "none";
  });
  
  this.popupEle.append(this.imageEle);
  this.popupEle.append(this.nameEle);
  this.popupEle.append(this.priceEle);

  document.body.appendChild(this.popupEle);
}

function fruits() {
  var that = this;
  this.products_list = [];
  this.fruitEle = document.createElement("p");
  this.fruitEle.classList.add("products");

  for (let i = 0; i < products.length; i++) 
  {
    this.products_list.push(new product(i));
    this.products_list[i].productEle.addEventListener("click", function() 
    {   
      var pop = new popUp(i);
    });
    
    
  this.fruitEle.appendChild(this.products_list[i].productEle);
  }
  document.body.appendChild(this.fruitEle);
}

function product(id) {
  let that = this;
  this.productEle = document.createElement("p");
  this.imageEle = document.createElement("img");
  this.imageEle.setAttribute("src", products[id].image);
  this.productEle.append(this.imageEle);
  
  
  
  this.nameEle = document.createElement("div");
  this.priceEle = document.createElement("div");
  this.productEle.classList.add("product");

  
  //setting the name and price. mouseover to change border color
  this.nameEle.innerHTML = "Name: " + products[id].name;
  this.priceEle.innerHTML = "Price: $" + products[id].price;
  
  this.productEle.addEventListener("mouseover", function() 
  {
    that.productEle.style.borderColor = products[id].color;
  });
  this.productEle.addEventListener("click", function() 
  {
    that.productEle.style.borderColor = "black";
  });
  
  
  
 //appends
 this.productEle.appendChild(this.nameEle);
 this.productEle.appendChild(this.priceEle); 
}

var fruits = new fruits();