import React from 'react';
import { Route } from 'react-router';
import { Layout } from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home  from './Components/Home/Home'

const App = (props) => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route />
    </Layout>
  );
}

export default App;
