const {ApolloServer} = require('apollo-server-express')

module.exports = new  ApolloServer({
  schema: require('./src/graphql/schema') ,
  context: ({ req }) => ({ req }),  
})