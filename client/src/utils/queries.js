import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                title
                image
                description
                link
            }
        }
    }
`;

export const QUERY_BOOKS = gql`
    {
        query getBooks {
            books {
                bookId
                authors
                title
                image
                description
                link
            }
        }
    }
`;