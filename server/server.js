const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
//uncomment out when queries and mutations ready in client/
// const { ApolloServer } = require('apollo-server-express'); 

//uncomment when queires and mutations ready
// const { typeDefs, resolver } = require('./schemas') 

const app = express();
const PORT = process.env.PORT || 3001;

//uncomment when queries and mutations ready
// const server = newApolloServer({
//   typeDefs,
//   resolvers
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//comment out when queries and mutations ready
app.use(routes); 

//uncomment when queries and mutations ready
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log( `API server running on port ${PORT}`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     });
//   });
// };

//comment out when queries and mutations ready
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

//uncomment when queries and mutations ready
// startApolloServer(typeDefs, resolvers);