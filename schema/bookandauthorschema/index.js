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
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return Data.authors.find(author => author.id === book.authorId)
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Domain object - Author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(BookType),
            resolve: (author) => {
                return Data.books.filter(book => book.authorId === author.id)
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'BookAuthorQuery',
    description: 'Root query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: () => Data.books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of All Books',
            resolve: () => Data.authors
        },
    })
});
const RootMutationType = new GraphQLObjectType({
    name: 'BookAuthorMutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a new book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString)},
                authorId: { type: GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                const book = {
                    id: uuidv4(),
                    name: args.name,
                    authorId: args.authorId
                };
                Data.books.push(book);
                return book;
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add a new author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve:(parent, args) => {
                const author = {
                    id: uuidv4(),
                    name: args.name
                }
                Data.authors.push(author);
                return author;
            }
        }
    })
})

module.exports = {
    RootQueryType,
    RootMutationType
}