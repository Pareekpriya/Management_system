fun();

function fun(){

    class Book{
     static totalBooks = 0;

       constructor(title,author,year,isAvailable){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable;

        Book.totalBooks++;
       }

       static showTotalBooks(){
        console.log(`Total Books in Library: ${Book.totalBooks}`);
       }

       get isAvailable(){
        return this._isAvailable;
       }

       set isAvailable(status){
        if(typeof status == "boolean"){
            this._isAvailable = status;
        }else{
            console.log("isAvailable must be a boolean value.");
        }
       }
      
       toString(){
        console.log(`The book ${this.title} is written by ${this.author}`)
       }
      
    }
    
    class EBook extends Book{
        constructor(title,author,year,isAvailable,fileSize){
            super(title,author,year,isAvailable);
            this.fileSize = fileSize;
        }

        download(){
            console.log(`Downloading ${this.title}`)
           }

        toString(){
            console.log(`The book ${this.title} is written by ${this.author}`)
           }
    }

    let EBook1 = new EBook("3idiots","chetanBhagat",2012,true,"340 MB")
    let EBook2 = new EBook("Halfgrilfriend","chetanBhagat",2015,false,"440 MB")


    let Book1 = new Book("madhubala","chetanBhagat",2018,false);
    let Book2 = new Book("Premlata","Dayashankar",1956,true);
    let Book3 = new Book("Kashis","Premchand",1980,false);

   
    Book1.toString();
    Book2.toString();
    Book3.toString();

    EBook1.toString();
    EBook2.toString();

    EBook1.download();
    EBook2.download();


    console.log(EBook1)
    console.log(EBook2)

    console.log(Book1)
    console.log(Book2)

    Book.showTotalBooks();

    console.log(`Is "${Book1.title}" available?`,Book1.isAvailable);

    Book1.isAvailable = !this.isAvailable;
    console.log(`Update availability for "${Book1.title}":`,Book1.isAvailable);
}


  