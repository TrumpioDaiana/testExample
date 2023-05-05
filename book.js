function infobook(name,author,pages) {
    this.name= name
    this.author= author
    this.pages= pages
   
}
infobook.prototype.sayInfo= function () {
    console.log('Book name:',name,' - Book Author: ',author, '- Pages book: ',pages) 
}
const book1= new infobook('economy','auth1','800')
book1.sayInfo()