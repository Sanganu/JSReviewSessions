// JS uses objects within a prototypal inheritance model
// ES 2015 or ES6 --> Class keyword was introduced but the it does not change JS's prototypal inheritance model

// Activity-1

class BookInventory{
    constructor(title,author,ISBN,stock){
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.stock = stock
    }
    checkInventory(){
        if (this.stock === 0){
            return "Out of stock" + this.stock
        }
        else if (this.stock < 10){
            return "Low Inventory" + this.stock
        }else{
            return "In stock" + this.stock
        }
    }

    updateInventory(sales){
    let orderitems = sales || 1
      this.stock = this.stock-orderitems
    }
    setStock(purchase){
        let orderitems = purchase || 5
        this.stock = this.stock + purchase
    }
}


//Using  Function

function Books(title,author,ISBN,stock){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.stock = stock;
}

Books.prototype.getStock =  function(){
    if (this.stock === 0){
        return "Out of stock" + this.stock
    }
    else if (this.stock < 10){
        return "Low Inventory"+ this.stock
    }else{
        return "In stock" + this.stock
    }
}

Books.prototype.setAddStock = function(purchase = 5){
 
    this.stock = this.stock-purchase
}


Books.prototype.setSubStock = function(sales = 1){
 
    this.stock = this.stock-sales
}
console.log("========================================")
console.log("Function Style")
console.log("========================================")
const HP = new Books("Harry Potter","J.K.Rowling","2198392",25)
console.log(HP.getStock())
HP.setAddStock(1)
console.log(HP.getStock())
HP.setSubStock(20)
console.log(HP.getStock())
console.log("========================================")
console.log("Class Component")
console.log("========================================")
const PJ = new BookInventory("Percy Jackson","Rick Rordan","2192932",45)
console.log(PJ.checkInventory())
PJ.updateInventory(10)
console.log(PJ.checkInventory())
PJ.updateInventory(29)
console.log(PJ.checkInventory())
PJ.setStock(22)
console.log(PJ.checkInventory())


console.log("========================================")