const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require("graphql");
const Data = require('../../data/booksandauthors');

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Domain object - Book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) }
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'BookQuery',
    description: 'Root query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'Single book',
            args: {
                id: { type: GraphQLInt}
            },
            resolve: (parent, args) => Data.books.find(book => book.id === args.id)
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: () => Data.books
        },
    })
})

module.exports = {
    RootQueryType
}