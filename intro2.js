// Activity-2

class BoxOffice{
    constructor(title,director,genre,releasedOn,rating){
        this.title = title
        this.director = director
        this.genre = genre
        this.releasedOn = releasedOn
        this.rating = rating
    }
    //get keyword method --> property
    get review(){
       return `
       Title : ${this.title}
       Director : ${this.director}
       genre: ${this.genre}
       Released: ${this.releasedOn}
       Rating: ${this.rating}`
    }

    //set keyword property

    set changeRating(currentRating){
        this.rating = currentRating
    }
  
}

const Titanic = new BoxOffice("Titanic","James Cameron","Romantic","1997",5)
const Avatar = new BoxOffice("Avatar","James Cameron","Fiction",2009,5)

console.log(Titanic.review)
console.log(Avatar.review)
Titanic.changeRating = 9
Avatar.changeRating = 8

console.log(Titanic.review)
console.log(Avatar.review)