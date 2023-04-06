const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.find({}).populate('savedBooks');
            }
            throw new AuthenticationError('Please log in to view your saved books.');
        },
    },
// query for searching for books api call?
    Query: {
        books: async () => {
            return await Book.find({});
        }
    }
};

module.exports = resolvers;