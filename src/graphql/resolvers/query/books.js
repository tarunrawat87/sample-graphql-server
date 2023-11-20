

const booksQuery = ( root, args , context )=>{


    return {
        success: true,
        books: [
            {name:'Book'}
        ]
    }
}


module.exports = booksQuery;