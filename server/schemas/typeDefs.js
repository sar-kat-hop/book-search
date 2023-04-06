const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: String
        description: String
        bookID: Int
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        email: String
        password: String
        savedBooks: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        books: [Book]
        me: User
    }

    type Mutation {
        addUser(email: String, password: String): Auth
        login(email: String, password, String): Auth
        saveBook(bookId: String): Book
        removeBook(bookId: String): Book
    }
`;

module.exports = typeDefs;