import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
//import apollo client
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import setContext
import { setContext } from '@apollo/client/link/context';

const client = newApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SearchBooks />}
          />
          <Route 
            path="/saved"
            element={<SavedBooks />}
          />
          <Route 
            path="*"
            render={() => <h1 className='display-2'>Wrong page!</h1>}
          />
          {/* <> */}
          <Navbar />
          {/* </> */}
        </Routes>
      </Router>



    </ApolloProvider>
  )
}

// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component={SearchBooks} />
//           <Route exact path='/saved' component={SavedBooks} />
//           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//         </Switch>
//       </>
//     </Router>
//   );
// }

export default App;
