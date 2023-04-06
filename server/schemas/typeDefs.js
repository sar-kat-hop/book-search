const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type: Book {
        _id: ID
        authors: String
        description: String
        bookID: Int
        image: String
        link: String
        title: String
    }

    type: User {
        _id: ID
        
    }

`;

module.exports = typeDefs;