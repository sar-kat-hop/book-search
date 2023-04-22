const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId: String
        authors: [String]
        title: String
        image: String
        description: String
        link: String
    }

    type Query {
        users: [User]!
        user(userId: ID!): [User]!

        books: [Book]!
        // book(bookID: String!)[Book]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!,): Auth

        login(email: String!, password: String!): Auth

        saveBook(bookID: String!, authors: [String]!, title: String!, image: String!, description: String!, link: String!)

        removeBook(bookID: String!, authors: [String]!, title: String!, image: String!, description: String!, link: String!)
    }

`;

module.exports = typeDefs;