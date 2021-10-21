const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    sounds:[String]
    username: String
    email: String
    password: String
    thoughts: [Thought]!
    beats: [Beat]
  }

  type Beat {
    _id: ID
    beatText: String
    beatAuthor: String
    createdAt: String
    comments: [Comment]!
  }
  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    addSound(soundKey: String!): Boolean
    
   

  }
`;

module.exports = typeDefs;
