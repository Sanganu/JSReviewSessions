class BookInventory{
    constructor(title,author,ISBN,stock){
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.stock = stock
    }
    //get keyword method --> property
     checkInventory(){
        if (this.stock === 0){
            return "Out of stock" , this.stock
        }
        else if (this.stock < 10){
            return "Low Inventory" ,this.stock
        }else{
            return "In stock" , this.stock
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

//Inheritance
class BookMaster extends BookInventory{
    constructor(title,author,ISBN,stock,editorial){
        super(title,author,ISBN,stock)
        this.editorial = editorial
    }
    get getEditorial(){
        return `Current version of the book : ${this.editorial}`
    }
}


const MrF = new BookMaster("Thank you,Mr.Teacher","Patricia Polacco","243233",112,4);
MrF.updateInventory(100)
let result = MrF.checkInventory()
console.log(result);
MrF.setStock(3)
console.log(MrF.checkInventory());
console.log(MrF.getEditorial);