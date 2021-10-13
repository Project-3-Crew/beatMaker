const { AuthenticationError } = require('apollo-server-express');
// const { Tech, Matchup } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // tech: async () => {
    //   return Tech.find({});
    // },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
    users: async () => {
      return User.find().populate('beats');
    },
    user: async (parent, { name }) => {
      return User.findOne({ name }).populate('beats');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('beats');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address.');
      }

      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError('Incorrect credentials.');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;