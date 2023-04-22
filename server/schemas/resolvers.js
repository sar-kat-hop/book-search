const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async() => {
            return User.find()
                .populate('savedBooks')
        },
        user: async (parent, { userId }) => {
            return User.find({ _id: userId })
                .populate('savedBooks')
        },
        books: async() => {
            return Book.find();
        },
    },

    Mutation: {
        addUser: async( parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });

            const token = signToken(user);

            return { token, user };
        },

        login: async( parent, { email, password }) => {
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

        saveBook: async ( parent, {}, context ) -> {
            if(context.user) {
                const book = await Book.findOneAndUpdate(
                    { _id: bookId },
                    {
                        $addToSet: { }
                    }
                )
            }
        }
    }
}