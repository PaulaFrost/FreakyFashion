import React from 'react';
import { Route } from 'react-router';
import { Layout } from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home  from './Components/Home/Home';
import ProductPage from './Components/ProductPage/ProductPage'

const App = (props) => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/products/:id' component={ProductPage}/>
    </Layout>
  );
}

export default App;
