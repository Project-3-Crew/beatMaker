import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BEAT = gql`
  mutation addBeat($beatText: String!) {
    addBeat(beatText: $beatText) {
      _id
      beatText
      beatAuthor
      createdAt 
      comments {
        _id
        commentText
      }
    }
  }
`;
export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
  `;
export const ADD_BEAT_COMMENT = gql`
  mutation addBeatComment($beatId: ID!, $commentText: String!) {
    addComment(beatId: $beatId, commentText: $commentText) {
      _id
      BeatText
      beatAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
