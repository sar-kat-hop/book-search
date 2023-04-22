import { gql } from "@apollo/client";

//user login
export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// //user signup mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password {
            username
            email
            password
        }
    }
`;

// save user
export const SAVE_BOOK = gql`
    mutation saveBook($bookID: String!, $authors: [String]!, $description: String!, $title: String!, $image: String!, $link: String!) {
        saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;

// delete book
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!, $authors: [String]!, $description: String!, $title: String!, $image: String!, $link: String!) {
      removeBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
          bookId
          authors
          description
          title
          image
          link
      }
  }
`;
