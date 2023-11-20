
const {loadFilesSync} = require('@graphql-tools/load-files')
const {mergeTypeDefs} = require('@graphql-tools/merge')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const path = require('path')

const typeDefs = mergeTypeDefs([
    ...loadFilesSync(path.join(__dirname,"../typeDefs"))
])


const resolvers = {
    Query : {
        booksQuery: require('../resolvers/query/books')
    }
}

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})