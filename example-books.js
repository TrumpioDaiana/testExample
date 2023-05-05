//exercise books

class Book {
    constructor (
        title='Unknown',
        author='Unknown',
        pages='0',
        isRead=false
    )
{
this.title=title
this.author=author
this.pages=pages
this.isRead=isRead
}
}

class Library {
    constructor (){
        this.books=[]
    }


addBook (newBook){
    if (!this.isInLibrary(newBook)){
        this.books.push(newBook)}
    }
removeBook (title){
    this.books=this.books.filter((book) => book.title !== title)       
    };

    getBook (title){
        return this.books.find((book) => book.title === title)
    }

    isInLibrary(newBook){
        return this.books.some((book) => book.title === newBook.title)
    }
}

const library = new Library()

const updateBooksGrid =() => {
    resetBookGrid()
    for (let book of library.books) {
        createBookCard(book)
    }
}
const resetBooksGrid =() => {
    resetBooksGrid.innerHTML =''
}

const createBookCard =(book) => {
    const bookCard = document.createElement ('div')
    const title =document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = socument.createElement('button')
}
