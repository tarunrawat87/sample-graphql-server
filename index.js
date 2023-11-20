
const app = require('./app')

const apollo = require('./apollo')


async function startServer(){

    await apollo.start();
    app.post('/graphql',apollo.getMiddleware({ cors: false, bodyParserConfig: false, path: '/' }));




    app.listen(9898,()=> console.log('server is up') );
    

}
startServer();


