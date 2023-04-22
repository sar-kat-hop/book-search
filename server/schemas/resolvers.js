const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async() => {
            return User.find()
                .populate('savedBooks')
        },
        user: async (_, { userId }) => {
            return User.find({ _id: userId })
                .populate('savedBooks')
        },
        books: async() => {
            return Book.find();
        },
    },

    Mutation: {
        addUser: async( _, { username, email, password }) => {
            const user = await User.create({ username, email, password });

            const token = signToken(user);

            return { token, user };
        },

        login: async( _, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Email address not found. Please check your spelling and try again.');
            }

            const validPass = await user.isCorrectPassword(password);

            if(!validPass) {
                throw new AuthenticationError('Password incorrect. Please check your spelling and try again.');
            }

            const token = signToken(user);

            return { token, user };
        },

        saveBook: async (_, { bookId }, context ) => {
            if (context.user) {
                const book = await Book.findById(bookId);
                user.savedbooks.addToSet(bookId);
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: book.bookId }}
                );

                return book;

            } else {
                if (!context.user) {
                    throw new AuthenticationError('Please log in to save a book to your account.')
                }
            }
        },

        removeBook: async ( _, { bookId }, context ) => {
            if(context.user) {
                const currentUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: bookId } },
                    { new: true }
                );

                return currentUser;

            } else {
                if(!context.user) {
                    throw new AuthenticationError('Please log in to remove a book from your account.')
                }
            }
        },
    },
};

module.exports = resolvers;
